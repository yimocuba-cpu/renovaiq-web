// components/StepCard.js

export default function StepCard({ stepNumber, title, hint, children }) {
  const titleId = `step-card-title-${stepNumber}`;

  return (
    <section
      className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm"
      aria-labelledby={titleId}
    >
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#1D4ED8] text-white text-xs font-bold">
          {stepNumber}
        </span>
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
          Step {stepNumber}
        </span>
      </div>

      <h2 id={titleId} className="text-center text-base font-semibold text-gray-900 leading-snug">
        {title}
      </h2>

      {hint && (
        <p className="text-xs text-gray-500 leading-relaxed -mt-2">
          {hint}
        </p>
      )}

      <div className="flex flex-col gap-3">
        {children}
      </div>
    </section>
  );
}