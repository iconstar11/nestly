import { useReferralCode, waLink, logEnquiry } from '../lib/referral';

const WA_MESSAGE =
  'Hello Nestly, I would like a website for my accommodation.\nMy property is in: \nMy preferred package is: ';

export default function Footer() {
  const code = useReferralCode();
  return (
    <footer className="bg-earth text-white/60 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-display text-xl font-bold text-white mb-3 tracking-wide">Nestly Africa</p>
        <p className="text-sm mb-8 max-w-sm mx-auto leading-relaxed">
          Property websites for short-stay accommodation across Africa.
          <br />
          Photos, amenities, location, pricing, and direct WhatsApp enquiries — in one shareable link.
        </p>
        <a
          href={waLink(WA_MESSAGE, code)}
          onClick={() => logEnquiry(code)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gold/90 transition-colors mb-8"
        >
          Enquire on WhatsApp
        </a>
        <p className="text-sm mb-6">
          <a href="/partner.html" className="text-white/60 underline underline-offset-4 hover:text-white">
            Become an affiliate
          </a>
        </p>
        <p className="text-xs text-white/30">
          &copy; {new Date().getFullYear()} Nestly Africa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
