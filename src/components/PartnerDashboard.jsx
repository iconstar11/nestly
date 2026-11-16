import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { PRICES, formatKES, discounted, REWARD } from '../lib/referral';

const STATUS_LABEL = {
  enquired: 'Enquired',
  client_paid: 'Paid — reward pending',
  reward_paid: 'Reward paid',
  cancelled: 'Cancelled',
};

const input =
  'w-full rounded-full border border-sand bg-white px-4 py-3 text-sm focus:outline-none focus:border-forest';
const button =
  'w-full bg-forest text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-forest/90 disabled:opacity-50';

function Card({ children }) {
  return <div className="bg-white rounded-2xl border border-sand p-6 sm:p-8">{children}</div>;
}

function SignIn() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle');
  const [error, setError] = useState('');

  async function submit(e) {
    e.preventDefault();
    setState('sending');
    const { error: err } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: `${window.location.origin}/partner.html` },
    });
    if (err) {
      setError(err.message);
      setState('idle');
    } else {
      setState('sent');
    }
  }

  if (state === 'sent') {
    return (
      <Card>
        <h2 className="font-display text-2xl font-bold mb-3">Check your email</h2>
        <p className="text-earth/70">
          We sent a sign-in link to <strong>{email}</strong>. Open it to continue.
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <h2 className="font-display text-2xl font-bold mb-2">Become an Affiliate</h2>
      <p className="text-earth/60 text-sm mb-6">
        Enter your email. We&rsquo;ll send you a link to sign in. No password needed.
      </p>
      <form onSubmit={submit} className="space-y-4">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={input}
        />
        <button type="submit" disabled={state === 'sending'} className={button}>
          {state === 'sending' ? 'Sending…' : 'Send sign-in link'}
        </button>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </form>
    </Card>
  );
}

function Join({ onJoined }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function submit(e) {
    e.preventDefault();
    setSaving(true);
    const { error: err } = await supabase.rpc('create_affiliate', { p_name: name, p_phone: phone });
    setSaving(false);
    if (err) setError(err.message);
    else onJoined();
  }

  return (
    <Card>
      <h2 className="font-display text-2xl font-bold mb-2">Get your referral code</h2>
      <p className="text-earth/60 text-sm mb-6">Rewards are sent to this M-Pesa number.</p>
      <form onSubmit={submit} className="space-y-4">
        <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className={input} />
        <input
          required
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="M-Pesa number, e.g. 0712 345 678"
          className={input}
        />
        <button type="submit" disabled={saving} className={button}>
          {saving ? 'Creating…' : 'Create my code'}
        </button>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </form>
    </Card>
  );
}

function Dashboard({ affiliate, referrals }) {
  const [copied, setCopied] = useState(false);
  const link = `${window.location.origin}/?ref=${affiliate.code}`;
  const shareText = `Get a professional website for your short-stay property, with 10% off using my code ${affiliate.code}: ${link}`;

  const pending = referrals.filter((r) => r.status === 'client_paid').reduce((s, r) => s + (r.reward_kes || 0), 0);
  const paid = referrals.filter((r) => r.status === 'reward_paid').reduce((s, r) => s + (r.reward_kes || 0), 0);

  async function copy() {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked: the link is still visible to copy by hand
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <p className="text-sm text-earth/60 mb-1">Hi {affiliate.name.split(' ')[0]}, your referral code</p>
        <p className="font-display text-4xl font-bold text-forest mb-4 tracking-wide">{affiliate.code}</p>
        <p className="text-sm text-earth/60 mb-2">Your link</p>
        <div className="flex gap-2 mb-4">
          <input readOnly value={link} className={`${input} flex-1 min-w-0`} onFocus={(e) => e.target.select()} />
          <button type="button" onClick={copy} className="shrink-0 bg-forest text-white px-5 rounded-full text-sm font-semibold">
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <a
          href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-semibold"
        >
          Share on WhatsApp
        </a>
        <p className="text-xs text-earth/50 mt-4">
          Owners get 10% off. You earn 20% of what they pay: {formatKES(discounted(PRICES.Starter) * REWARD)} for
          Starter, {formatKES(discounted(PRICES.Premium) * REWARD)} for Premium.
        </p>
      </Card>

      <div className="grid grid-cols-3 gap-3 text-center">
        {[
          ['Referrals', referrals.length],
          ['Pending', formatKES(pending)],
          ['Paid out', formatKES(paid)],
        ].map(([label, value]) => (
          <div key={label} className="bg-white rounded-2xl border border-sand p-4">
            <p className="text-xs text-earth/50 mb-1">{label}</p>
            <p className="font-bold text-earth text-sm sm:text-lg">{value}</p>
          </div>
        ))}
      </div>

      <Card>
        <h3 className="font-semibold mb-4">Your referrals</h3>
        {referrals.length === 0 ? (
          <p className="text-sm text-earth/60">No referrals yet. Share your link to get started.</p>
        ) : (
          <ul className="divide-y divide-sand text-sm">
            {referrals.map((r) => (
              <li key={r.id} className="py-3 flex justify-between gap-4">
                <span>
                  {r.owner_name || r.package}
                  <span className="block text-xs text-earth/50">
                    {new Date(r.created_at).toLocaleDateString('en-KE')}
                  </span>
                </span>
                <span className="text-right">
                  {STATUS_LABEL[r.status]}
                  {r.reward_kes ? <span className="block text-xs text-forest">{formatKES(r.reward_kes)}</span> : null}
                </span>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}

export default function PartnerDashboard() {
  const [session, setSession] = useState(undefined);
  const [affiliate, setAffiliate] = useState(undefined);
  const [referrals, setReferrals] = useState([]);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  async function load() {
    const { data: a } = await supabase.from('affiliates').select('*').maybeSingle();
    setAffiliate(a);
    if (a) {
      const { data: r } = await supabase.from('referrals').select('*').order('created_at', { ascending: false });
      setReferrals(r || []);
    }
  }

  useEffect(() => {
    if (session) load();
  }, [session]);

  let body;
  if (!supabase) body = <Card>The affiliate program is not available yet. Please check back soon.</Card>;
  else if (session === undefined || (session && affiliate === undefined)) body = <p className="text-center text-earth/50">Loading…</p>;
  else if (!session) body = <SignIn />;
  else if (!affiliate) body = <Join onJoined={load} />;
  else body = <Dashboard affiliate={affiliate} referrals={referrals} />;

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-10">
          <a href="/" className="font-display text-xl font-bold text-forest tracking-wide">
            Nestly Africa
          </a>
          {session && (
            <button type="button" onClick={() => supabase.auth.signOut()} className="text-sm text-earth/60 hover:text-forest">
              Sign out
            </button>
          )}
        </div>
        {body}
      </div>
    </div>
  );
}
