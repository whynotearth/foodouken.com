const defaultTheme = require('tailwindcss/defaultTheme');
const customUtils = require('./src/assets/styles/tailwind-utilities');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#437784',
        secondary: '#173F44',
        button: '#0E9EC2',
        background: '#003037',
        footer: '#437784',
        inactive: '#8BABB3',
        tag: '#074A51',
        logo: '#002b31',
        error: '#ED4A2B'
      },
      screens: {
        xl: '1280px',
        xxl: '1920px'
      },
      spacing: {
        '0.5': '0.125rem',
        '1.5': '0.375rem'
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      opacity: {
        '12': '.12',
        '25': '.25',
        '38': '.38',
        '54': '.54'
      },
      inset: {
        '1/2': '50%'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    borderWidth: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [...customUtils]
};
