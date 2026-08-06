/** @type {import('tailwindcss').Config} */
const settingsScreens = require('./tailwind.settings.screens')
const settingsFontSizes = require('./tailwind.settings.fontSizes')

module.exports = {
  content: [
    './app/**/*.{vue,js,ts}',
    './assets/**/*.css',
    './components/**/*.{vue,js,ts}',
    './composables/**/*.{js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './server/**/*.{js,ts}',
    './*.{vue,js,ts}',
  ],
  theme: {
    screens: settingsScreens,
    fontSize: settingsFontSizes,
    extend: {
      fontFamily: {
        allrox: ['Allrox', 'Aeonik', 'system-ui', 'sans-serif'],
        sans: ['Aeonik', 'system-ui', 'sans-serif'],
      },
      colors: {
        grey: {
          25: '#fcfcfd',
          50: '#f9fafb',
          100: '#f2f4f7',
          200: '#eaecf0',
          300: '#d0d5dd',
          400: '#98a2b3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1d2939',
          900: '#101828',
        },
      },
    },
  },
  plugins: [],
}
