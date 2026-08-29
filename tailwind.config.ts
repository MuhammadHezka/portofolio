import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        glass: "hsl(var(--glass) / <alpha-value>)",
        line: "hsl(var(--line) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-geist)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 30px 120px hsl(var(--accent) / .18)",
        glass: "inset 0 1px 0 hsl(var(--highlight) / .08), 0 24px 80px hsl(var(--shadow) / .28)"
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      }
    }
  },
  plugins: []
};

export default config;
