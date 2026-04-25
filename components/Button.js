// components/Button.js

import Link from "next/link";

export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  href,
  ariaLabel,
}) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variants = {
    primary:
      "bg-[#1D4ED8] hover:bg-[#1E40AF] active:bg-[#1E3A8A] text-white px-6 py-3 text-base focus:ring-[#1D4ED8] w-full sm:w-auto",

    cancel:
      "bg-[#E5E7EB] hover:bg-[#D1D5DB] active:bg-[#9CA3AF] text-gray-700 px-6 py-3 text-base focus:ring-gray-400 w-full sm:w-auto",

    pdf:
      "bg-[#059669] hover:bg-[#047857] active:bg-[#065F46] text-white px-6 py-3 text-base focus:ring-[#059669] w-full sm:w-auto",

    affiliate:
      "bg-[#1D4ED8] hover:bg-[#1E40AF] active:bg-[#1E3A8A] text-white px-4 py-2 text-sm focus:ring-[#1D4ED8] w-full sm:w-auto",
  };

  const classes = `${base} ${variants[variant] || variants.primary}`;

  // 🔷 LINK INTERNO (Next.js)
  if (href && href.startsWith("/")) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  // 🔷 LINK EXTERNO
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  // 🔷 BUTTON NORMAL
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}