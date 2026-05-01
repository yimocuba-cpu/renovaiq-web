import CalculadoraClient from "../../components/CalculadoraClient";

export const metadata = {
  title: "Bathroom Remodel Cost Estimator | Labor & Materials Breakdown | RenovaIQ",
  description:
    "Get detailed bathroom remodel cost estimates instantly. See labor costs, materials, and hidden expenses separated. Free calculator for all USA zip codes. Perfect for budget planning before hiring contractors.",
  keywords: [
    "bathroom remodel cost estimator",
    "bathroom renovation cost calculator",
    "labor and materials cost breakdown",
    "bathroom remodeling expenses USA",
    "renovation budget planner",
    "bathroom cost by zip code",
  ],
};

export default function CalculadoraPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <CalculadoraClient />
    </main>
  );
}