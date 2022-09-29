/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#E2603B',
        'secondary': '#89393B',
        'white': '#FFFFFF',
        'rose':'#F9E0D9',
       
      },
      fontFamily: {
        bonheur:   ['Bonheur Royale','sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      fontSize: {
        'sm': ['24px', '36px'],
        'md': ['40px', '42px'],
        'lg': ['64px', '52px'],
        'xl': ['144px', '152px'],
      },
    },
  },
  plugins: [],
}
