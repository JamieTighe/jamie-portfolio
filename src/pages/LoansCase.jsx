import { Link } from "react-router-dom";

export default function LoansCase() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-gray-100">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <Link to="/" className="underline text-blue-300">← Back to portfolio</Link>
        <h1 className="mt-4 text-3xl font-semibold">Lending Club — Portfolio Risk Patterns (SQL)</h1>
        <p className="mt-2 text-blue-200/80">SQL · Aggregation · Joins · Risk profiling</p>

        <div className="mt-6 rounded-xl overflow-hidden bg-white/5 border border-white/10">
          <img src="/thumb-loans.jpg" alt="Loans SQL" className="w-full object-cover" />
        </div>

        <section className="mt-8 space-y-5">
          <div>
            <h2 className="text-xl font-medium">Problem</h2>
            <p>Understand concentration and delinquency risk across purposes, grades, geographies, and borrower types.</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Data</h2>
            <p>Lending Club loan, customer, reason and status tables.</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Approach</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>Group & rank by reason, grade, state; average loan amount & interest by grade.</li>
              <li>Late buckets (16–30d, 31–120d) and delinquency rate by grade; renter vs mortgage comparisons.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium">Findings / Outcome</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>Debt consolidation dominates volume; high-amount segments include home buying & business.</li>
              <li>Higher grades → lower rates as expected; mid-tier grades (C/D) drive most delinquencies.</li>
              <li>Regional concentration in CA/TX/NY; homeowners borrow more than renters.</li>
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
