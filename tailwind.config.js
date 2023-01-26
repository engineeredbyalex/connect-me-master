/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
      'hero': "url('/src/components/Assets/images/Background/bgHero.png')"
      },
    },
    fontFamily: {
      sans: ["Poppins"],
    },
  },
  plugins: [],
};
