/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'gray': {
        50: '#eaeaea',
        100: '#bebebf',
        200: '#9e9ea0',
        300: '#727275',
        400: '#56565a',
        500: '#2c2c31',
        600: '#28282d',
        700: '#1f1f23',
        800: '#18181b',
        900: '#121215',
      },
      'blue': {
        50: '#c7edfa',
        100: '#a1e1f7',
        200: '#7cd6f4',
        300: '#42c4f0',
        400: '#1db9ed',
        500: '#0f91bd',
        600: '#0c7497',
        700: '#08495e',
        800: '#052b38',
        900: '#041b25',

      },
      'orange': {
        50: '#ffe6d6',
        100: '#ffcdad',
        200: '#ffb485',
        300: '#ff9a5c',
        400: '#ff8133',
        500: '#ff680a',
        600: '#cc4e00',
        700: '#b84600',
        800: '#7a2f00',
        900: '#521f00',

      },
      'red': {
        300: '#f0736a',
        500: '#e92e20',
        700: '#a71b11',
      }
    },
    fontFamily: {
      sans: ["Montserrat", "Inter", "sans-serif"],
      body: ["Montserrat"],
    },
    extend: {},
  },
  plugins: [],
}

