const { theme } = require('app/design/tailwind/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    '../../packages/**/*.{js,jsx,ts,tsx}',
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  plugins: [require('nativewind/tailwind/css')],
  important: 'html',
  darkMode: "class", 
  theme: {
    ...theme,
  },
}
