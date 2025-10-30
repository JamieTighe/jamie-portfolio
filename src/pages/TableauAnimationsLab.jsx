import { Link } from "react-router-dom";

export default function TableauAnimationsLab() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-gray-100">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <Link to="/" className="underline text-blue-300">← Back to portfolio</Link>
        <h1 className="mt-4 text-3xl font-semibold">Tableau Animations — Gapminder Bubble Chart</h1>
        <p className="mt-2 text-blue-200/80">Tableau · Animation · Pivot & Data Reshaping</p>

        <div className="mt-6 rounded-xl overflow-hidden bg-white/5 border border-white/10">
          <img src="/thumb-tableau-animations.jpg" alt="Gapminder Animation" className="w-full object-cover" />
        </div>

        <section className="mt-8 space-y-5">
          <div>
            <h2 className="text-xl font-medium">Problem</h2>
            <p>Recreate Gapminder’s life expectancy vs income animation with population bubble size and region colour.</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Data</h2>
            <p>Gapminder: Income per person (PPP), Life Expectancy, Population + Countries/Regions.</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Approach</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>Pivot years → long format in Tableau; animated Pages control by Year.</li>
              <li>Visual formatting to match Gapminder style; tooltips for readability.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium">Findings</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>Strong 20th–21st century shift: rising life expectancy and income across regions.</li>
              <li>Divergence narrows; outliers annotated in the story sequence.</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <a className="underline" href="#" target="_blank" rel="noreferrer">Tableau Public (Animation)</a>
            <a className="underline" href="#" target="_blank" rel="noreferrer">Workbook (.twbx)</a>
          </div>
        </section>
      </div>
    </main>
  );
}
