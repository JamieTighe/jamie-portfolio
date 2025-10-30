import { Link } from "react-router-dom";

export default function HrCase() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-gray-100">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <Link to="/" className="underline text-blue-300">← Back to portfolio</Link>
        <h1 className="mt-4 text-3xl font-semibold">HR Consulting — Workforce & Tenure Insights (SQL)</h1>
        <p className="mt-2 text-blue-200/80">SQL · HR Analytics · Cohort thinking</p>

        <div className="mt-6 rounded-xl overflow-hidden bg-white/5 border border-white/10">
          <img src="/thumb-hr.jpg" alt="HR SQL" className="w-full object-cover" />
        </div>

        <section className="mt-8 space-y-5">
          <div>
            <h2 className="text-xl font-medium">Problem</h2>
            <p>Quantify active headcount, tenure, hiring/terminations by year, leadership views and exit reasons; highlight retention priorities.</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Data</h2>
            <p>HR employee snapshots with business unit/region/VP plus separation reasons.</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Approach</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>Active headcount (termdate NULL) & average tenure; min/max tenure checks.</li>
              <li>Yearly hires/bad hires/terminations; active by BU/region & VP activity.</li>
              <li>Exit reasons with average tenure to exit; recommendations for early-tenure cohorts.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium">Findings / Outcome</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>~32k active staff, avg ~7.1 years tenure; big 2012–2014 hiring surge with high churn.</li>
              <li>Concentration in North/Northwest/South; select VPs show high hire/exit activity.</li>
              <li>Voluntary exits dominate; focus retention within first 24 months in high-growth portfolios.</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <a className="underline" href="#" target="_blank" rel="noreferrer">GitHub: SQL scripts</a>
            <a className="underline" href="#" target="_blank" rel="noreferrer">One-pager summary</a>
          </div>
        </section>
      </div>
    </main>
  );
}
