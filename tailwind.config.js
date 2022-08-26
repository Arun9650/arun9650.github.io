/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Bree': ['Bree Serif', 'serif'],
      "OpenSans" : ['Open Sans', 'sans-serif'],
      
    }
  },
  
  plugins: [require("daisyui")],
}