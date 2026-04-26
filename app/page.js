import Button from "../components/Button";

export const metadata = {
  title: "RenovaIQ | Bathroom Remodel Cost Calculator for U.S. Homeowners",
  description:
    "Estimate bathroom remodel costs across the U.S. with a clear breakdown of labor, materials, and hidden costs. Free, fast, and no signup required.",
  keywords: [
    "bathroom remodel cost calculator",
    "bathroom renovation estimate",
    "bathroom remodel cost USA",
    "free bathroom remodel estimate",
    "bathroom cost calculator",
  ],
};

const LOWES_LINK = "PASTE_LOWES_AFFILIATE_LINK_HERE";
const FLOOR_DECOR_LINK = "PASTE_FLOOR_DECOR_AFFILIATE_LINK_HERE";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
              Free Bathroom Remodel Estimate
            </span>

            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Calculate Your Bathroom Remodel Cost in Seconds
              </h1>
              <p className="max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                Most homeowners start with a guess and end up paying for surprises.
                RenovaIQ gives you a clearer breakdown before you hire anyone, buy
                materials, or sign a contract.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/calculadora" variant="primary" ariaLabel="Calculate my remodel">
                Calculate My Remodel
              </Button>
            </div>

            <p className="text-sm text-gray-500">
              Free, no signup, and built to show labor, materials, and hidden costs
              clearly.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
              What you get
            </p>

            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-semibold text-gray-900">Labor breakdown</p>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  See the work separated by task so the estimate feels real, not random.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-semibold text-gray-900">Materials breakdown</p>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Compare the items you need before you buy from a store or contractor.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-semibold text-gray-900">Hidden costs visibility</p>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Keep extra risks in view before they turn into expensive surprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOLOR REAL */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Why homeowners need a clearer estimate first
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Bathroom projects often get expensive because the first number sounds
              simple, but the final bill is not. Labor changes, materials shift, and
              hidden issues show up later. RenovaIQ helps you see the structure
              before you commit.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-gray-900">No guesswork</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Stop relying on rough ballpark numbers that change after the first
                conversation.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-gray-900">Less risk</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                See the cost structure earlier so you can make better decisions before
                money starts moving.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-gray-900">More control</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Compare labor, materials, and extras in one place instead of piecing
                it together later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUE OFRECE */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            What RenovaIQ gives you
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            A fast estimate that is easier to understand than a single number. You
            get a clearer view of labor, materials, and hidden costs before hiring
            anyone.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-5">
            <p className="text-sm font-semibold text-gray-900">Quick estimate</p>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Get a result fast without signup or long forms.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-5">
            <p className="text-sm font-semibold text-gray-900">Clear categories</p>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Labor and materials stay separate so the numbers make sense.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-5">
            <p className="text-sm font-semibold text-gray-900">Hidden costs support</p>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Keep extra costs visible as context instead of discovering them too late.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              How it works
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Simple, fast, and built for mobile.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
                Step 1
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-900">
                Pick your bathroom type
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Master Bathroom, Guest Bathroom, or Shower Remodel.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
                Step 2
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-900">
                Select labor and materials
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Check the work and items you actually need.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
                Step 3
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-900">
                See your estimate
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Review labor, materials, and hidden costs before you decide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Built for clarity, not confusion
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              RenovaIQ is designed to help homeowners compare remodel costs with a
              cleaner structure. It keeps the estimate readable, practical, and
              focused on the decisions that matter.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-gray-900">
              Transparent by design
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              You see the estimate in clear parts so you can compare options before
              spending money.
            </p>
          </div>
        </div>
      </section>

      {/* AFFILIATES */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Shop smarter for your remodel
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Looking for materials? These retailers are helpful starting points for
              bathroom remodel supplies. The price you pay does not change if you
              click through our links.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Materials source
              </p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Lowe&apos;s</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                A familiar option for bathroom remodel essentials, fixtures, and
                everyday project materials. Useful when you want a broad selection and
                quick access to common renovation products.
              </p>
              <div className="mt-5">
                <Button
                  variant="affiliate"
                  href={LOWES_LINK}
                  ariaLabel="Shop at Lowe's"
                >
                  Shop at Lowe&apos;s
                </Button>
              </div>
            </article>

            <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Materials source
              </p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">Floor &amp; Decor</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                A strong option for tile, flooring, and remodel-focused finishes. Good
                for homeowners who want design-forward materials and a more specialized
                selection for bath projects.
              </p>
              <div className="mt-5">
                <Button
                  variant="affiliate"
                  href={FLOOR_DECOR_LINK}
                  ariaLabel="Shop at Floor and Decor"
                >
                  Shop at Floor &amp; Decor
                </Button>
              </div>
            </article>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            We may earn a commission if you buy through these links, at no extra cost
            to you.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gray-900 px-6 py-10 text-white shadow-sm sm:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready for a clearer estimate?
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-300">
              Get a better idea of your bathroom remodel cost before you hire anyone.
            </p>
          </div>

          <div className="mt-6">
            <Button href="/calculadora" variant="primary" ariaLabel="Calculate my remodel">
              Calculate My Remodel
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}