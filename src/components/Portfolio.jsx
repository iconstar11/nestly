import listings from '../data/listings';

export default function Portfolio() {
  if (!listings.length) return null;

  return (
    <section id="portfolio" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-terracotta uppercase text-center mb-4">
          Our Work
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-earth mb-16">
          Hosts Who Already Have Their Own Page
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((l) => (
            <a
              key={l.slug}
              href={`clients/${l.slug}/`}
              className="group bg-white rounded-2xl overflow-hidden border border-sand hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-sand">
                <img
                  src={l.image}
                  alt={l.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-earth">{l.name}</h3>
                <p className="text-sm text-earth/50 mt-1">{l.area}</p>
                <span className="inline-block mt-3 px-3 py-1 bg-forest/10 text-forest text-xs font-bold rounded-full">
                  {l.price}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
