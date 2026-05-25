import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Bathroom Remodel Cost Calculator | Free Estimate Tool | RenovaIQ",
  description:
    "Calculate accurate bathroom remodel costs instantly. See labor, materials, and hidden costs separated. Free tool for USA homeowners. No signup required.",
  
  keywords: [
    "bathroom remodel cost calculator",
    "bathroom renovation estimate",
    "bathroom remodeling cost USA",
    "free bathroom remodel estimate",
    "bathroom cost breakdown",
    "remodel estimate labor materials",
  ],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Bathroom Remodel Cost Calculator | Free Estimate Tool | RenovaIQ",
    description:
      "Calculate accurate bathroom remodel costs instantly. See labor, materials, and hidden costs separated. Free tool for USA homeowners. No signup required.",
    url: "https://renovaiqapp.com",
    siteName: "RenovaIQ",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://renovaiqapp.com/favicon.ico",
        width: 192,
        height: 192,
        alt: "RenovaIQ Bathroom Remodel Calculator",
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  metadataBase: new URL("https://renovaiqapp.com"),
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "RenovaIQ - Bathroom Remodel Cost Calculator",
  "description": "Calculate accurate bathroom remodel costs instantly. See labor, materials, and hidden costs separated. Free tool for USA homeowners.",
  "url": "https://renovaiqapp.com",
  "mainEntity": {
    "@type": "SoftwareApplication",
    "name": "RenovaIQ",
    "description": "Free online bathroom remodel cost calculator and estimator for USA homeowners",
    "applicationCategory": "UtilityApplication",
    "url": "https://renovaiqapp.com",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "120",
    },
  },
  "hasPart": [
    {
      "@type": "Tool",
      "name": "Bathroom Remodel Cost Calculator",
      "description": "Estimate bathroom remodel costs by labor, materials, and hidden costs",
      "url": "https://renovaiqapp.com/calculadora",
    },
  ],
  "mainContentOfPage": {
    "@type": "WebPageElement",
    "description": "Interactive bathroom remodel estimate tool",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* SCRIPT DE IMPACT FORMATEADO PARA NEXT.JS */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(i,m,p,a,c,t){c.ire_o=p;c[p]=c[p]||function(){(c[p].a=c[p].a||[]).push(arguments)};t=a.createElement(m);var z=a.getElementsByTagName(m)[0];t.async=1;t.src=i;z.parentNode.insertBefore(t,z)})('https://utt.impactcdn.com/P-A7315492-7421-4ec9-b58b-e926641898581.js','script','impactStat',document,window);impactStat('transformLinks');impactStat('trackImpression');`
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}