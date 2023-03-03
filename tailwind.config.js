/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        blue: {
          DEFAULT: '#6366f1',
        },
        gray: {
          600: '#606060',
        },
      },
    },
  },
}
