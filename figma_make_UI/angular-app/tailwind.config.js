/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',
        secondary: '#2D2D2D',
        neutral: '#F5F5F5',
      },
    },
  },
  plugins: [],
}
