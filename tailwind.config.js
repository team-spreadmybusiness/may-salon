/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#800020',
        accent: '#FFD700',
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
}
