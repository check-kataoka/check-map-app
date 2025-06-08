/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D7362F',          // 基本赤
        'primary-dark': '#b52c25',   // hover 用
        'primary-press': '#a1221b',  // active 用
        secondary: '#FDF5ED',
        textMain: '#2B2B2B',
      },
      fontFamily: {
        impact: ['Impact', 'sans-serif'], // ← 追加
      },
    },
  },
  plugins: [],
};
