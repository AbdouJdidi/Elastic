/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors:{
        customGreen : '#088178',
        customYellow : '#f3f0e3',
      }
    },
  },
  plugins: [],
}