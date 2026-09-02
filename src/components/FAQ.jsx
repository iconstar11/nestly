import { useState } from 'react';

const faqs = [
  {
    q: 'Who is this for?',
    a: 'Owners of short-stay accommodation in Nairobi — furnished apartments, serviced apartments, and holiday stays. If guests stay overnight at your property and you want them to find and contact you directly, this is for you.',
  },
  {
    q: 'Do I need to be technical?',
    a: 'Not at all. You send us your photos and details on WhatsApp, we handle everything technical, and you get a link ready to share. If you want something changed later, just message us.',
  },
  {
    q: 'How long does it take?',
    a: 'Once we receive your photos and property details, most websites go live within a few days. You\'ll get the link on WhatsApp as soon as it\'s ready to share.',
  },
  {
    q: 'Will my website show up on Google?',
    a: 'Every website includes Google-ready setup: search-friendly page structure, location details, and structured data. This gives your page the technical foundation to be found, but rankings depend on search behaviour and grow over time — we don\'t guarantee specific positions.',
  },
  {
    q: 'Do you handle bookings or take payments?',
    a: 'No. Your website sends enquiries straight to you on WhatsApp. You confirm availability, agree terms, and take payment directly with your guest — the way you already do.',
  },
  {
    q: 'Can I request changes after my website goes live?',
    a: 'Yes. Starter includes one revision round. Professional includes two revision rounds and thirty days of minor post-launch updates. After that, additional changes can be arranged as needed.',
  },
  {
    q: 'What happens after the first year?',
    a: 'The .site domain and branded email are included for the first year. Renewal after the first year is charged separately at the provider\'s current renewal price. Your website itself keeps working — there is no monthly website fee.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-terracotta uppercase text-center mb-4">
          FAQ
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-earth mb-16">
          Questions Owners Ask
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
