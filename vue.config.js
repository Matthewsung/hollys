const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'styles': path.resolve('./src/styles')
      }
    }
  },
  publicPath: '/hollys'
}