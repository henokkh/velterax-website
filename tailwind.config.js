/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryAccent: "#3CAEAE",
        darkText: "#5C5757",
        lightBg: "#EDF4F4",
        darkBg: "#131F1F",
        cardBg: "#203434",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "velterax-logo": "url('/images/logo-dark-mode.svg')",
        "curvy-dark": "url('/images/curve.svg')",
      }),
    },
  },
  plugins: [],
};
