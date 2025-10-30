import { Link } from "react-router-dom";

export default function WindSprint() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-gray-100">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <Link to="/" className="underline text-blue-300">← Back to portfolio</Link>
        <h1 className="mt-4 text-3xl font-semibold">Data Sprint — U.S. Wind Turbines & Operators</h1>
        <p className="mt-2 text-blue-200/80">Python/SQL · Tableau · Energy Analytics</p>

        <div className="mt-6 rounded-xl overflow-hidden bg-white/5 border border-white/10">
          <img src="/thumb-wind.jpg" alt="Wind Turbines Sprint" className="w-full object-cover" />
        </div>

        <section className="mt-8 space-y-5">
          <div>
            <h2 className="text-xl font-medium">Problem</h2>
            <p>Advise an investment committee on U.S. wind market structure, growth hotspots, and operator/manufacturer landscape.</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Data</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>U.S. Wind Turbine Database (70k+ turbines)</li>
              <li>EIA-923 operator data (generation & fuel)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium">Approach</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>Clean & join turbine → operator; maps by capacity, OEM share (GE/Vestas/SGRE).</li>
              <li>Dashboards: growth timeline, operator mix, regional concentration.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium">Findings</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>Concentration in the Plains & Texas; OEM triopoly dominates installs.</li>
              <li>Action: prioritise developers with high onshore build pipelines in TX/OK/IA/KS.</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <a className="underline" href="#" target="_blank" rel="noreferrer">Slide deck</a>
            <a className="underline" href="#" target="_blank" rel="noreferrer">Tableau Public</a>
          </div>
        </section>
      </div>
    </main>
  );
}
