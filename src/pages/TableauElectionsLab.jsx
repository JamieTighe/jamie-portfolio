import { Link } from "react-router-dom";

export default function TableauElectionsLab() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-gray-100">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <Link to="/" className="underline text-blue-300">← Back to portfolio</Link>
        <h1 className="mt-4 text-3xl font-semibold">Data Journalism — U.S. Presidential Elections</h1>
        <p className="mt-2 text-blue-200/80">Tableau · Maps · Story & Dashboards</p>

        <div className="mt-6 rounded-xl overflow-hidden bg-white/5 border border-white/10">
          <img src="/thumb-tableau-elections.jpg" alt="US Elections Story" className="w-full object-cover" />
        </div>

        <section className="mt-8 space-y-5">
          <div>
            <h2 className="text-xl font-medium">Problem</h2>
            <p>Tell a clear visual story of 21st-century U.S. presidential elections: turnout, vote share, and party loyalty by geography.</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Data</h2>
            <p>MIT Election Lab (county/state results, 2000s-2020s) + supporting lookups.</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Approach</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>State & county maps with location edits; filters by election year.</li>
              <li>Calculated fields for party % share; dashboards + final Story sequence.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium">Findings</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>Persistent regional loyalties with notable swing corridors.</li>
              <li>Turnout and margin shifts annotated in story points.</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <a className="underline" href="#" target="_blank" rel="noreferrer">Tableau Public (Story)</a>
            <a className="underline" href="#" target="_blank" rel="noreferrer">Workbook (.twbx)</a>
          </div>
        </section>
      </div>
    </main>
  );
}
