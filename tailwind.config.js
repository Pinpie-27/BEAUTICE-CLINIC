/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        mediumSmall: ['1rem', '1.25rem'],
        small: ['0.875rem', '1.3125rem'],
        base: ['1rem', '1.5rem'], //font size 1rem with line height 1.5rem
        mudiumBase: ['1rem', '1.25rem'],
        mediumBase1: ['1.125rem', '1.40625rem'],
        large: ['3rem', '3.75rem'],
        mediumLarge: ['2.25rem', '2.8125rem'],
        fontH3Footer: ['1.125rem', '1.6875rem']
      },
      colors:{
        mediumBlue: '#414880',
        darkGray: '#8B8B8B',
        darkPink: '#FF64AE',
        white: '#FFFFFF',
        darkBlue: '#091156',
        mediumWhite: '#EEEEEE',
        hoverWhite: '#F6F7FF',
        borderButton: '#D9DDFE',
        placeHolder: '#C5C5C5',
        textFooter: '#D7DBFF',
      },
      borderRadius:{
        xl: '3.125rem',
        smallXl: '2.625rem',
        xs: '0.9375rem',
      },
      letterSpacing:{
        tight: '0.1rem',
        tighter: '.0875rem',
      }
    },
  },
  plugins: [],
}

