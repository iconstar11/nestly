const features = [
  {
    title: 'Your Own Landing Page',
    desc: 'A beautiful single-page site with your photos, amenities, location, and booking links. Looks professional, not like a template.',
    icon: '\u{1F3E1}',
  },
  {
    title: 'Google SEO Built In',
    desc: 'Meta tags, landmark keywords, and location targeting so guests searching "BnB near Sarit Centre" find your page on Google.',
    icon: '\u{1F4C8}',
  },
  {
    title: 'AI Search Ready',
    desc: 'Schema markup and structured data so ChatGPT, Claude, and Perplexity can see, understand, and recommend your property.',
    icon: '\u{1F916}',
  },
  {
    title: 'WhatsApp Booking',
    desc: 'Direct WhatsApp button on your page. Guests message you instantly — no platform middleman, no commission.',
    icon: '\u{1F4AC}',
  },
  {
    title: 'Free Short Link',
    desc: 'A clean Bitly link you can share anywhere — WhatsApp, Instagram, business cards. Easy to remember, easy to track.',
    icon: '\u{1F517}',
  },
  {
    title: 'Updates Included',
    desc: 'New photos, changed prices, added amenities — we update your page anytime. Part of the monthly retainer.',
    icon: '\u{1F527}',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-terracotta uppercase text-center mb-4">
          What You Get
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-earth mb-16">
          Everything You Need to Be Found Online
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 border border-sand hover:border-forest/20 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-earth mb-2">{f.title}</h3>
              <p className="text-sm text-earth/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
