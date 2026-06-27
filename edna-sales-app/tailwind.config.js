/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        green: {
          DEFAULT: '#1A3C2B',
          mid: '#2D6A4F',
          light: '#4CAF78',
          pale: '#E8F5EE',
        },
        cream: '#FAF7F2',
      },
    },
  },
  plugins: [],
}
