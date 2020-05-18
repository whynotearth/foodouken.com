const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const postcssNested = require('postcss-nested');
const postcssPurgecss = require('@fullhuman/postcss-purgecss');
const pxtorem = require('postcss-pxtorem');

const purgecss = postcssPurgecss({
  content: ['./public/**/*.html', './src/**/*.vue'],
  defaultExtractor: content => {
    const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
    return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
  },
  whitelistPatterns: [
    /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!cursor-move).+-move$/,
    /^router-link(|-exact)-active$/
  ]
});

// https://www.npmjs.com/package/postcss-pxtorem
var pxtoremOptions = {
  replace: false,
  rootValue: 16
};

module.exports = {
  plugins: [tailwindcss, postcssNested, pxtorem(pxtoremOptions), autoprefixer]
  // , ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
};
