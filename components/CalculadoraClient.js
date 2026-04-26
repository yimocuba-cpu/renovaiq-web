"use client";

import Wizard from "./Wizard";
import AffiliateSection from "./AffiliateSection";

export default function CalculadoraClient() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-4xl px-4 pt-12 pb-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Bathroom Remodel Cost Calculator
          </h1>

          <p className="text-sm text-gray-600 sm:text-base">
            Get a clearer estimate with labor, materials, and hidden costs before
            talking to a contractor.
          </p>
        </div>
      </section>

      {/* WIZARD */}
      <section className="mx-auto max-w-4xl px-4 pb-10 sm:px-6 lg:px-8">
        <Wizard />
      </section>

      {/* AFILIADOS */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-xl font-bold text-gray-900">
              Need materials for your project?
            </h2>

            <p className="text-sm text-gray-600">
              Explore trusted stores for bathroom remodel supplies. Prices stay the same for you.
            </p>
          </div>

          <div className="mt-6">
            <AffiliateSection />
          </div>
        </div>
      </section>
    </>
  );
}