import Button from "../../../components/Button";
import AFFILIATE_LINKS from "../../../components/affiliateLinks";

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
  const storeData = [
    {
      id: "amazon",
      name: "Amazon",
      shortDescription: "Amazon works best when you need speed and a massive selection. Prime-eligible items can ship same-day in some areas.",
      pros: ["Fast delivery options", "Huge selection", "Multiple payment plans"],
      cons: ["Variable quality across sellers", "Seller-dependent pricing"],
      bestFor: "Quick replacement parts, budget-friendly fixtures, shoppers who value speed",
      affiliateLink: AFFILIATE_LINKS["amazon"] || null,
      ratings: {
        deliveryTimes: "Excellent",
        priceRange: "Low–Medium",
        quality: "Variable",
        customization: "Low",
        inventory: "Very High",
        shippingCosts: "Varies",
        returnPolicy: "30 days typical",
        support: "Good",
        brands: "Many",
        financing: "Affirm, Amazon Pay",
      },
    },
    {
      id: "wayfair",
      name: "Wayfair",
      shortDescription: "Wayfair offers an organized shopping experience with thousands of brands and clear delivery estimates on product pages.",
      pros: ["Broad styles and categories", "Clear shipping estimates", "Financing options"],
      cons: ["Variable fulfillment for large items", "Longer lead times for specialty pieces"],
      bestFor: "Furniture-like vanities and curated bathroom packages",
      affiliateLink: AFFILIATE_LINKS["wayfair"] || null,
      ratings: {
        deliveryTimes: "Good",
        priceRange: "Low–Medium",
        quality: "Medium",
        customization: "Medium",
        inventory: "High",
        shippingCosts: "Often free or promotional",
        returnPolicy: "30 days",
        support: "Good",
        brands: "Many",
        financing: "Wayfair Financing, Affirm",
      },
    },
    {
      id: "ace-decor",
      name: "Ace Decor",
      shortDescription: "ACE DECOR focuses on premium, curated bathroom solutions with a boutique selection of high-end fixtures.",
      pros: ["Curated premium selection", "Design-forward pieces"],
      cons: ["Higher price points", "Variable financing availability"],
      bestFor: "High-end or designer-focused remodels",
      affiliateLink: AFFILIATE_LINKS["ace-decor"] || null,
      ratings: {
        deliveryTimes: "Good",
        priceRange: "High",
        quality: "High",
        customization: "High",
        inventory: "Curated",
        shippingCosts: "Varies",
        returnPolicy: "30 days",
        support: "Email/phone",
        brands: "Curated premium",
        financing: "Variable",
      },
    },
    {
      id: "lowes",
      name: "Lowe's",
      shortDescription: "Lowe's delivers an all-around solution for full remodels — plumbing, fixtures, flooring, and tools.",
      pros: ["Strong brand selection", "In-store pickup", "Reliable returns and support"],
      cons: ["Not always the lowest price for specialty fixtures"],
      bestFor: "Full remodels and brand-name fixtures",
      affiliateLink: AFFILIATE_LINKS["lowes"] || null,
      ratings: {
        deliveryTimes: "Good",
        priceRange: "Medium",
        quality: "Good",
        customization: "Medium",
        inventory: "High",
        shippingCosts: "Free on eligible orders",
        returnPolicy: "90 days typical",
        support: "Good",
        brands: "Delta, Moen, KOHLER",
        financing: "Store promotions and financing",
      },
    },
    {
      id: "floor-decor",
      name: "Floor & Decor",
      shortDescription: "Floor & Decor specializes in hard surfaces and bathroom flooring — tile, stone, and related installation materials.",
      pros: ["Deep tile and flooring inventory", "Trade-friendly options"],
      cons: ["Shipping depends on weight and distance", "Fewer fast-shipping options"],
      bestFor: "Flooring-first remodels and tile-heavy projects",
      affiliateLink: AFFILIATE_LINKS["floor-decor"] || null,
      ratings: {
        deliveryTimes: "Fair",
        priceRange: "Low–High depending on material",
        quality: "High for surfaces",
        customization: "Medium",
        inventory: "Strong for tile/stone",
        shippingCosts: "Depends on weight/distance",
        returnPolicy: "90 days",
        support: "Good",
        brands: "Own lines + others",
        financing: "Store credit options",
      },
    },
  ];

  return (
    <main className="bg-gray-100 text-gray-900">
      <article className="mx-auto max-w-2xl px-3 sm:px-4 py-8 sm:py-10 md:py-12">

        {/* HEADER */}
        <header className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-sm">
          <span className="inline-block rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
            Bathroom Remodel Cost Guide
          </span>
          <h1 className="mt-4 text-xl sm:text-2xl font-bold text-gray-900 leading-snug text-center">
            What Does a Bathroom Remodel Actually Cost?
          </h1>
          <p className="mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-600">
            A practical breakdown of labor, materials, hidden costs, and the contractor
            decisions that shape your final bill — before you hire anyone.
          </p>
          <p className="mt-3 text-xs text-gray-400 font-medium">Updated May 2026</p>
        </header>

        {/* INTRO */}
        <section className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-sm">
          <p className="text-sm leading-6 text-gray-700">
            Contractor estimates are a starting point — not the final bill. Labor, materials,
            and hidden issues change numbers quickly once work begins.
          </p>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            This guide gives clear ranges, real examples, and where to buy materials so you
            can plan a realistic budget before demolition.
          </p>
        </section>

        {/* AVERAGE COST */}
        <section className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">
            Average Bathroom Remodel Cost in the USA
          </h2>
          <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-gray-700 mb-4 sm:mb-5">
            The national mid-range remodel typically lands around{" "}
            <strong>$10,000 to $15,000</strong>. The final number depends on bathroom
            size, materials, contractor type, and ZIP code.
          </p>

          {/* Cost tiers — stacked on mobile */}
          <div className="space-y-2 sm:space-y-3">
            <div className="rounded-lg sm:rounded-xl bg-gray-50 border border-gray-200 p-3 sm:p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Basic Remodel</p>
              <p className="mt-1 text-base sm:text-lg font-bold text-gray-900">$5,000 – $8,000</p>
              <p className="mt-1 text-xs sm:text-sm leading-4 sm:leading-5 text-gray-600">
                Paint, new fixtures, minor tile work. Typical examples: Vanity $500–$2,000,
                Faucet $100–$400, Basic tile $2–$6/sq ft.
              </p>
            </div>
            <div className="rounded-lg sm:rounded-xl bg-gray-50 border border-gray-200 p-3 sm:p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Mid-Range Remodel</p>
              <p className="mt-1 text-base sm:text-lg font-bold text-gray-900">$10,000 – $18,000</p>
              <p className="mt-1 text-xs sm:text-sm leading-4 sm:leading-5 text-gray-600">
                New vanity and mirror, upgraded tile or vinyl plank, mid-level fixtures.
                Examples: Vanity $1,000–$3,000, Tile $5–$12/sq ft, Shower door $300–$1,200.
              </p>
            </div>
            <div className="rounded-lg sm:rounded-xl bg-gray-50 border border-gray-200 p-3 sm:p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">High-End Remodel</p>
              <p className="mt-1 text-base sm:text-lg font-bold text-gray-900">$20,000 – $40,000+</p>
              <p className="mt-1 text-xs sm:text-sm leading-4 sm:leading-5 text-gray-600">
                Custom layouts, premium fixtures, and specialty finishes. Examples: Custom
                vanity $4,000+, Natural stone tile $15+/sq ft, Heated floors and luxury
                fixtures add up quickly.
              </p>
            </div>
          </div>

          <p className="mt-4 sm:mt-5 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-700">
            Master bathrooms cost more than guest bathrooms. Shower-only updates cost less
            than a full redo. ZIP code and local labor rates shift the outcome significantly.
          </p>

          <div className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-gray-100">
            <p className="text-xs sm:text-sm text-gray-600 mb-3">
              Want a more precise range for your bathroom and ZIP code?
            </p>
            <Button href="/calculadora" variant="primary" ariaLabel="Get estimate">
              Get an Estimate by ZIP Code
            </Button>
          </div>
        </section>

        {/* HIDDEN COSTS */}
        <section className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-3 text-center">
            Hidden Costs That Surprise Homeowners
          </h2>
          <p className="text-sm leading-6 text-gray-700 mb-5">
            Build at least <strong>15–20% extra</strong> into your budget for issues that
            only appear once demolition starts.
          </p>

          <div className="space-y-3">
            {[
              { title: "Structural repairs", range: "$800–$3,000+", detail: "Rotted subflooring, damaged studs, or hidden mold found after walls open." },
              { title: "Permit and inspection fees", range: "$200–$2,000", detail: "Most areas require permits for plumbing or electrical work. Fees vary by city." },
              { title: "Plumbing and electrical upgrades", range: "$500–$4,000+", detail: "Moving water lines or circuits costs more than keeping the existing layout." },
              { title: "Ventilation and waterproofing", range: "$300–$1,200", detail: "Proper exhaust and waterproofing prevent future damage but add upfront cost." },
              { title: "Hauling and disposal", range: "$300–$1,000", detail: "Removing old fixtures and debris is rarely included in the base labor quote." },
              { title: "Temporary lodging", range: "Varies", detail: "If your main bathroom is out of service, plan for a temporary arrangement." },
              { title: "Contingency / unexpected delays", range: "Varies — plan 10–15% extra", detail: "Shipping delays, backordered materials, or trades schedule shifts can add time and cost." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-gray-50 border border-gray-200 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-3 items-start">
                  <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                  <span className="text-sm font-bold text-cyan-700">{item.range}</span>
                </div>
                <p className="mt-3 text-sm leading-5 text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTRACTOR COMPARISON */}
        <section className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-3 text-center">
            Independent Contractor vs. Contracting Company
          </h2>
          <p className="text-sm leading-6 text-gray-700 mb-5">
            Once you know your cost structure, the next decision is who you hire. These two
            options deliver different levels of support, flexibility, and price.
          </p>

          {/* Quick summary */}
          <div className="space-y-3 mb-5">
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Independent Contractor</p>
              <p className="text-sm leading-5 text-gray-700">
                Usually the person doing the work directly. More flexible, less overhead,
                but fewer backups if something changes mid-project.
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Contracting Company</p>
              <p className="text-sm leading-5 text-gray-700">
                A business with employees or sub-contractors. More structure and capacity,
                but higher overhead and coordination cost.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-5" />

          {/* Independent detail */}
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Independent Contractor</p>
            <h3 className="text-base font-bold text-gray-900 mb-3">More direct, smaller team</h3>
            <ul className="space-y-3">
              {[
                { bold: "The person you meet is usually doing the work.", rest: " Direct communication throughout the project." },
                { bold: "Less formal structure.", rest: " Lower overhead, but less backup if delays or problems come up." },
                { bold: "More flexible on timing.", rest: " Smaller crews adapt faster to schedule changes." },
                { bold: "Typically lower cost.", rest: " Fewer layers and less company overhead usually means a smaller bill." },
              ].map((item, i) => (
                <li key={i} className="text-sm leading-5 text-gray-700">
                  <strong>{item.bold}</strong>{item.rest}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-100 my-5" />

          {/* Company detail */}
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Contracting Company</p>
            <h3 className="text-base font-bold text-gray-900 mb-3">Structured, larger projects</h3>
            <ul className="space-y-3">
              {[
                { bold: "Has employees or trusted sub-contractors.", rest: " More capacity and project support built in." },
                { bold: "More formal process.", rest: " Estimates, scheduling, and communication managed by the business." },
                { bold: "Better for complex or larger remodels.", rest: " Can coordinate multiple trades more reliably." },
                { bold: "Can cost more.", rest: " Price includes overhead for management, insurance, and backup resources." },
              ].map((item, i) => (
                <li key={i} className="text-sm leading-5 text-gray-700">
                  <strong>{item.bold}</strong>{item.rest}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-100 my-5" />

          {/* When to choose */}
          <div className="space-y-3 mb-5">
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Choose an independent contractor when</p>
              <p className="text-sm leading-5 text-gray-700">
                Your project is smaller and straightforward, and you value direct contact with
                the person doing the work.
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Choose a company when</p>
              <p className="text-sm leading-5 text-gray-700">
                Your project involves multiple trades, a larger space, or you want a managed
                process with built-in backup.
              </p>
            </div>
          </div>

          {/* Takeaway */}
          <div className="rounded-xl bg-gray-900 p-4">
            <p className="text-sm leading-6 text-gray-300">
              Independent contractors are usually less expensive because of lower overhead.
              Companies cost more because of structure and staff. Choose based on project
              complexity — not price alone.
            </p>
          </div>
        </section>

        {/* FACTORS */}
        <section className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-3 text-center">
            Factors That Change Your Final Cost
          </h2>
          <p className="text-sm leading-6 text-gray-700 mb-5">
            Get clear on these before talking to any contractor.
          </p>
          <div className="space-y-3">
            {[
              { title: "Bathroom type", detail: "Master bath costs more than guest bath. Shower-only remodels cost less than a full redo." },
              { title: "Geographic location", detail: "Labor in New York or San Francisco runs significantly higher than Tampa or rural areas." },
              { title: "Material quality", detail: "Ceramic is more affordable than porcelain or natural stone. Vanity and fixture choices add up fast." },
              { title: "Scope of work", detail: "Cosmetic updates cost less. Moving plumbing or electrical increases your budget significantly." },
              { title: "Contractor experience", detail: "Licensed tradespeople may charge more, but they reduce costly mistakes." },
              { title: "Timeline", detail: "Rush jobs cost more. Standard 4–8 week timelines let contractors work efficiently." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-gray-50 border border-gray-200 p-4">
                <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                <p className="mt-1 text-sm leading-5 text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHERE TO BUY (inserted before CTA) */}
        <section className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-3 text-center">
            Where to Buy Bathroom Remodel Materials
          </h2>
          <p className="text-sm leading-6 text-gray-700">
            Choosing the right store isn’t just about price. Delivery speed, return policy,
            brand selection, product quality, and financing options all affect your project
            timeline and final cost.
          </p>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            Below we compare five popular retailers across 10 practical criteria to help you
            pick the best source for your materials.
          </p>

          <div className="mt-4 overflow-x-auto rounded-xl ring-1 ring-gray-100 shadow-sm">
            <table className="min-w-[920px] w-full table-auto text-sm bg-white" aria-describedby="stores-caption">
              <caption id="stores-caption" className="sr-only">
                Comparative snapshot of five retailers across delivery times, price, quality,
                customization, inventory, shipping, returns, support and financing options.
              </caption>
              <thead className="bg-slate-50">
                <tr className="text-center text-sm text-slate-600 uppercase tracking-[0.14em]">
                  <th scope="col" className="py-3 px-4">Store</th>
                  <th scope="col" className="py-3 px-4">Delivery Times</th>
                  <th scope="col" className="py-3 px-4">Price Range</th>
                  <th scope="col" className="py-3 px-4">Quality</th>
                  <th scope="col" className="py-3 px-4">Customization</th>
                  <th scope="col" className="py-3 px-4">Inventory Variety</th>
                  <th scope="col" className="py-3 px-4">Shipping Costs</th>
                  <th scope="col" className="py-3 px-4">Return Policy</th>
                  <th scope="col" className="py-3 px-4">Customer Support</th>
                  <th scope="col" className="py-3 px-4">Financing Options</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {storeData.map((s) => (
                  <tr key={s.id} className="align-top">
                    <td className="py-4 px-4 font-semibold text-left">{s.name}</td>
                    <td className="py-4 px-4 text-center whitespace-nowrap">{s.ratings.deliveryTimes}</td>
                    <td className="py-4 px-4 text-center whitespace-nowrap">{s.ratings.priceRange}</td>
                    <td className="py-4 px-4 text-center whitespace-nowrap">{s.ratings.quality}</td>
                    <td className="py-4 px-4 text-center whitespace-nowrap">{s.ratings.customization}</td>
                    <td className="py-4 px-4 text-center whitespace-nowrap">{s.ratings.inventory}</td>
                    <td className="py-4 px-4 text-center whitespace-nowrap">{s.ratings.shippingCosts}</td>
                    <td className="py-4 px-4 text-center whitespace-nowrap">{s.ratings.returnPolicy}</td>
                    <td className="py-4 px-4 text-center whitespace-nowrap">{s.ratings.support}</td>
                    <td className="py-4 px-4 text-center whitespace-nowrap">{s.ratings.financing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {storeData.map((s) => (
              <div key={s.id} className="rounded-xl bg-gray-50 border border-gray-200 p-4 flex flex-col h-full">
                <h3 className="text-base font-bold text-gray-900 text-center">{s.name}</h3>
                <p className="mt-2 text-sm leading-5 text-gray-700">{s.shortDescription}</p>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-gray-900">Pros</p>
                  <ul className="mt-1 text-sm text-gray-700 list-disc pl-5">
                    {s.pros.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-2">
                  <p className="text-sm font-semibold text-gray-900">Cons</p>
                  <ul className="mt-1 text-sm text-gray-700 list-disc pl-5">
                    {s.cons.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
                <p className="mt-2 text-sm text-gray-700"><strong>Best for:</strong> {s.bestFor}</p>
                <div className="mt-4 mt-auto">
                  <Button variant="affiliate" href={s.affiliateLink || '#'} ariaLabel={`Shop on ${s.name}`}>
                    Shop on {s.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-600 mb-3">Not sure what materials you need?</p>
            <Button href="/calculadora" variant="primary" ariaLabel="Not sure materials">
              Not Sure What Materials You Need?
            </Button>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-indigo-100 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Get a clearer estimate for your project
          </h3>
          <p className="text-sm leading-6 text-gray-700 mb-5">
            RenovaIQ breaks down labor, materials, and hidden costs for your specific bathroom
            and location. No signup. Free. Under 2 minutes.
          </p>
          <Button href="/calculadora" variant="primary" ariaLabel="Use the calculator">
            Use the Calculator
          </Button>
        </section>

        {/* FAQ removed per Part A — moved to Part B if needed */}

        {/* CLOSING */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-3 text-center">The Bottom Line</h2>
          <p className="text-sm leading-6 text-gray-700">
            Plan before you demo: define scope, add a contingency, and get a ZIP-based
            estimate — it can save you thousands.
          </p>
          <p className="mt-3 text-sm leading-6 text-gray-700">
            Run your free, no-signup estimate with RenovaIQ in under 2 minutes.
          </p>
          <div className="mt-5">
            <Button href="/calculadora" variant="primary" ariaLabel="Get your estimate">
              Get Your Estimate Now
            </Button>
          </div>
        </section>

      </article>
    </main>
  );
}