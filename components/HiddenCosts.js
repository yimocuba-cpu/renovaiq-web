// components/HiddenCosts.js

import { formatSingle } from "../lib/formatCurrency";

export default function HiddenCosts({ costs }) {
  const titleId = "additional-costs-title";

  return (
    <section
      className="bg-[#FFFBEB] border border-[#FCD34D] rounded-2xl overflow-hidden"
      aria-labelledby={titleId}
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-[#FCD34D]">
        <span className="text-base" aria-hidden="true">⚠️</span>
        <p
          id={titleId}
          className="text-xs font-bold uppercase tracking-widest text-[#D97706]"
        >
          Additional Costs to Consider
        </p>
      </div>

      {/* Items */}
      <div className="divide-y divide-[#FDE68A] px-5">
        {costs.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between gap-4 py-4"
          >
            <div className="flex flex-col gap-1 flex-1">
              <span className="text-sm font-semibold text-gray-900">
                {item.title}
              </span>
              <span className="text-xs text-gray-500 leading-relaxed">
                {item.description}
              </span>
            </div>

            <span className="text-sm font-bold text-[#D97706] whitespace-nowrap shrink-0">
              {formatSingle(item.amount)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}