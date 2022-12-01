/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ['Manrope']
    },
    extend: {
      colors: {
        'primary-orange': '#F84646'
      },
      screens: {
        'desktop': '1440px'
      },
    }
  },
  plugins: [],
}
