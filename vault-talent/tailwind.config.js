/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        'teal-dark': '#1D3C34',
        brass: '#D4AF37',
        cream: '#F7F5F2',
        blush: '#E8D6D0'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Lato', 'sans-serif']
      }
    }
  },
  plugins: [],
}
