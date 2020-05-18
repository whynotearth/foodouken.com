// https://www.tailwindcss.cn/docs/plugins/
// https://web-crunch.com/posts/how-to-extend-tailwind-css

const plugin = require('tailwindcss/plugin');

const customUtils = plugin(function({ addUtilities, theme }) {
  const textUtils = {
    // DEPRECATED:
    // ----------------------------
    '.h1-mobile': {
      fontSize: theme('fontSize.3xl'),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: '38px'
    },
    '.display-4': {
      fontSize: theme('fontSize.7xl'),
      fontWeight: theme('fontWeight.normal'),
      lineHeight: '112px'
      // color: 'rgba(0,0,0,0.87)'
    },
    '.display-3': {
      fontSize: theme('fontSize.6xl'),
      fontWeight: theme('fontWeight.semibold'),
      lineHeight: '48px'
      // color: 'rgba(0,0,0,0.87)'
    },
    '.display-2': {
      fontSize: theme('fontSize.5xl'),
      fontWeight: theme('fontWeight.normal'),
      lineHeight: '40px'
      // color: 'rgba(0,0,0,0.87)'
    },
    '.display-1': {
      fontSize: theme('fontSize.xl'),
      fontWeight: theme('fontWeight.semibold'),
      lineHeight: '40px'
      // color: 'rgba(0,0,0,0.87)'
    },

    '.headline': {
      fontSize: theme('fontSize.3xl'),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: '38px'
      // color: 'rgba(0,0,0,0.87)'
    },
    '.title': {
      fontSize: theme('fontSize.xl'),
      fontWeight: theme('fontWeight.semibold'),
      lineHeight: '26px'
      // color: 'rgba(0,0,0,0.87)'
    },
    '.subheader': {
      fontSize: theme('fontSize.xl'),
      fontWeight: theme('fontWeight.medium'),
      lineHeight: '25px'
      // color: 'rgba(0,0,0,0.87)'
    },
    '.body-2': {
      fontSize: theme('fontSize.xl'),
      fontWeight: theme('fontWeight.medium'),
      lineHeight: '24px'
      // color: 'rgba(0,0,0,0.87)'
    },
    '.body-1-mobile': {
      fontSize: theme('fontSize.base'),
      fontWeight: theme('fontWeight.normal'),
      lineHeight: '20px'
    },
    '.body-1': {
      fontSize: theme('fontSize.xl'),
      fontWeight: theme('fontWeight.normal'),
      lineHeight: '20px'
      // color: 'rgba(0,0,0,0.87)'
    },
    '.h2-mobile': {
      fontSize: theme('fontSize.xl'),
      fontWeight: theme('fontWeight.semibold'),
      lineHeight: theme('lineHeight.11')
    },
    '.caption': {
      fontSize: theme('fontSize.xl'),
      fontWeight: theme('fontWeight.normal'),
      lineHeight: '16px'
      // color: 'rgba(0,0,0,0.54)'
    },
    '.label-mobile': {
      fontWeight: theme('fontWeight.medium'),
      fontSize: theme('fontSize.sm'),
      textTransform: 'uppercase'
    }
  };

  const backgroundUtils = {
    // custom rgba background colors
    '.bg-secondary-012': {
      backgroundColor: `${hexToRGBA(theme('colors.secondary'), 0.12)}`
    },
    '.bg-brand-gradient': {
      background: `radial-gradient(50% 49.2% at 0% 0.8%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${theme(
        'colors.primary'
      )}`
    },
    '.bg-brand-light-blue-gradient': {
      background: 'linear-gradient(90deg, #0374F9 0%, #03B3F9 100%)'
    }
  };

  const scrollbarUtils = {
    '.narrow-scrollbars::-webkit-scrollbar': {
      width: '6px'
    },
    '.narrow-scrollbars::-webkit-scrollbar-track': {
      background: '#ddd'
    },
    '.narrow-scrollbars::-webkit-scrollbar-thumb': {
      background: '#666'
    }
  };

  addUtilities(textUtils, {
    variants: ['responsive']
  });
  addUtilities(backgroundUtils);
  addUtilities(scrollbarUtils);
});

module.exports = [customUtils];

// convert hex to rgba
function hexToRGBA(hex, alpha) {
  if (hex.length === 4) {
    throw new Error(hex + ' <=== dont use 3 digit hex colors');
  }
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}
