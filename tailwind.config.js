import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        navy: {
          50: "#f4f6fa",
          100: "#e9edf5",
          200: "#c8d3e6",
          300: "#a7b9d7",
          400: "#6585ba",
          500: "#23519d",
          600: "#20498d",
          700: "#1a3d76",
          800: "#15315e",
          900: "#1a2b5d", // OpenBI Navy
        },
        openbi: {
          green: "#28a745",
          slate: "rgb(90, 97, 119)",
        },
        ink: {
          900: "#111827",
          700: "#374151",
          500: "rgb(90, 97, 119)", // OpenBI Slate
        },
        surface: {
          50: "#f9fafb",
          100: "#f3f4f6",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
