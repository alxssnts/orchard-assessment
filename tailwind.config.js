/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '4rem'
    },
    extend: {},
    colors: theme => ({
      ...theme.colors,
      main: '#0E1414'
    }),
    fontFamily: theme =>  ({
      'sans': ['OpenSans', ...defaultTheme.fontFamily.sans],
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

