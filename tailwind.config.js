/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './components/**/*.{module.css,css}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      colors: {
        'prime': '#fff',
        'secondary': '#190061',
        'dark': '#282828',
        'bright': '#3500D3',
        'dull': '#240090',
        'discord': '#7289d9',
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-shadow"),
  ]
}