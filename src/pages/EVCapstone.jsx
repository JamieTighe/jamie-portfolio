import { Link } from "react-router-dom";

export default function EVCapstone() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <Link to="/" className="underline text-blue-300">← Back to portfolio</Link>
        <h1 className="mt-4 text-3xl font-semibold">EV Charging vs EV Demand — UK Capstone</h1>
        <p className="mt-2 text-blue-200/80">Python (APIs) · SQL/Postgres · Tableau</p>

        <div className="mt-6 rounded-xl overflow-hidden bg-white/5 border border-white/10">
          <img src="/thumb-ev-capstone.jpg" alt="EV Capstone" className="w-full object-cover" />
        </div>

        <section className="mt-8 space-y-5">
          <div>
            <h2 className="text-xl font-medium">Problem</h2>
            <p>Identify UK local authorities where public charger supply lags EV registrations, prioritising sites by power-band.</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Data</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>OpenChargeMap API (sites/plugs + metadata)</li>
              <li>DfT VEH9901 EV registrations by LA</li>
              <li>ONS Postcode Directory → LAD25CD joins</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium">Approach</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>Python ingestion → AWS RDS Postgres (sites/plugs/ONS/VEH tables).</li>
              <li>Clean postcodes, classify power bands (≤3kW, 3–&lt;8, 8–49, 50–149, 150+).</li>
              <li>Tableau dashboard: chargers per 1k EVs by power band & operator.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium">Findings</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>High EV density + low rapid coverage in several commuter LAs.</li>
              <li>Prioritise 50–149kW and 150+kW installs on key corridors; flag data caveats vs. Zap-Map.</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <a className="underline" href="#" target="_blank" rel="noreferrer">GitHub (ETL)</a>
            <a className="underline" href="#" target="_blank" rel="noreferrer">Tableau Public</a>
            <a className="underline" href="#" target="_blank" rel="noreferrer">Report PDF</a>
          </div>
        </section>
      </div>
    </main>
  );
}
