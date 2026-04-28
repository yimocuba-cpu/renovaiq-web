import CalculadoraClient from "../../components/CalculadoraClient";

export const metadata = {
  title: "Bathroom Remodel Cost Calculator | RenovaIQ",
  description:
    "Use RenovaIQ to estimate bathroom remodel costs across the U.S. with a clear breakdown of labor, materials, and hidden costs. Free, fast, and no signup required.",
  keywords: [
    "bathroom remodel calculator",
    "bathroom renovation cost estimator",
    "bathroom cost USA",
    "remodel cost breakdown",
    "free bathroom remodel estimate",
  ],
};

export default function CalculadoraPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <CalculadoraClient />
    </main>
  );
}