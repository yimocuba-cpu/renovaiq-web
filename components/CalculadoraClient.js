"use client";

import Wizard from "./Wizard";
import Button from "./Button";
import Navbar from "./Navbar";

const LOWES_LINK = "PASTE_LOWES_AFFILIATE_LINK_HERE";
const FLOOR_DECOR_LINK = "PASTE_FLOOR_DECOR_AFFILIATE_LINK_HERE";
const SANABRIA_MAPS_LINK = "https://www.google.com/maps/place/Sanabria+Barrios+Flooring+Inc/data=!4m2!3m1!1s0x65b7c928e8114c4f:0xdf4de619ff1eb4a9";

export default function CalculadoraClient() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* TOP NAV */}
      <Navbar />

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-lg">
          <span className="inline-flex w-fit rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-700">
            Free Bathroom Remodel Estimate
          </span>

          <h1 className="text-center mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Bathroom Remodel Cost Calculator
          </h1>

          <p className="text-justify mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Most homeowners underestimate remodel costs and end up paying more
            than expected. RenovaIQ helps you see a clearer breakdown of labor,
            materials, and hidden costs before you commit.
          </p>

          <p className="mt-3 text-sm text-slate-500">
            Free, no signup required, and built for homeowners across the U.S.
          </p>
        </div>
      </section>

      {/* WIZARD */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-6">
          <p className="text-sm text-slate-500">
            Takes less than 60 seconds. No signup required.
          </p>
        </div>

        <Wizard />
      </section>

      {/* COLLABORATOR / TRUST */}
      <section className="border-t border-slate-200 bg-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
                Built with real remodeling insight
              </h2>
              <p className="text-justify mt-4 text-base leading-7 text-slate-600">
                This calculator was shaped with practical remodeling experience so
                the estimate feels more realistic, structured, and useful in the
                real world.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
              <p className="text-center text-sm font-semibold text-slate-900">
                Thanks to{" "}
                <a
                  href={SANABRIA_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-700 hover:underline"
                >
                  Sanabria Barrios Flooring Inc
                </a>
              </p>

              <p className="text-justify mt-2 text-sm leading-6 text-slate-600">
                The calculator is built on the real-world experience of Sanabria Barrios Flooring Inc., a company active since 2016 and serving Tampa and surrounding areas. Their hands-on work in residential remodeling helped shape a clearer estimation logic, aligned with actual labor and material costs.
              </p>
              <p className="text-justify mt-3 text-sm leading-6 text-slate-600">
                They specialize in flooring, bathroom, staircase, kitchen, and backsplash remodeling, delivering projects with a strong focus on quality, detail, and efficient execution tailored to each client’s needs.
              </p>
              <p className="text-justify mt-3 text-sm leading-6 text-slate-600">
                The company has been officially registered since 2016 with the Florida Division of Corporations (Registration No. P16000023654) and is listed with Dun & Bradstreet under D-U-N-S Number 03-550-0949, reinforcing its credibility and formal presence in the market.
              </p>
              <p className="text-justify mt-3 text-sm leading-6 text-slate-600">
                Based on this real experience, we also recommend comparing materials and pricing from trusted suppliers before making final decisions, helping achieve the right balance between cost and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AFILIADOS — SOLO AL FINAL */}
      <section className="border-t border-slate-200 bg-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
              Helpful places to shop for your remodel
            </h2>
            <p className="text-justify mt-4 text-base leading-7 text-slate-600">
              Use trusted stores for your remodel materials. The price you pay
              does not change if you click through our links, and those visits
              help support and maintain the site at no extra cost to you.
            </p>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Materials source
              </p>
              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Lowe&apos;s
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                A reliable starting point for bathroom remodel essentials,
                fixtures, and everyday project materials. Useful when you want a
                broad selection and quick access to common renovation products.
              </p>
              <p className="mt-3 text-xs text-slate-500">
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

            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Materials source
              </p>
              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Floor &amp; Decor
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                A strong choice for tile, flooring, and remodel-focused
                finishes. Ideal for homeowners looking for design-forward
                materials and a more specialized selection for bath projects.
              </p>
              <p className="mt-3 text-xs text-slate-500">
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

          <p className="mt-3 text-xs text-slate-500">
            We may earn a commission if you buy through these links, at no extra
            cost to you.
          </p>
        </div>
      </section>
    </div>
  );
}