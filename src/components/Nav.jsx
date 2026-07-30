import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-bold text-forest tracking-wide">
          Nestly Africa
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
          <a href="#how-it-works" className="text-earth/70 hover:text-forest transition-colors">How It Works</a>
          <a href="#features" className="text-earth/70 hover:text-forest transition-colors">Features</a>
          <a href="#portfolio" className="text-earth/70 hover:text-forest transition-colors">Portfolio</a>
          <a href="#pricing" className="text-earth/70 hover:text-forest transition-colors">Pricing</a>
        </div>
        <a
          href="https://wa.me/254712345678"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gold/90 transition-colors shadow-sm"
        >
          WhatsApp Us
        </a>
      </div>
    </nav>
  );
}
