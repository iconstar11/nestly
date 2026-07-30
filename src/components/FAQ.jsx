import { useState } from 'react';

const faqs = [
  {
    q: 'I already have an Airbnb listing. Why do I need this?',
    a: 'Airbnb owns your guest relationship — not you. When someone searches "BnB near 2 Rivers Mall" on Google or asks ChatGPT for a recommendation, your Airbnb listing might show up, but Airbnb takes 15% and owns the booking. A Nestly page means you show up independently, guests book direct, and you keep 100%. It\'s not instead of Airbnb — it\'s in addition to it.',
  },
  {
    q: 'Will people actually find my page on Google?',
    a: 'Yes. Every Nestly page is built with landmark-based keywords (e.g., "near Sarit Centre," "Westlands furnished apartment") that match what travelers actually search. We include structured data markup so Google, ChatGPT, and Claude can read your listing like a hotel — with price, amenities, and location all machine-readable. Most hosts have zero web presence outside Airbnb; this changes that.',
  },
  {
    q: 'How fast can you build my page?',
    a: 'Once you send us your photos and details via WhatsApp, your page is live within 24 hours. Usually faster.',
  },
  {
    q: 'Do I need to be technical?',
    a: 'Not at all. You send us your info on WhatsApp, we handle everything technical, and you get a link to share. That\'s it. If you want something changed later, just message us.',
  },
  {
    q: 'What if I don\'t get direct bookings?',
    a: 'Your page pays for itself with one extra direct booking per month. Most hosts see inquiries within the first few weeks as their page gets indexed by Google. We can\'t guarantee bookings (no one can), but we can guarantee your page is built to the same SEO standards that hotels and professional properties use.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. The monthly retainer has no contract and no minimum term. If you stop, we take down the page. You own nothing and owe nothing. It\'s that simple.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-terracotta uppercase text-center mb-4">
          FAQ
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-earth mb-16">
          Questions Hosts Ask
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-sand rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-earth hover:bg-sand/30 transition-colors"
              >
                <span className="pr-4">{faq.q}</span>
                <span className={`text-forest text-lg transition-transform flex-shrink-0 ${open === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  open === i ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="px-5 text-sm text-earth/60 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
