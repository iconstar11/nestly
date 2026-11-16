-- Nestly affiliate program schema.
-- Run once in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.

-- Affiliates: one row per signed-in partner.
create table if not exists public.affiliates (
  id uuid primary key references auth.users (id) on delete cascade,
  name text not null,
  phone text not null,               -- M-Pesa number for payouts
  code text not null unique,         -- referral code, e.g. JANE482
  active boolean not null default true,  -- set false to disable a code
  created_at timestamptz not null default now()
);

-- Referrals: one row per enquiry that used a code.
-- Admin workflow (Table Editor):
--   owner pays    -> status = 'client_paid', amount_paid_kes = what they paid
--   reward sent   -> status = 'reward_paid'
create table if not exists public.referrals (
  id bigint generated always as identity primary key,
  code text not null references public.affiliates (code) on update cascade,
  package text not null,
  status text not null default 'enquired'
    check (status in ('enquired', 'client_paid', 'reward_paid', 'cancelled')),
  owner_name text,
  amount_paid_kes integer,
  reward_kes integer generated always as (amount_paid_kes / 5) stored,  -- 20%
  created_at timestamptz not null default now()
);

alter table public.affiliates enable row level security;
alter table public.referrals enable row level security;

-- Partners can read only their own row and their own referrals.
drop policy if exists "affiliates read own" on public.affiliates;
create policy "affiliates read own" on public.affiliates
  for select to authenticated using (auth.uid() = id);

drop policy if exists "referrals read own" on public.referrals;
create policy "referrals read own" on public.referrals
  for select to authenticated
  using (code in (select a.code from public.affiliates a where a.id = auth.uid()));

-- Sign up as a partner. Returns the partner's code (existing one if already joined).
create or replace function public.create_affiliate(p_name text, p_phone text)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_code text;
  v_prefix text;
begin
  if auth.uid() is null then
    raise exception 'Not signed in';
  end if;

  select code into v_code from affiliates where id = auth.uid();
  if v_code is not null then
    return v_code;
  end if;

  if length(trim(p_name)) < 2 or length(regexp_replace(p_phone, '\D', '', 'g')) < 9 then
    raise exception 'Please enter your name and a valid phone number';
  end if;

  v_prefix := upper(left(regexp_replace(p_name, '[^A-Za-z]', '', 'g'), 6));
  if length(v_prefix) < 2 then
    v_prefix := 'NEST';
  end if;

  loop
    v_code := v_prefix || lpad((floor(random() * 1000))::int::text, 3, '0');
    exit when not exists (select 1 from affiliates where code = v_code);
  end loop;

  insert into affiliates (id, name, phone, code)
  values (auth.uid(), trim(p_name), trim(p_phone), v_code);

  return v_code;
end;
$$;

-- Public: is this code valid? (Does not expose the affiliate list.)
create or replace function public.check_referral_code(p_code text)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (select 1 from affiliates where code = upper(trim(p_code)) and active);
$$;

-- Public: record an enquiry that used a code.
create or replace function public.log_referral_enquiry(p_code text, p_package text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_package not in ('Starter', 'Premium', 'Not sure') then
    return;
  end if;
  insert into referrals (code, package)
  select code, p_package from affiliates where code = upper(trim(p_code)) and active;
end;
$$;

revoke all on function public.create_affiliate(text, text) from public, anon;
grant execute on function public.create_affiliate(text, text) to authenticated;
grant execute on function public.check_referral_code(text) to anon, authenticated;
grant execute on function public.log_referral_enquiry(text, text) to anon, authenticated;
