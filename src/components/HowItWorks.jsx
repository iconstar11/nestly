const steps = [
  {
    step: '01',
    title: 'Share Your Property Details',
    desc: 'Send us your photos, amenities, prices, and location on WhatsApp. Takes about 15 minutes.',
    icon: '\u{1F4F1}',
  },
  {
    step: '02',
    title: 'We Build Your Website',
    desc: 'A mobile-friendly property website with photo gallery, amenities, location, pricing, and contact details.',
    icon: '\u{1F3D7}',
  },
  {
    step: '03',
    title: 'Guests Find You',
    desc: 'Google-ready setup helps your page get discovered by people searching for stays in your area.',
    icon: '\u{1F50D}',
  },
  {
    step: '04',
    title: 'Guests Enquire Directly',
    desc: 'Visitors reach you straight on WhatsApp. You reply to every enquiry yourself.',
    icon: '\u{1F4AC}',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-terracotta uppercase text-center mb-4">
          How It Works
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-earth mb-16">
          From WhatsApp Chat to Live Website
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-forest/10 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <p className="text-xs font-bold text-forest/40 mb-2">{s.step}</p>
              <h3 className="font-display text-lg font-bold text-earth mb-2">{s.title}</h3>
              <p className="text-sm text-earth/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
