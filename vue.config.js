process.env.VUE_APP_MOBILE = process.env.VUE_APP_BUILD == 'mobile' ? true : false;

module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  }
};
