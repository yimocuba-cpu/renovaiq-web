"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Calculator", href: "/calculadora" },
    { name: "Bathroom Remodel Guide", href: "/blog/bathroom-remodel-cost-usa" },
  ];

  return (
    <nav className="w-full border-b border-slate-800 bg-slate-900 shadow-sm sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-3 sm:px-4 sm:py-4 lg:px-8">
        {/* Brand */}
        <Link href="/" className="text-base sm:text-lg font-semibold tracking-wide text-white hover:text-cyan-300 transition-colors whitespace-nowrap">
          RenovaIQ
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 lg:gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-slate-700 bg-slate-800 text-cyan-300 hover:bg-slate-700 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          aria-label="Toggle menu"
        >
          <svg
            className="w-4 sm:w-5 h-4 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-700 bg-slate-900">
          <div className="px-3 py-3 sm:px-4 space-y-1 sm:space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors py-2 px-2 rounded hover:bg-slate-800"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;