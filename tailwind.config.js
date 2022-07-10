/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./**/*.{html,js}"],
  purge: ["./**/*.html"],
  theme: {
    extend: {},
    screens: {
      mobile: "600px",
      tablet: "744px",
      desktop: "1440px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
