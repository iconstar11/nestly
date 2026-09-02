const items = [
  { title: 'Live property website', icon: '\u{1F310}' },
  { title: 'Free .site domain for the first year', icon: '\u{1F517}' },
  { title: 'One branded email address', icon: '\u{2709}' },
  { title: 'Mobile-friendly design', icon: '\u{1F4F1}' },
  { title: 'WhatsApp enquiry button', icon: '\u{1F4AC}' },
  { title: 'Google-ready page setup', icon: '\u{1F50D}' },
  { title: 'A link ready to share on WhatsApp and social media', icon: '\u{1F91D}' },
];

export default function WhatYouReceive() {
  return (
    <section id="what-you-receive" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-terracotta uppercase text-center mb-4">
          What you receive
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-earth mb-6">
          Everything You Need to Be Found Online
        </h2>
        <p className="text-center text-earth/60 mb-16 max-w-lg mx-auto">
          You receive a live, shareable website for your accommodation. It includes your photos,
          property details, amenities, location, pricing, and direct WhatsApp contact.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-sand hover:border-forest/20 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-earth">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
