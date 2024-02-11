/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      screens: {
        '2xl': { 'min': '1536px' },
        'xl': { 'min': '1280px' },
        'lg': { 'min': '1024px' },
        'md': { 'min': '750px' },
        'sm': { 'min': '640px' },
        'xs': { 'max': '475px' }
      },
    },
  },
  plugins: [],
});
