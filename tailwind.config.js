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
          DEFAULT: '#0a0a0a', // Black/Dark Gray (CSI/Forensic)
          light: '#1a1a1a',   // Slightly lighter for cards/sections
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#525252', // Stealth (Monochrome)
          dim: 'rgba(82, 82, 82, 0.1)',
        },
        gold: {
          DEFAULT: '#fcd34d', // Gold Accents
          dim: 'rgba(252, 211, 77, 0.1)',
        },
        background: {
          DEFAULT: '#0a0a0a', // Dark Background
          paper: '#1a1a1a',
        },
        text: {
          primary: '#e0e0e0', // Light Gray (Main text)
          secondary: '#a0a0a0', // Dimmer gray
          light: '#ffffff', // Pure white
          dim: '#666666',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
