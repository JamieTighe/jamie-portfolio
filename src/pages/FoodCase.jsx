import { Link } from "react-router-dom";

export default function FoodCase() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-gray-100">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <Link to="/" className="underline text-blue-300">← Back to portfolio</Link>
        <h1 className="mt-4 text-3xl font-semibold">Food Distributor — Sales & Margin Intelligence (Power BI)</h1>
        <p className="mt-2 text-blue-200/80">Power BI · Data Modelling · DAX (light) · Maps</p>

        <div className="mt-6 rounded-xl overflow-hidden bg-white/5 border border-white/10">
          <img src="/thumb-food.jpg" alt="Food distributor project" className="w-full object-cover" />
        </div>

        <section className="mt-8 space-y-5">
          <div>
            <h2 className="text-xl font-medium">Problem</h2>
            <p>For a global food distributor (US/EU/JP), surface top products, seasonality, customer concentration and margin performance to guide sales/marketing focus (2012–2014).</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Data</h2>
            <p>Sales, Sales Rep, Cities, Customers, Item Master (joined on SalesRep IDs, product keys, geography).</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Approach</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>Modelled star-like schema in Power BI; relationships across Sales ↔ Products/Customers/Geography.</li>
              <li>Built a KPI dashboard (filters: Year/Quarter/Region); YOY lines by product group; map by city; “Top 5” tables.</li>
              <li>Light DAX for margin% and YTD comparisons; labelled visuals clearly per brief.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium">Findings / Outcome</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>Clear late-summer spikes (Aug–Sep) across key groups; Europe shows broader category balance than US.</li>
              <li>Top customers drive outsized share in canned products vs produce; margin gaps highlight coaching targets.</li>
              <li>Delivered a single PBIX with four tabs (Dashboard, Product, Customer, Location) ready for hand-off.</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <a className="underline" href="#" target="_blank" rel="noreferrer">Open Power BI / report</a>
            <a className="underline" href="#" target="_blank" rel="noreferrer">One-pager summary</a>
          </div>
        </section>
      </div>
    </main>
  );
}
