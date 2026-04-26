import Button from "./Button";

export default function CTAForm({ estimate, onCancel = () => {} }) {
  const titleId = "cta-form-title";

  const additionalCosts =
    estimate?.hiddenCosts?.map((item) => item.title).join(", ") || "";

  const selectedTasks = estimate?.selectedTasks?.join(", ") || "";
  const selectedMaterials = estimate?.selectedMaterials?.join(", ") || "";

  return (
    <section
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
      aria-labelledby={titleId}
    >
      {/* Header */}
      <div className="bg-gray-900 px-5 py-3">
        <p
          id={titleId}
          className="text-white text-xs font-bold uppercase tracking-widest"
        >
          Connect with a Pro
        </p>
      </div>

      <form
        action="https://formspree.io/f/mojpeldw"
        method="POST"
        className="px-5 py-5 flex flex-col gap-5"
      >
        <input
          type="hidden"
          name="_subject"
          value={`RenovaIQ lead - ${estimate?.bathTypeLabel || "Bathroom Estimate"}`}
        />
        <input
          type="hidden"
          name="bathroom_type"
          value={estimate?.bathTypeLabel || ""}
        />
        <input
          type="hidden"
          name="tile_type"
          value={estimate?.tileTypeLabel || ""}
        />
        <input
          type="hidden"
          name="bathroom_size"
          value={estimate?.bathroomSizeLabel || ""}
        />
        <input
          type="hidden"
          name="labor_range"
          value={estimate?.labor || ""}
        />
        <input
          type="hidden"
          name="materials_total"
          value={estimate?.materials || ""}
        />
        <input
          type="hidden"
          name="estimated_project_cost"
          value={estimate?.estimatedProjectCost || ""}
        />
        <input
          type="hidden"
          name="selected_labor_tasks"
          value={selectedTasks}
        />
        <input
          type="hidden"
          name="selected_materials"
          value={selectedMaterials}
        />
        <input
          type="hidden"
          name="additional_costs"
          value={additionalCosts}
        />

        {/* Persuasive Text */}
        <div className="flex flex-col gap-3">
          <h3 className="text-center text-base font-bold text-gray-900 leading-snug">
            Ready to Move Forward?
          </h3>
          <p className="text-justify text-sm text-gray-600 leading-relaxed">
            Most homeowners spend more than they planned — not because of bad
            luck, but because they hired the wrong contractor.
          </p>
          <p className="text-justify text-sm text-gray-600 leading-relaxed">
            We work with licensed, insured professionals with 5+ years of
            verified experience. Before you sign anything, let us connect you
            with someone you can trust.
          </p>
          <p className="text-center text-sm font-semibold text-gray-900">
            Drop your info below. We&apos;ll do the rest.
          </p>
        </div>

        {/* Fields */}
        <div className="flex flex-col gap-3">
          {/* ZIP Code */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="form-zip"
              className="text-xs font-semibold text-gray-700 uppercase tracking-wide"
            >
              ZIP Code <span className="text-red-500">*</span>
            </label>
            <input
              id="form-zip"
              name="zip"
              type="text"
              inputMode="numeric"
              maxLength={5}
              defaultValue={estimate?.zipCode || ""}
              placeholder="e.g. 33601"
              required
              autoComplete="postal-code"
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="form-email"
              className="text-xs font-semibold text-gray-700 uppercase tracking-wide"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="form-email"
              name="email"
              type="email"
              placeholder="you@email.com"
              required
              autoComplete="email"
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="form-phone"
              className="text-xs font-semibold text-gray-700 uppercase tracking-wide"
            >
              Phone Number
              <span className="text-gray-400 font-normal ml-1">(optional)</span>
            </label>
            <input
              id="form-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              placeholder="(555) 000-0000"
              autoComplete="tel"
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <div className="flex-1">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
          <div className="flex-1">
            <Button variant="cancel" type="button" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
}