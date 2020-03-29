module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#003037',
        secondary: '#173F44',
        tertiary: '#437784'
      }
      // screens: {
      //   sm: '640px',
      //   md: '768px',
      //   lg: '1024px',
      //   xl: '1280px',
      //   dark: { raw: '(prefers-color-scheme: dark)' },
      //   light: { raw: '(prefers-color-scheme: light)' }
      // },
      // colors: {
      //   licorice: '#101010',
      //   night: '#141414',
      //   light: '#fcfcfc',
      //   charcoal: '#545454',
      //   black: '#000000',
      //   white: '#FFFFFF'
      // },
      // fontFamily: {
      //   display: ['Playfair Display', 'serif']
      // },
      // fontSize: {
      //   '7xl': '5rem',
      //   huge: '10rem'
      // },
      // boxShadow: {
      //   '3xl-light': '0 35px 60px -15px rgba(0, 0, 0, .3)',
      //   '3xl-dark': '0 35px 60px -15px rgba(0, 0, 0, 1)'
      // }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
};
