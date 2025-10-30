import { Link } from "react-router-dom";

export default function TableauAttritionLab() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-gray-100">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <Link to="/" className="underline text-blue-300">← Back to portfolio</Link>
        <h1 className="mt-4 text-3xl font-semibold">Tableau Lab — HR Attrition</h1>
        <p className="mt-2 text-blue-200/80">Tableau · Visual Analytics · Calculated Fields</p>

        <div className="mt-6 rounded-xl overflow-hidden bg-white/5 border border-white/10">
          <img src="/thumb-tableau-attrition.jpg" alt="HR Attrition Tableau Lab" className="w-full object-cover" />
        </div>

        <section className="mt-8 space-y-5">
          <div>
            <h2 className="text-xl font-medium">Problem</h2>
            <p>Identify drivers of employee attrition and communicate where risk concentrates across departments and tenure bands.</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Data</h2>
            <p>IBM HR Attrition (teaching dataset; columns for department, job role, income, age, tenure, attrition flag).</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Approach</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>Distribution & % of total by segment; table calcs for attrition rates.</li>
              <li>Parameter-driven highlights; dashboard filtering & tooltips for context.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium">Findings</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>Elevated attrition in early-tenure bands and specific roles.</li>
              <li>Income and overtime correlate with risk; targeted retention actions recommended.</li>
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
