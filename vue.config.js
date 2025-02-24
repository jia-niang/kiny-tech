const path = require('path')

module.exports = {
  publicPath: 'https://cdn.paperplane.cc/paperplane-kiny/',

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/css/vars.less')],
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.resolve(__dirname, './src/assets/img'),
        '@css': path.resolve(__dirname, './src/assets/css'),
      },
    },
  },
}
