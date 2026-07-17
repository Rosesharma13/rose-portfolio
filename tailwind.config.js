/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#fdfcf8',
          100: '#faf8f0',
          200: '#f2efe2',
          300: '#e4e0cd',
        },
        ink: {
          900: '#232418',
          700: '#3d3e2c',
          500: '#6b6b5c',
          300: '#9a9a86',
        },
        olive: {
          50: '#f4f5ec',
          100: '#e8ebd4',
          300: '#c3cd93',
          400: '#a3b169',
          500: '#7f8f45',
          600: '#647236',
          700: '#4f5a2b',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
