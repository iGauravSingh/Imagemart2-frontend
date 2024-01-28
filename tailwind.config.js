/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubikdoodle': ['Rubik Doodle Shadow', 'sans-serif'],
        'dance': ['Dancing Script', 'cursive'],
        'montse': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

