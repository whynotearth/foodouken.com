module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#003037',
        secondary: '#173F44',
        button: '#0E9EC2',
        footer: '#437784'
      },
      screens: {
        xl: '1280px',
        xxl: '1920px'
      },
      spacing: {
        '0.5': '0.125rem',
        '1.5': '0.375rem'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
};
