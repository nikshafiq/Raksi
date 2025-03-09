/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      primary: {
        DEFAULT: "#b5823b",
        '50': '#f9f6ed',
        '100': '#f1e8d0',
        '200': '#e4d1a4',
        '300': '#d4b370',
        '400': '#c69749',
        '500': '#b5823b', // DEFAULT
        '600': '#9d6731',
        '700': '#7e4d2a',
        '800': '#6a4029',
        '900': '#5b3728',
        '950': '#341c14',
      },
    },
    fontSize: {
      lg: ["1.25rem", "1.5rem"],
      base: ["1rem", "1.25rem"],
      sm: ["0.75rem", "1rem"],
      "display-xl": ["8rem", "8.25rem"],
      "display-lg": ["5rem", "5.25rem"],
      "display": ["2.5rem", "2.75rem"],
      "h1": ["2.5rem", "2.75rem"],
      "h2": ["2rem", "2.5rem"],
      "h3": ["1.5rem", "1.75rem"],
    },
    width: {
      0: 0,
      "nav-icon": "1.5rem",
      "call": "3rem",      
      "icon": "3.5rem",
      auto: "auto",
      full: "100%",
      screen: "100vw",
    },
    minWidth: {
      "button" : "200px",
    },
    maxWidth: {
      "button" : "200px",
      "description" : "500px",
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
    },
    height: {
      0: 0,
      "nav-icon": "1.5rem",
      "call": "3rem",      
      "icon": "3.5rem",
      "nav": "5rem",
      "hero-banner": "600px",
      "hero-banner-lg": "700px",
      auto: "auto",
      full: "100%",
      screen: "100vh",
    },
    spacing: {
      0: "0",
      "0.5": "0.5rem",
      "0.75": "0.75rem",
      1: "1rem",
      1.5: "1.5rem",
      2: "2rem",
      3: "3rem",
      4: "4rem",
      5: "5rem",
      "nav": "5rem",
    },
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        philosopher: ['Philosopher', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

