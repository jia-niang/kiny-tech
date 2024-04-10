const path = require('path')
const S3Plugin = require('webpack-s3-plugin')

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

    plugins: [
      new S3Plugin({
        exclude: /.*\.html$/,
        basePath: 'paperplane-kiny',
        s3Options: {
          accessKeyId: process.env.COS_SECRET_ID,
          secretAccessKey: process.env.COS_SECRET_KEY,
          region: 'ap-hongkong',
          endpoint: 'https://cos.ap-hongkong.myqcloud.com',
          apiVersion: '2006-03-01',
        },
        s3UploadOptions: {
          Bucket: 'paperplane-cdn-1253277322',
        },
      }),
    ],
  },
}
