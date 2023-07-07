/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,vue}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#EDF2F4',
        primary: '#a8dadc',
        secondary: '#c4d1dd',
        text: '#344955',
        cta: '#d48b1d',
        'dark-background': '#232f34',
        'dark-primary': '#a8dadc',
        'dark-secondary': '#344955',
        'dark-text': '#c4d1dd',
        'dark-cta': '#f9aa33',
      },
    },
    plugins: [],
  },
};
