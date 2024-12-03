/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'blue-1000': '#272956',
        'blue-1100': '#45476E',
        'blue-1200': '#3C4FFF',
        'blue-1300': '#1F214E',
        'blue-1400': '#6061BC',
        'blue-1500': ' #424392',
        'green-1000': '#1EE2C4',
        'green-1100': '#1ACAAF',
        'green-1200': '#228F93',
        'orange-1000': '#FF9090',
        'orange-1100': '#9E6276',
        'gray-1000': '#525478',
        'gray-1100': '#C9C9D5',
        'black-1100': '#091E4D',
        'shaded-1000': '#8182ca',
      },
      screens: {
        xs: '320px',
        // => @media (min-width: 320px) { ... }

        sm: '576px',
        // => @media (min-width: 575px) { ... }

        md: '744px',
        // => @media (min-width: 768px) { ... }

        lg: '992px',
        // => @media (min-width: 992px) { ... }

        xl: '1200px',
        // => @media (min-width: 1200px) { ... }
        '2xxl': '1320px',
        // => @media (min-width: 1440px) { ... }
        '2xl': '1400px',
        // => @media (min-width: 1440px) { ... }
        '3xl': '1600px',
        // => @media (min-width: 1600px) { ... }
      },
      fontFamily: {
        lato: ["'Playfair Display', 'Lato', sans-serif"],
      },
      boxShadow: {
        '4xl': 'inset 0px -8px 0px #414395',
        '14xl': 'inset 0px -6px 0px #414395',
        '5xl': 'inset 0px -8px 0px #313377',
        '15xl': 'inset 0px -6px 0px #313377',
        '6xl': 'inset 0px -6px 0px #31337B',
        '7xl': 'inset 0px -8px 0px #228F93',
        '17xl': 'inset 0px -6px 0px #228F93',
        '8xl': 'inset 0px -8px 0px #D97878',
        '18xl': 'inset 0px -6px 0px #D97878',
        '9xl': 'inset 0px -8px 0px #895469',
        '19xl': 'inset 0px -6px 0px #895469',
        '10xl': 'inset 0px -8px 0px #17B29B',
        '110xl': 'inset 0px -6px 0px #17B29B',
        '11xl': 'inset 0px -8px 0px #9b9bb1',
        '111xl': 'inset 0px -6px 0px #9b9bb1',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
