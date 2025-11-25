/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a192f', // Deep Navy Blue
          light: '#112240',
          dark: '#020c1b',
        },
        secondary: {
          DEFAULT: '#64ffda', // Cyan/Teal
          dim: 'rgba(100, 255, 218, 0.1)',
        },
        gold: {
          DEFAULT: '#ffd700', // Gold
          dim: 'rgba(255, 215, 0, 0.1)',
        },
        text: {
          primary: '#ccd6f6',
          secondary: '#8892b0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
