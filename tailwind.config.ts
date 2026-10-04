/* PLACEHOLDER — confirm against brand guideline */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "var(--navy-950)",
        },
        blue: {
          700: "var(--blue-700)",
          400: "var(--blue-400)",
        },
        ice: {
          50: "var(--ice-50)",
        },
        ink: {
          900: "var(--ink-900)",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(14, 42, 77, 0.06)",
        card: "0 10px 30px -4px rgba(14, 42, 77, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
