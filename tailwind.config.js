const defaultTheme = require('tailwindcss/defaultTheme');
const boxShadow = require('./src/styles/boxShadow');
const colors = require('./src/styles/colors');
const opacity = require('./src/styles/opacity');
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  theme: {
    extend: {
      boxShadow,
      colors,
      opacity,
      screens: {
        xl: '1280px',
        xxl: '1920px'
      },
      spacing: {
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        '14': '3.5rem',
        '128': '32rem',
        '160': '40rem'
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      inset: {
        '1/2': '50%'
      },
      zIndex: {
        '-1': '-1',
        '100': '100',
        '110': '110'
      }
    }
  },
  variants: [
    'responsive',
    'group-hover',
    'group-focus',
    'focus-within',
    'first',
    'last',
    'odd',
    'even',
    'hover',
    'focus',
    'active',
    'visited',
    'disabled'
  ],
  plugins: [
    plugin(function({ addUtilities }){
        const newUtilities = {
            '.safe-top' : {
                paddingTop: 'constant(safe-area-inset-top)',
                paddingTop: 'env(safe-area-inset-top)'
            },
            '.safe-left' : {
                paddingLeft: 'constant(safe-area-inset-left)',
                paddingLeft: 'env(safe-area-inset-left)'
            },
            '.safe-right' : {
                paddingRight: 'constant(safe-area-inset-right)',
                paddingRight: 'env(safe-area-inset-right)'
            },
            '.safe-bottom' : {
                paddingBottom: 'constant(safe-area-inset-bottom)',
                paddingBottom: 'env(safe-area-inset-bottom)'
            }
        }

        addUtilities( newUtilities );
    })
  ],
};
