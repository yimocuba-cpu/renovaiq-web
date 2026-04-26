import CalculadoraClient from "../../components/CalculadoraClient";

export const metadata = {
  title: "Bathroom Remodel Cost Calculator | RenovaIQ",
  description:
    "Use our free bathroom remodel calculator to estimate labor, materials, and hidden costs across the U.S. No signup required.",
  keywords: [
    "bathroom remodel calculator",
    "bathroom renovation cost estimator",
    "bathroom cost USA",
    "remodel cost breakdown",
  ],
};

export default function CalculadoraPage() {
  return (
    <main className="bg-white text-gray-900">
      <CalculadoraClient />
    </main>
  );
}