import { useState, useCallback } from 'react';

export default function Calculator() {
  const [nightlyRate, setNightlyRate] = useState(8000);
  const [nightsPerMonth, setNightsPerMonth] = useState(15);
  const [commission, setCommission] = useState(15);

  const monthlyLoss = Math.round(nightlyRate * nightsPerMonth * (commission / 100));
  const yearlyLoss = monthlyLoss * 12;

  const formatKES = useCallback((n) => {
    return `KES ${n.toLocaleString('en-KE')}`;
  }, []);

  return (
    <section id="calculator" className="py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-earth mb-4">
          How Much Are You Giving Away?
        </h2>
        <p className="text-center text-earth/60 mb-12 max-w-md mx-auto">
          Slide to match your numbers. This is what Airbnb keeps — every single month.
        </p>

        <div className="bg-white rounded-2xl shadow-sm border border-sand p-8 space-y-8">
          <div>
            <label className="flex justify-between text-sm font-semibold mb-2">
              <span>Nightly Rate</span>
              <span className="text-forest">{formatKES(nightlyRate)}</span>
            </label>
            <input
              type="range"
              min={2000}
              max={30000}
              step={500}
              value={nightlyRate}
              onChange={(e) => setNightlyRate(Number(e.target.value))}
              className="w-full h-2 bg-sand rounded-full appearance-none cursor-pointer accent-forest"
            />
            <div className="flex justify-between text-xs text-earth/30 mt-1">
              <span>KES 2,000</span>
              <span>KES 30,000</span>
            </div>
          </div>

          <div>
            <label className="flex justify-between text-sm font-semibold mb-2">
              <span>Nights Booked / Month</span>
              <span className="text-forest">{nightsPerMonth}</span>
            </label>
            <input
              type="range"
              min={2}
              max={30}
              step={1}
              value={nightsPerMonth}
              onChange={(e) => setNightsPerMonth(Number(e.target.value))}
              className="w-full h-2 bg-sand rounded-full appearance-none cursor-pointer accent-forest"
            />
            <div className="flex justify-between text-xs text-earth/30 mt-1">
              <span>2</span>
              <span>30</span>
            </div>
          </div>

          <div>
            <label className="flex justify-between text-sm font-semibold mb-2">
              <span>Airbnb Commission</span>
              <span className="text-forest">{commission}%</span>
            </label>
            <input
              type="range"
              min={3}
              max={20}
              step={0.5}
              value={commission}
              onChange={(e) => setCommission(Number(e.target.value))}
              className="w-full h-2 bg-sand rounded-full appearance-none cursor-pointer accent-forest"
            />
            <div className="flex justify-between text-xs text-earth/30 mt-1">
              <span>3%</span>
              <span>20%</span>
            </div>
          </div>

          <div className="border-t border-sand pt-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-red-50 rounded-xl p-4">
                <p className="text-xs text-red-500 font-semibold uppercase tracking-wide mb-1">Monthly OTA Fees</p>
                <p className="text-2xl font-bold text-red-600">{formatKES(monthlyLoss)}</p>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <p className="text-xs text-red-500 font-semibold uppercase tracking-wide mb-1">Yearly OTA Fees</p>
                <p className="text-2xl font-bold text-red-600">{formatKES(yearlyLoss)}</p>
              </div>
            </div>
          </div>

          <div className="bg-forest/5 rounded-xl p-5 text-center">
            <p className="text-earth/70 text-sm mb-1">
              A Nestly page costs{' '}
              <strong className="text-forest">
                {formatKES(nightlyRate)}
              </strong>{' '}
              once, then just{' '}
              <strong className="text-forest">
                {formatKES(Math.round(nightlyRate * 0.25))}
              </strong>
              /month.
            </p>
            <p className="text-forest font-bold">
              You break even in less than <em>one</em> extra direct booking per month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
