import { Link } from "react-router-dom";

export default function AirbnbCase() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-gray-100">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <Link to="/" className="underline text-blue-300">← Back to portfolio</Link>
        <h1 className="mt-4 text-3xl font-semibold">Airbnb Fee Strategy — Maximise Host Revenue</h1>
        <p className="mt-2 text-blue-200/80">Excel · Power Query · PivotTables · Charts</p>

        <div className="mt-6 rounded-xl overflow-hidden bg-white/5 border border-white/10">
          <img src="/thumb-airbnb.jpg" alt="Airbnb project" className="w-full object-cover" />
        </div>

        <section className="mt-8 space-y-5">
          <div>
            <h2 className="text-xl font-medium">Problem</h2>
            <p>Recommend a fee and pricing structure (nightly price, minimum nights, cleaning, extra-guest fees) that maximises yearly host revenue by property type and amenities.</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Data</h2>
            <p>InsideAirbnb listings (Amsterdam), 14,884 rows after cleaning; ~37 features post-wrangling (amenities, room type, bathrooms, capacity, price, etc.).</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Approach</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>Excel wrangling with Power Query; removed inactive listings & extreme outliers; parsed bathrooms and amenities into usable flags.</li>
              <li>Pivot analysis for price distributions by room type/capacity; amenity premiums; bathroom-count price ladders.</li>
              <li>Compiled fee recommendations by property type and bathroom tiers.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium">Findings / Outcome</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>Entire homes dominate and command the highest baseline; more bathrooms materially lift price.</li>
              <li>Amenities like kitchens/washer/workspace carry meaningful premiums; long-stay flag had little price impact.</li>
              <li>Produced specific fee ladders (e.g., cleaning fee by bathroom tier) and baseline nightly ranges per room type.</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <a className="underline" href="#" target="_blank" rel="noreferrer">Open slides / workbook</a>
            <a className="underline" href="#" target="_blank" rel="noreferrer">Data source</a>
          </div>
        </section>
      </div>
    </main>
  );
}
