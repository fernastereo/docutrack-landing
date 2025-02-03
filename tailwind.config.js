/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        100: '#75e69e',
        200: '#4ade80',
        300: '#26cf64',
      },
      base: {
        100: '#ffffff',
        200: '#c9c9c9',
        300: '#2a2a2a',
        400: '#111111',
      },
    },
    extend: {},
  },
  plugins: [],
};


