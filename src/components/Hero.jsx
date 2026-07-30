export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-forest/5 to-cream" />
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-32 text-center">
        <p className="text-sm font-semibold tracking-widest text-terracotta uppercase mb-6">
          African BnB Hosts
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-earth leading-tight mb-6">
          Airbnb Takes 15% of Every Booking.
          <br />
          <span className="text-forest">What Do You Have to Show for It?</span>
        </h1>
        <p className="text-lg sm:text-xl text-earth/60 max-w-xl mx-auto mb-10 leading-relaxed">
          We build you a Google-visible landing page so guests find <em>you</em> directly — on search,
          on ChatGPT, on Claude. Not just Airbnb. And you keep 100% of every direct booking.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#calculator"
            className="bg-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold/90 transition-all shadow-md hover:shadow-lg"
          >
            See How Much You're Losing
          </a>
          <a
            href="#how-it-works"
            className="text-forest font-semibold px-8 py-4 rounded-full border-2 border-forest/20 hover:border-forest hover:bg-forest/5 transition-all"
          >
            How It Works
          </a>
        </div>
        <p className="mt-12 text-sm text-earth/40">
          Trusted by hosts in Nairobi, Lagos, Accra & beyond
        </p>
      </div>
    </section>
  );
}
