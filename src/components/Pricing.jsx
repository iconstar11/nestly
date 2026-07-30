export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-terracotta uppercase text-center mb-4">
          Pricing
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-earth mb-4">
          Simple, Transparent, Affordable
        </h2>
        <p className="text-center text-earth/60 mb-16 max-w-md mx-auto">
          Priced in Kenyan Shillings. Anchored to what you already charge — not a random USD number.
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-sand p-8 text-center hover:shadow-md transition-shadow">
            <p className="text-sm font-semibold tracking-widest text-terracotta uppercase mb-3">
              One-Time Setup
            </p>
            <p className="font-display text-4xl font-bold text-earth mb-2">1× Nightly Rate</p>
            <p className="text-earth/50 text-sm mb-6">Example: KES 8,000/night = KES 8,000 setup</p>
            <ul className="text-left text-sm text-earth/70 space-y-3 mb-8">
              <li className="flex gap-2">
                <span className="text-forest font-bold">&#10003;</span>
                Landing page with your photos &amp; details
              </li>
              <li className="flex gap-2">
                <span className="text-forest font-bold">&#10003;</span>
                Google SEO + AI search optimization
              </li>
              <li className="flex gap-2">
                <span className="text-forest font-bold">&#10003;</span>
                WhatsApp booking button
              </li>
              <li className="flex gap-2">
                <span className="text-forest font-bold">&#10003;</span>
                Free Bitly short link
              </li>
              <li className="flex gap-2">
                <span className="text-forest font-bold">&#10003;</span>
                Live in 24 hours
              </li>
            </ul>
          </div>

          <div className="bg-forest rounded-2xl p-8 text-center text-white relative hover:shadow-lg transition-shadow">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
              Most Popular
            </span>
            <p className="text-sm font-semibold tracking-widest text-white/70 uppercase mb-3">
              Monthly Retainer
            </p>
            <p className="font-display text-4xl font-bold mb-2">~25% of Nightly Rate</p>
            <p className="text-white/60 text-sm mb-6">Example: KES 8,000/night ≈ KES 2,000/month</p>
            <ul className="text-left text-sm text-white/80 space-y-3 mb-8">
              <li className="flex gap-2">
                <span className="text-gold font-bold">&#10003;</span>
                Hosting &amp; uptime
              </li>
              <li className="flex gap-2">
                <span className="text-gold font-bold">&#10003;</span>
                Content updates anytime
              </li>
              <li className="flex gap-2">
                <span className="text-gold font-bold">&#10003;</span>
                Photo changes &amp; new amenities
              </li>
              <li className="flex gap-2">
                <span className="text-gold font-bold">&#10003;</span>
                Performance reports
              </li>
              <li className="flex gap-2">
                <span className="text-gold font-bold">&#10003;</span>
                Cancel anytime, no lock-in
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-earth/60 text-sm mt-10 max-w-lg mx-auto leading-relaxed">
          Breaks even in less than <strong className="text-forest">one extra direct booking per month</strong>.
          Everything after that is pure profit. If you stop paying, the page comes down — no contracts, no lock-in.
        </p>
      </div>
    </section>
  );
}
