/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FC8019",
        dark: "#1c1c1c",
        navy: {
          800: "#1a3a8a",
          900: "#1a2b5d",
        },
        ink: {
          500: "#4b5563",
        },
        'openbi-green': "#22c55e",
      },
    },
  },
  plugins: [],
};
