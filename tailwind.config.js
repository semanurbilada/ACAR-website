/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "983px",
      lg: "992px",
      xl: "1080px",
      "2xl": "1294px",
      "3xl": "1921px",
      "4xl": "2880px"
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          transparent: "rgb(57, 130, 194, 0.4)",
          700: "#306da3",
          900: "#274c6c",
        },
        gray: {
          transparent: "#42566c66",
          300: "#d1d5db",
          400: "#73787c",
          800: "#393d40",
        },
      },
      boxShadow: {
        'custom': 'inset 0 35px 60px -15px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}