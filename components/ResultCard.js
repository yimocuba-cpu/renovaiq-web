// components/ResultCard.js

import { formatRange, formatSingle } from "../lib/formatCurrency";

export default function ResultCard({ laborLow, laborHigh, materialsTotal }) {
  const totalLow = laborLow + materialsTotal;
  const totalHigh = laborHigh + materialsTotal;
  const titleId = "estimate-results-title";

  return (
    <section
      className="bg-white border-2 border-[#1D4ED8] rounded-2xl overflow-hidden shadow-md"
      aria-labelledby={titleId}
    >
      {/* Header */}
      <div className="bg-[#1D4ED8] px-5 py-3">
        <p
          id={titleId}
          className="text-white text-xs font-bold uppercase tracking-widest"
        >
          Your Estimate
        </p>
      </div>

      {/* Rows */}
      <div className="divide-y divide-gray-100 px-5">
        {/* Labor */}
        <div className="flex items-center justify-between py-4 gap-4">
          <span className="text-sm font-medium text-gray-500 shrink-0">
            Labor
          </span>
          <span className="text-sm font-bold text-gray-900 text-right whitespace-nowrap">
            {formatRange(laborLow, laborHigh)}
          </span>
        </div>

        {/* Materials */}
        <div className="flex items-center justify-between py-4 gap-4">
          <span className="text-sm font-medium text-gray-500 shrink-0">
            Materials
          </span>
          <span className="text-sm font-bold text-gray-900 text-right whitespace-nowrap">
            {formatSingle(materialsTotal)}
          </span>
        </div>

        {/* Estimated Project Cost */}
        <div className="flex items-center justify-between py-4 gap-4 bg-[#EFF6FF] -mx-5 px-5">
          <span className="text-sm font-semibold text-[#1D4ED8] shrink-0">
            Estimated Project Cost
          </span>
          <span className="text-base font-extrabold text-[#1D4ED8] text-right whitespace-nowrap">
            {formatRange(totalLow, totalHigh)}
          </span>
        </div>
      </div>
    </section>
  );
}