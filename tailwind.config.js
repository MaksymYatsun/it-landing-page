/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      seccondary: ['Inter, sans-serif'],
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
