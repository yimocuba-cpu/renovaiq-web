import CalculadoraClient from "../../components/CalculadoraClient";

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "RenovaIQ Bathroom Remodel Cost Estimator",
  "description": "Interactive bathroom remodel cost calculator with labor, materials, and hidden cost breakdown by ZIP code.",
  "url": "https://renovaiq-web.vercel.app/calculadora",
  "applicationCategory": "UtilityApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Interactive bathroom type selector",
    "Labor and material work selection",
    "ZIP code-based labor multiplier",
    "Real-time cost calculation",
    "PDF estimate export"
  ]
};

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
  canonical: "https://renovaiq-web.vercel.app/calculadora",
};

export default function CalculadoraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <main className="bg-slate-50 text-slate-900">
        <CalculadoraClient />
      </main>
    </>
  );
}