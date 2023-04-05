/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#1d3557',
        primary: '#a8dadc',
        secondary: '#457b9d',
        text: '#f1faee',
        cta: '#e63946',
      },
    },
  },
};
