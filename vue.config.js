const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'styles': path.resolve('./src/styles')
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hollys/'
    : '/'
}