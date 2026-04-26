"use client";

import Wizard from "./Wizard";
import Button from "./Button";

const LOWES_LINK = "PASTE_LOWES_AFFILIATE_LINK_HERE";
const FLOOR_DECOR_LINK = "PASTE_FLOOR_DECOR_AFFILIATE_LINK_HERE";
const SANABRIA_MAPS_LINK = "https://maps.app.goo.gl/DtmugzjZAvhSxRK39?g_st=aw";

export default function CalculadoraClient() {
  return (
    <div className="flex flex-col bg-white text-gray-900">
      {/* TOP NAV */}
      <nav className="w-full border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <span className="text-sm font-bold tracking-wide text-gray-900">
            RenovaIQ
          </span>

          <a
            href="/"
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Go to home"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
        </div>
      </nav>

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
            Free Bathroom Remodel Estimate
          </span>

          <h1 className="text-center mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Bathroom Remodel Cost Calculator
          </h1>

          <p className="text-justify mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Most homeowners underestimate remodel costs and end up paying more
            than expected. RenovaIQ helps you see a clearer breakdown of labor,
            materials, and hidden costs before you commit.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Free, no signup required, and built for homeowners across the U.S.
          </p>
        </div>
      </section>

      {/* WIZARD */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-6">
          <p className="text-sm text-gray-500">
            Takes less than 60 seconds. No signup required.
          </p>
        </div>

        <Wizard />
      </section>

      {/* COLLABORATOR / TRUST */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                Built with real remodeling insight
              </h2>
              <p className="text-justify mt-4 text-base leading-7 text-gray-600">
                This calculator was shaped with practical remodeling experience so
                the estimate feels more realistic, structured, and useful in the
                real world.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-center text-sm font-semibold text-gray-900">
                Thanks to{" "}
                <a
                  href={SANABRIA_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Sanabria Barrios Flooring Inc
                </a>
              </p>

              <p className="text-justify mt-2 text-sm leading-6 text-gray-600">
                The calculator was supported by real field insight from Sanabria
                Barrios Flooring Inc, active since 2016, helping shape the logic
                behind labor and material estimation.
              </p>

              <p className="text-justify mt-3 text-sm leading-6 text-gray-600">
                Based on that experience, we also recommend comparing materials
                and prices from trusted suppliers before making final decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AFILIADOS — SOLO AL FINAL */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              Helpful places to shop for your remodel
            </h2>
            <p className="text-justify mt-4 text-base leading-7 text-gray-600">
              Use trusted stores for your remodel materials. The price you pay
              does not change if you click through our links, and those visits
              help support and maintain the site at no extra cost to you.
            </p>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Materials source
              </p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">
                Lowe&apos;s
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                A reliable starting point for bathroom remodel essentials,
                fixtures, and everyday project materials. Useful when you want a
                broad selection and quick access to common renovation products.
              </p>
              <p className="mt-3 text-xs text-gray-500">
                The price you pay does not change. This helps support and
                maintain the site.
              </p>
              <div className="mt-4">
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
              <h3 className="mt-3 text-xl font-bold text-gray-900">
                Floor &amp; Decor
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                A strong choice for tile, flooring, and remodel-focused
                finishes. Ideal for homeowners looking for design-forward
                materials and a more specialized selection for bath projects.
              </p>
              <p className="mt-3 text-xs text-gray-500">
                No extra cost to you. These visits help keep the tool running.
              </p>
              <div className="mt-4">
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

          <p className="mt-3 text-xs text-gray-500">
            We may earn a commission if you buy through these links, at no extra
            cost to you.
          </p>
        </div>
      </section>
    </div>
  );
}