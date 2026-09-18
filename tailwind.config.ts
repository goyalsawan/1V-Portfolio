import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        calm: {
          bg: "#FAFAFB",
          surface: "#FFFFFF",
          card: "#FFFFFF",
          border: "#E4E4E7",
          borderHover: "#D4D4D8",
          subtle: "#F4F4F5",
          muted: "#71717A",
          dark: "#18181B",
          darker: "#09090B",
          indigo: {
            50: "#EEF2FF",
            100: "#E0E7FF",
            500: "#6366F1",
            600: "#4F46E5",
            700: "#4338CA",
          },
          emerald: {
            50: "#ECFDF5",
            100: "#D1FAE5",
            500: "#10B981",
            600: "#059669",
            700: "#047857",
          },
          amber: {
            50: "#FFFBEB",
            100: "#FEF3C7",
            500: "#F59E0B",
            600: "#D97706",
            700: "#B45309",
          },
          sky: {
            50: "#F0F9FF",
            100: "#E0F2FE",
            500: "#0EA5E9",
            600: "#0284C7",
            700: "#0369A1",
          },
          rose: {
            50: "#FFF1F2",
            100: "#FFE4E6",
            500: "#F43F5E",
            600: "#E11D48",
            700: "#BE123C",
          },
          purple: {
            50: "#FAF5FF",
            100: "#F3E8FF",
            500: "#A855F7",
            600: "#9333EA",
            700: "#7E22CE",
          },
        },
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.04)",
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
        cardHover: "0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.07)",
        elevated: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        md: "0.625rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
