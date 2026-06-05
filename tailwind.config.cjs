/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        "safe-area-inset-left": "env(safe-area-inset-left)",
        "safe-area-inset-right": "env(safe-area-inset-right)",
        "safe-area-inset-top": "env(safe-area-inset-top)",
        "safe-area-inset-bottom": "env(safe-area-inset-bottom)",
      },
      screens: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

module.exports = config;
