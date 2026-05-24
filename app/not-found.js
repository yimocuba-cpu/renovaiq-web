import Link from "next/link";

export const metadata = {
  title: "Page Not Found | RenovaIQ",
  description: "The page you're looking for doesn't exist. Return to the Bathroom Remodel Cost Calculator.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Error Code */}
        <div className="mb-8">
          <h1 className="text-8xl sm:text-9xl font-bold text-cyan-500 leading-none">
            404
          </h1>
        </div>

        {/* Brand */}
        <div className="mb-8">
          <Link href="/" className="inline-block">
            <span className="text-2xl sm:text-3xl font-bold text-white hover:text-cyan-400 transition-colors">
              RenovaIQ
            </span>
          </Link>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          Let&apos;s get you back on track.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-colors text-center text-sm sm:text-base"
          >
            Go to Home
          </Link>

          <Link
            href="/calculadora"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors text-center text-sm sm:text-base border border-slate-600"
          >
            Use the Calculator
          </Link>
        </div>

        {/* Links to main sections */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-xs sm:text-sm text-slate-400 mb-4">Popular pages:</p>
          <nav className="flex flex-col sm:flex-row gap-4 justify-center text-slate-300">
            <Link
              href="/"
              className="hover:text-cyan-400 transition-colors text-sm sm:text-base"
            >
              Home
            </Link>
            <span className="hidden sm:inline text-slate-600">•</span>
            <Link
              href="/calculadora"
              className="hover:text-cyan-400 transition-colors text-sm sm:text-base"
            >
              Calculator
            </Link>
            <span className="hidden sm:inline text-slate-600">•</span>
            <Link
              href="/blog/bathroom-remodel-cost-usa"
              className="hover:text-cyan-400 transition-colors text-sm sm:text-base"
            >
              Cost Guide
            </Link>
          </nav>
        </div>

        {/* Decorative element */}
        <div className="mt-12 opacity-20">
          <p className="text-slate-500 text-xs">
            RenovaIQ © 2026. Free bathroom remodel cost calculator.
          </p>
        </div>
      </div>
    </main>
  );
}
