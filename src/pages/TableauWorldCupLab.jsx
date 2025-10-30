import { Link } from "react-router-dom";

export default function TableauWorldCupLab() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-gray-100">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <Link to="/" className="underline text-blue-300">← Back to portfolio</Link>
        <h1 className="mt-4 text-3xl font-semibold">Tableau Lab — FIFA World Cup</h1>
        <p className="mt-2 text-blue-200/80">Tableau · Maps · Time-series</p>

        <div className="mt-6 rounded-xl overflow-hidden bg-white/5 border border-white/10">
          <img src="/thumb-tableau-worldcup.jpg" alt="World Cup Tableau Lab" className="w-full object-cover" />
        </div>

        <section className="mt-8 space-y-5">
          <div>
            <h2 className="text-xl font-medium">Problem</h2>
            <p>Explore World Cup results to show scoring trends over time and geography, with emphasis on finalists and high-scoring eras.</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Data</h2>
            <p>World Cup match results (year, teams, goals, stage) with country geocoding for maps.</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Approach</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>Maps for host/finalists; line charts for goals-per-match by year.</li>
              <li>Interactive filters by stage and confederation; annotated outliers.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium">Findings</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>Modern tournaments show improved parity and tactical convergence.</li>
              <li>Regional strengths persist, with notable cycles for specific nations.</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <a className="underline" href="#" target="_blank" rel="noreferrer">Tableau Public</a>
            <a className="underline" href="#" target="_blank" rel="noreferrer">Workbook (.twbx)</a>
          </div>
        </section>
      </div>
    </main>
  );
}
