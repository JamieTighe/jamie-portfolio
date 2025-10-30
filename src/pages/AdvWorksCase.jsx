import { Link } from "react-router-dom";

export default function AdvWorksCase() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-gray-100">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <Link to="/" className="underline text-blue-300">← Back to portfolio</Link>
        <h1 className="mt-4 text-3xl font-semibold">AdventureWorks — Marketing Allocation (SQL)</h1>
        <p className="mt-2 text-blue-200/80">SQL · Joins · Aggregations</p>

        <div className="mt-6 rounded-xl overflow-hidden bg-white/5 border border-white/10">
          <img src="/thumb-advw.jpg" alt="AdventureWorks SQL" className="w-full object-cover" />
        </div>

        <section className="mt-8 space-y-5">
          <div>
            <h2 className="text-xl font-medium">Problem</h2>
            <p>Guide marketing budget towards the highest-return product categories, vendors, territories and salespeople.</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Data</h2>
            <p>AdventureWorks transactional tables: SalesOrderDetail/Header, Product/Subcategory/Category, Vendor, Territory, Employee/Person.</p>
          </div>
          <div>
            <h2 className="text-xl font-medium">Approach</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>Revenue = qty × unitprice; roll-ups by product, category, territory; joins across sales↔product↔geo↔people.</li>
              <li>Top-N analysis (products/categories); reps selling top 5 most expensive products; seasonality by month.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium">Findings / Outcome</h2>
            <ul className="list-disc pl-6 text-blue-100/85 space-y-1">
              <li>Bikes dominate revenue; Accessories/Clothing lead by units—distinct targeting for conversion vs volume.</li>
              <li>US/Canada/Northwest strongest; Australia shows growth potential; uneven rep performance.</li>
              <li>Recommendations: weight spend to Bikes/Components; time campaigns for peak months (e.g., Mar/May/Oct).</li>
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
