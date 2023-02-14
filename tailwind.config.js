/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Amazon_blue:{
          light:"#232F3E",
          default: "#131921",
        }
      }
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/line-clamp'),
  ],
}
