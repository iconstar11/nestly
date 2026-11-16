import { useSyncExternalStore } from 'react';
import { supabase } from './supabase';

export const WA_NUMBER = '254141722106';
export const DISCOUNT = 0.1;
export const REWARD = 0.2;
export const PRICES = { Starter: 18000, Premium: 35000 };

export const formatKES = (n) => `KES ${Math.round(n).toLocaleString('en-KE')}`;
export const discounted = (price) => Math.round(price * (1 - DISCOUNT));

const KEY = 'nestly_ref';
const listeners = new Set();
let code = null;

function read() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function write(value) {
  try {
    if (value) localStorage.setItem(KEY, value);
    else localStorage.removeItem(KEY);
  } catch {
    // storage unavailable: keep the code in memory only
  }
}

function set(value) {
  code = value;
  write(value);
  listeners.forEach((l) => l());
}

const normalise = (raw) => (raw || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 12) || null;

// Returns true if the code is valid (or can't be checked because the backend isn't configured).
async function isValid(value) {
  if (!supabase) return true;
  const { data, error } = await supabase.rpc('check_referral_code', { p_code: value });
  return error ? true : Boolean(data);
}

export async function applyCode(raw) {
  const value = normalise(raw);
  if (!value || !(await isValid(value))) return false;
  set(value);
  return true;
}

export function clearCode() {
  set(null);
}

// On first load: take ?ref=CODE from the URL, otherwise the remembered code.
if (typeof window !== 'undefined') {
  const fromUrl = normalise(new URLSearchParams(window.location.search).get('ref'));
  code = fromUrl || read();
  if (code) {
    isValid(code).then((ok) => (ok ? set(code) : set(null)));
  }
}

export function useReferralCode() {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => code
  );
}

export function waLink(message, refCode) {
  const text = refCode ? `${message}\nReferral code: ${refCode}` : message;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

// Record the enquiry against the code (once per package per browser session).
export function logEnquiry(refCode, pkg = 'Not sure') {
  if (!supabase || !refCode) return;
  const flag = `nestly_logged_${refCode}_${pkg}`;
  try {
    if (sessionStorage.getItem(flag)) return;
    sessionStorage.setItem(flag, '1');
  } catch {
    // ignore
  }
  supabase.rpc('log_referral_enquiry', { p_code: refCode, p_package: pkg }).then(() => {});
}
