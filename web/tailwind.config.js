/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./web/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#E63946', // Roter Farbton für Octra
        secondary: '#FF6B6B',
      },
    },
  },
  plugins: [],
};