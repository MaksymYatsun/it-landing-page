/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      secondary: ["Inter, sans-serif"],
      body: ["Manrope"],
    },
    extend: {
      colors: {
        primary: "#F84646",
      },
      screens: {
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
