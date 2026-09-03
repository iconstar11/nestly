const starter = [
  'One mobile-friendly property website',
  'Property description and amenities',
  'Photo gallery',
  'Location and nearby places',
  'Pricing and contact details',
  'WhatsApp enquiry button',
  'Basic Google search setup',
  'Free .site domain for the first year',
  'One branded email address',
  'One revision round',
  'Website published and ready to share',
];

const professional = [
  'Everything in Starter',
  'More detailed page copy',
  'House rules and FAQs',
  'Enhanced local search setup',
  'Social-media sharing preview',
  'Basic visitor and enquiry tracking',
  'Free .site domain for the first year',
  'One branded email address',
  'Two revision rounds',
  'Thirty days of minor post-launch updates',
];

function Check({ gold = false }) {
  return <span className={`font-bold ${gold ? 'text-gold' : 'text-forest'}`}>&#10003;</span>;
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-terracotta uppercase text-center mb-4">
          Pricing
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-earth mb-4">
          Two Simple One-Time Packages
        </h2>
        <p className="text-center text-earth/60 mb-16 max-w-md mx-auto">
          One-time payment. No monthly website fee.
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-sand p-8 text-center hover:shadow-md transition-shadow flex flex-col">
            <p className="text-sm font-semibold tracking-widest text-terracotta uppercase mb-3">
              Starter
            </p>
            <p className="font-display text-4xl font-bold text-earth mb-2">KES 11,000</p>
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
              href="https://wa.me/254141722106"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-forest text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-forest/90 transition-colors"
            >
              Enquire on WhatsApp
            </a>
          </div>

          <div className="bg-forest rounded-2xl p-8 text-center text-white relative hover:shadow-lg transition-shadow flex flex-col">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
              Most Popular
            </span>
            <p className="text-sm font-semibold tracking-widest text-white/70 uppercase mb-3">
              Professional
            </p>
            <p className="font-display text-4xl font-bold mb-2">KES 15,000</p>
            <p className="text-white/60 text-sm mb-6">One-time payment</p>
            <ul className="text-left text-sm text-white/80 space-y-3 mb-8 flex-1">
              {professional.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check gold />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/254141722106"
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
            One branded email address, such as{' '}
            <span className="font-semibold text-earth/80">hello@yourproperty.site</span>
          </p>
          <p>
            The .site domain and branded email are included for the first year. Renewal after the
            first year is charged separately at the provider&rsquo;s current renewal price.
          </p>
          <p className="text-xs text-earth/40">
            Email includes basic forwarding or mailbox setup, depending on the selected domain and
            email provider.
          </p>
        </div>
      </div>
    </section>
  );
}
