import { useState } from 'react';
import {
  PRICES,
  formatKES,
  discounted,
  useReferralCode,
  applyCode,
  clearCode,
  waLink,
  logEnquiry,
} from '../lib/referral';

const starter = [
  'One mobile-friendly property website',
  'Property description and amenities',
  'Photo gallery',
  'Location and nearby places',
  'Pricing and contact details',
  'WhatsApp enquiry button',
  'Basic Google search setup',
  'Free .site domain for the first three years',
  'One revision round',
  'Website published and ready to share',
];

const premium = [
  'Everything in Starter',
  'Availability calendar on your website',
  'Guests book online and pay a deposit by M-Pesa',
  'Deposits go straight to your own Till or Paybill',
  'Simple dashboard to block dates and see bookings',
  'More detailed page copy',
  'House rules and FAQs',
  'Enhanced local search setup',
  'Social-media sharing preview',
  'Basic visitor and enquiry tracking',
  'Free .site domain for the first three years',
  'One branded email address',
  'Two revision rounds',
  'Thirty days of minor post-launch updates',
];

function Check({ gold = false }) {
  return <span className={`font-bold ${gold ? 'text-gold' : 'text-forest'}`}>&#10003;</span>;
}

const WA_BASE =
  'Hello Nestly, I would like a website for my accommodation.\nMy property is in: \nMy preferred package is: ';

function Price({ pkg, code, light = false }) {
  const full = PRICES[pkg];
  if (!code) {
    return <p className="font-display text-4xl font-bold mb-2">{formatKES(full)}</p>;
  }
  return (
    <div className="mb-2">
      <p className={`text-sm line-through ${light ? 'text-white/50' : 'text-earth/40'}`}>
        {formatKES(full)}
      </p>
      <p className="font-display text-4xl font-bold">{formatKES(discounted(full))}</p>
    </div>
  );
}

function CodeBox({ code }) {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState('idle');

  async function submit(e) {
    e.preventDefault();
    setStatus('checking');
    const ok = await applyCode(value);
    setStatus(ok ? 'idle' : 'invalid');
    if (ok) setValue('');
  }

  if (code) {
    return (
      <div className="max-w-md mx-auto mb-10 bg-forest/10 text-forest rounded-xl px-5 py-3 text-sm text-center">
        Referral code <strong>{code}</strong> applied: 10% off.{' '}
        <button type="button" onClick={clearCode} className="underline text-forest/70 hover:text-forest">
          Remove
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="max-w-md mx-auto mb-10">
      <label htmlFor="ref-code" className="block text-sm text-earth/60 text-center mb-2">
        Have a referral code? Get 10% off.
      </label>
      <div className="flex gap-2">
        <input
          id="ref-code"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setStatus('idle');
          }}
          placeholder="Enter code"
          className="flex-1 min-w-0 rounded-full border border-sand bg-white px-4 py-2 text-sm uppercase focus:outline-none focus:border-forest"
        />
        <button
          type="submit"
          disabled={!value.trim() || status === 'checking'}
          className="bg-forest text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-forest/90 disabled:opacity-50"
        >
          {status === 'checking' ? 'Checking…' : 'Apply'}
        </button>
      </div>
      {status === 'invalid' && (
        <p className="text-sm text-red-600 text-center mt-2">That code isn&rsquo;t valid. Please check it.</p>
      )}
    </form>
  );
}

export default function Pricing() {
  const code = useReferralCode();

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-terracotta uppercase text-center mb-4">
          Pricing
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-earth mb-4">
          Two Simple One-Time Packages
        </h2>
        <p className="text-center text-earth/60 mb-8 max-w-md mx-auto">
          One-time payment. No monthly website fee.
        </p>

        <CodeBox code={code} />

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-sand p-8 text-center hover:shadow-md transition-shadow flex flex-col">
            <p className="text-sm font-semibold tracking-widest text-terracotta uppercase mb-3">
              Starter
            </p>
            <div className="text-earth">
              <Price pkg="Starter" code={code} />
            </div>
            <p className="text-earth/50 text-sm mb-6">One-time payment</p>
            <ul className="text-left text-sm text-earth/70 space-y-3 mb-8 flex-1">
              {starter.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={waLink(WA_BASE + 'Starter', code)}
              onClick={() => logEnquiry(code, 'Starter')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-forest text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-forest/90 transition-colors"
            >
              Enquire on WhatsApp
            </a>
          </div>

          <div className="bg-forest rounded-2xl p-8 text-center text-white relative hover:shadow-lg transition-shadow flex flex-col">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
              Online Booking
            </span>
            <p className="text-sm font-semibold tracking-widest text-white/70 uppercase mb-3">
              Premium
            </p>
            <Price pkg="Premium" code={code} light />
            <p className="text-white/60 text-sm mb-6">One-time payment</p>
            <ul className="text-left text-sm text-white/80 space-y-3 mb-8 flex-1">
              {premium.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check gold />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={waLink(WA_BASE + 'Premium', code)}
              onClick={() => logEnquiry(code, 'Premium')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gold/90 transition-colors"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 space-y-4 text-sm text-earth/60 max-w-lg mx-auto text-center leading-relaxed">
          <p>
            Premium includes one branded email address, such as{' '}
            <span className="font-semibold text-earth/80">hello@yourproperty.site</span>
          </p>
          <p>
            The .site domain (and, on Premium, the branded email) is included for the first three
            years. Renewal after that is charged separately at the provider&rsquo;s current renewal
            price.
          </p>
          <p className="text-xs text-earth/40">
            Premium email includes basic forwarding or mailbox setup, depending on the selected domain and
            email provider.
          </p>
        </div>
      </div>
    </section>
  );
}
