/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/styles.js"
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          veryDarkGrayishBlue: "hsl(217, 19%, 35%)",
          desaturatedDarkBlue: "hsl(214, 17%, 51%)",
          grayishBlue: "hsl(212, 23%, 69%)",
          lightGrayishBlue: "hsl(210, 46%, 95%)",
        }
      },
      fontFamily: {
        manrope: "var(--font-manrope)"
      }
    },
  },
  plugins: [],
}
