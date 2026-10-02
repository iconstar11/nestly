export default function Hero() {
  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-forest/5 to-cream" />
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-12 [@media(max-height:500px)]:py-6 text-center">
        <p className="text-sm font-semibold tracking-widest text-terracotta uppercase mb-4 [@media(max-height:500px)]:mb-2">
          Short-stay accommodation in Nairobi
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-earth leading-tight mb-4 [@media(max-height:500px)]:text-3xl">
          Give your accommodation a professional online presence.
        </h1>
        <p className="text-lg sm:text-xl text-earth/60 max-w-xl mx-auto mb-6 leading-relaxed [@media(max-height:500px)]:text-base">
          Get a mobile-friendly property website with your own .site domain, branded email,
          and direct WhatsApp enquiries.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="bg-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold/90 transition-all shadow-md hover:shadow-lg"
          >
            Get your property website
          </a>
          <a
            href="#portfolio"
            className="text-forest font-semibold px-8 py-4 rounded-full border-2 border-forest/20 hover:border-forest hover:bg-forest/5 transition-all"
          >
            View an example
          </a>
        </div>
        <p className="mt-6 text-sm text-earth/40 [@media(max-height:500px)]:hidden">
          Built for furnished apartments, serviced apartments, and holiday stays in Nairobi
        </p>
      </div>
    </section>
  );
}
