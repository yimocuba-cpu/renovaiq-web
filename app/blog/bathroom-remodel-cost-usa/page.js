import Button from "../../../components/Button";

export const metadata = {
  title: "What Does a Bathroom Remodel Actually Cost? | RenovaIQ",
  description:
    "A practical guide to bathroom remodel costs in the USA. See how labor, materials, and hidden costs add up — and how contractor type affects your final bill.",
  keywords: [
    "bathroom remodel cost USA",
    "how much does a bathroom remodel cost",
    "bathroom renovation cost guide",
    "bathroom remodel cost breakdown",
    "independent contractor vs contracting company",
    "hidden costs bathroom remodel",
    "bathroom remodel estimate",
  ],
};

export default function BathroomRemodeling() {
  return (
    <main className="bg-gray-100 text-gray-900">
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">

        {/* HEADER */}
        <header className="mb-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-sm">
          <div className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
            Bathroom Remodel Cost Guide
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl leading-snug">
            What Does a Bathroom Remodel Actually Cost?
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600">
            A practical breakdown of labor, materials, hidden costs, and the contractor
            decisions that shape your final bill — before you hire anyone.
          </p>
          <p className="mt-3 text-sm font-medium text-gray-400">Updated May 2026</p>
        </header>

        {/* INTRODUCTION */}
        <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <p className="text-base leading-7 text-gray-700">
            Most homeowners get their first number from a contractor quote — and that number
            changes. Labor shifts, materials add up, and problems appear once demolition starts.
            This guide breaks down what you&apos;re actually paying for, so you can plan with
            a clearer picture before any money moves.
          </p>
        </section>

        {/* AVERAGE COST */}
        <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4 leading-snug">
            Average Bathroom Remodel Cost in the USA
          </h2>
          <p className="text-base leading-7 text-gray-700">
            The national mid-range remodel typically lands around{" "}
            <strong>$10,000 to $15,000</strong>. The final number depends on bathroom
            size, materials, contractor type, and location.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Basic Remodel
              </p>
              <p className="mt-2 text-xl font-semibold text-gray-900">$5,000–$8,000</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Paint, fixtures, small tile work, and minor refreshes. No structural changes.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Mid-Range Remodel
              </p>
              <p className="mt-2 text-xl font-semibold text-gray-900">$10,000–$18,000</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                New vanity, flooring, updated fixtures, partial tiling, plumbing adjustments.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                High-End Remodel
              </p>
              <p className="mt-2 text-xl font-semibold text-gray-900">$20,000–$40,000+</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Custom layouts, premium fixtures, heated floors, and structural changes.
              </p>
            </div>
          </div>

          <p className="mt-6 text-base leading-7 text-gray-700">
            Master bathrooms cost more than guest bathrooms. Shower-only updates cost less
            than a full redo. ZIP code and local labor rates shift the outcome significantly.
          </p>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-600 mb-3">
              Want a more precise range for your bathroom and ZIP code?
            </p>
            <div className="max-w-xs">
              <Button
                href="/calculadora"
                variant="primary"
                ariaLabel="Get estimate for bathroom remodel"
              >
                Get an Estimate by ZIP Code
              </Button>
            </div>
          </div>
        </section>

        {/* HIDDEN COSTS */}
        <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4 leading-snug">
            Hidden Costs That Surprise Homeowners
          </h2>
          <p className="text-base leading-7 text-gray-700">
            Good planning includes a buffer for issues that only show up once demolition starts.
            Build at least <strong>15–20% extra</strong> into your budget for these:
          </p>

          <div className="mt-6 grid gap-3">
            {[
              {
                title: "Structural repairs",
                range: "$800–$3,000+",
                detail:
                  "Rotted subflooring, damaged studs, or hidden mold often appear once walls open.",
              },
              {
                title: "Permit and inspection fees",
                range: "$200–$2,000",
                detail:
                  "Most areas require permits for plumbing or electrical changes. Fees vary by city.",
              },
              {
                title: "Plumbing and electrical upgrades",
                range: "$500–$4,000+",
                detail:
                  "Moving water lines, drains, or circuits costs more than keeping the existing layout.",
              },
              {
                title: "Ventilation and waterproofing",
                range: "$300–$1,200",
                detail:
                  "Proper exhaust fans and waterproofing prevent future damage but add upfront cost.",
              },
              {
                title: "Hauling and disposal",
                range: "$300–$1,000",
                detail:
                  "Removing old fixtures and debris is rarely included in the base labor quote.",
              },
              {
                title: "Temporary lodging",
                range: "Varies",
                detail:
                  "If your main bathroom is out of service, plan for a temporary arrangement.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-gray-50 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="text-sm font-semibold text-cyan-700 whitespace-nowrap">
                    {item.range}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTRACTOR COMPARISON */}
        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4 leading-snug">
            Independent Contractor vs. Contracting Company
          </h2>
          <p className="text-base leading-7 text-gray-700">
            Once you understand your cost structure, the next decision is who you hire.
            These two options deliver different levels of support, flexibility, and cost.
          </p>

          {/* Quick comparison */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
                Independent Contractor
              </p>
              <p className="text-sm leading-6 text-gray-600">
                Usually the person performing the work directly. More flexible, less overhead,
                but with fewer backups if something changes mid-project.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
                Contracting Company
              </p>
              <p className="text-sm leading-6 text-gray-600">
                Operates as a business with employees or sub-contractors. More structure and
                capacity, but higher overhead and coordination cost.
              </p>
            </div>
          </div>

          {/* Detail cards */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
                Independent Contractor
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                More direct, smaller team
              </h3>
              <ul className="space-y-3 text-sm leading-6 text-gray-700">
                <li>
                  <strong>The person you meet is usually the one doing the work.</strong>{" "}
                  Direct communication throughout the project.
                </li>
                <li>
                  <strong>Less formal structure.</strong> Lower overhead, but less backup
                  if problems or delays come up.
                </li>
                <li>
                  <strong>More flexible on timing.</strong> Smaller crews adapt faster to
                  schedule changes.
                </li>
                <li>
                  <strong>Typically lower cost.</strong> Fewer layers and less company
                  overhead usually means a smaller bill.
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
                Contracting Company
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Structured, larger projects
              </h3>
              <ul className="space-y-3 text-sm leading-6 text-gray-700">
                <li>
                  <strong>Has employees or trusted sub-contractors.</strong> More capacity
                  and project support built in.
                </li>
                <li>
                  <strong>More formal process.</strong> Estimates, scheduling, and
                  communication are managed by the business.
                </li>
                <li>
                  <strong>Better for complex or larger remodels.</strong> Can coordinate
                  multiple trades more reliably.
                </li>
                <li>
                  <strong>Can cost more.</strong> Price includes overhead for management,
                  insurance, and backup resources.
                </li>
              </ul>
            </div>
          </div>

          {/* When to choose */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                Choose an independent contractor when
              </p>
              <p className="text-sm leading-6 text-gray-700">
                Your project is smaller, straightforward, and you value a direct relationship
                with the person doing the work.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                Choose a company when
              </p>
              <p className="text-sm leading-6 text-gray-700">
                Your project involves multiple trades, a larger bathroom, or you want a more
                managed process with built-in backup.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-gray-900/5 p-5">
            <p className="text-sm leading-6 text-gray-700">
              Independent contractors are usually less expensive because of lower overhead.
              Contracting companies cost more because of their structure and staff. Choose
              based on project complexity and how much hand-holding you need — not price alone.
            </p>
          </div>
        </section>

        {/* FACTORS */}
        <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4 leading-snug">
            Factors That Change Your Final Cost
          </h2>
          <p className="text-base leading-7 text-gray-700">
            These variables have the biggest impact on your estimate — get clear on each
            one before talking to any contractor.
          </p>
          <div className="mt-6 grid gap-3">
            {[
              {
                title: "Bathroom type",
                detail:
                  "Master bath costs more than guest bath. Shower-only remodels cost less than a full redo.",
              },
              {
                title: "Geographic location",
                detail:
                  "Labor rates in New York or San Francisco are significantly higher than Tampa or rural areas.",
              },
              {
                title: "Material quality",
                detail:
                  "Ceramic is more affordable than porcelain or natural stone. Vanity and fixture choices add up fast.",
              },
              {
                title: "Scope of work",
                detail:
                  "Cosmetic updates cost less. Moving plumbing or electrical lines increases your budget significantly.",
              },
              {
                title: "Contractor experience",
                detail:
                  "Licensed and specialized tradespeople may charge more, but they reduce costly mistakes.",
              },
              {
                title: "Timeline",
                detail:
                  "Rush jobs cost more. Standard 4–8 week timelines let contractors work efficiently.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-gray-50 p-5"
              >
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="mb-10 rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 leading-snug">
            Get a clearer estimate for your project
          </h3>
          <p className="mt-4 text-base leading-7 text-gray-700">
            RenovaIQ shows you a breakdown of labor, materials, and hidden costs for your
            specific bathroom type and location. No signup. Free. Takes 2 minutes.
          </p>
          <div className="mt-6 max-w-xs">
            <Button
              href="/calculadora"
              variant="primary"
              ariaLabel="Use the bathroom remodel calculator"
            >
              Use the Calculator
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6 leading-snug">
            Common Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What's the cheapest bathroom remodel I can do?",
                a: "A cosmetic refresh — paint, new fixtures, mirror, and hardware. Budget $2,000–$4,000. Minimal labor, no structural changes.",
              },
              {
                q: "How long does a bathroom remodel take?",
                a: "Basic: 3–4 weeks. Mid-range: 4–8 weeks. High-end or complex: 8–12+ weeks. Timeline depends on scope, contractor availability, and surprises.",
              },
              {
                q: "Should I DIY any of the work?",
                a: "Demolition, painting, and simple fixture swaps are manageable. Avoid plumbing, electrical, tile installation, and waterproofing — mistakes in those areas cost $800–$2,500+ to fix.",
              },
              {
                q: "Will a remodel increase my home value?",
                a: "Homeowners typically recoup 60–70% of remodel costs in resale value. A newer bathroom attracts buyers, but remodel for your own use first rather than pure ROI.",
              },
            ].map((item, i, arr) => (
              <div
                key={item.q}
                className={i < arr.length - 1 ? "border-b border-gray-200 pb-6" : ""}
              >
                <h3 className="text-base font-semibold text-gray-900 leading-snug">
                  {item.q}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4 leading-snug">
            The Bottom Line
          </h2>
          <p className="text-base leading-7 text-gray-700">
            Every project is different. Labor rates vary by location, material choices vary
            by preference, and hidden costs vary by your home&apos;s condition. The best move
            is to define your scope early, build in a buffer, and get a clear estimate before
            you talk to anyone.
          </p>
          <p className="mt-4 text-base leading-7 text-gray-700">
            That&apos;s exactly what RenovaIQ does — for free, in under 2 minutes.
          </p>
          <div className="mt-6 max-w-xs">
            <Button
              href="/calculadora"
              variant="primary"
              ariaLabel="Calculate your bathroom remodel cost"
            >
              Get Your Estimate Now
            </Button>
          </div>
        </section>

      </article>
    </main>
  );
}