/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        custom: 'url("/cursors/CHROMAPHAGE.PNG"), auto',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
