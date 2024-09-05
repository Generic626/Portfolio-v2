/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#051931",
        "primary-dark": "#0A315f",
        highlight: "#EDFF00",
      },
    },
  },
  plugins: [],
};
