const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2F1B5D',
        'primary-hover': '#0291D0',
        secondary: '#14142B',
        'gray-light': '#F7F7FC',
        border: '#EFF0F6',
        muted: '#A0A3BD',
      },
      screens: {
        xl: '1140px',
        '2xl': '1140px',
      },
      fontFamily: {
        gip: ['GIP', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
