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
    colors: {
      'prime': '#0085FF',
      'secondary': '#190061',
      'dark': '#282828',
      'bright': '#3500D3',
      'dull': '#240090'
    },
  },
}