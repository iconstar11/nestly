export default function Footer() {
  return (
    <footer className="bg-earth text-white/60 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-display text-xl font-bold text-white mb-3 tracking-wide">Nestly Africa</p>
        <p className="text-sm mb-8 max-w-sm mx-auto leading-relaxed">
          Independent web presence for Nairobi BnB hosts.
          <br />
          Get found on Google and AI — not just Airbnb.
        </p>
        <a
          href="https://wa.me/254712345678"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gold/90 transition-colors mb-8"
        >
          Message on WhatsApp
        </a>
        <p className="text-xs text-white/30">
          &copy; {new Date().getFullYear()} Nestly Africa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
