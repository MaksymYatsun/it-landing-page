/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'desktop': '1440px'
    },
    colors: {
      'primary-orange': '#F84646'
    },
    fontFamily: {
      body: ['Manrope']
    },
    extend: {
    }
  },
  plugins: [],
}
