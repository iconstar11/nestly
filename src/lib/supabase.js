import { createClient } from '@supabase/supabase-js';

// Public values (the anon key is safe to ship; row-level security protects the data).
// Set them in .env — see .env.example.
const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase =
  url && anonKey
    ? createClient(url, anonKey, { auth: { flowType: 'implicit', detectSessionInUrl: true } })
    : null;
