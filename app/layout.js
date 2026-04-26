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
  title: "Bathroom Remodel Cost Calculator | Free Estimate Tool (2026)",
  description:
    "Get a fast bathroom remodel estimate for labor, materials, and hidden costs across the U.S.",
  
  keywords: [
    "bathroom remodel cost",
    "bathroom renovation cost",
    "bathroom cost calculator",
    "remodel estimate Florida",
    "bathroom remodeling Tampa",
  ],

  openGraph: {
    title: "Bathroom Remodel Cost Calculator | Free Estimate Tool",
    description:
      "Instantly estimate your bathroom remodel cost. No signup required. Accurate pricing based on real contractor data.",
    url: "https://renovaiq-web.vercel.app",
    siteName: "RenovaIQ",
    type: "website",
  },

  metadataBase: new URL("https://renovaiq-web.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}