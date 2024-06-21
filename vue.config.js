const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '',
  configureWebpack: {
    name: 'app name',
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
  css: {
    // 全局配置utils.scss
    loaderOptions: {
      less: {
        additionalData: `@import "@/styles/utils.less";`,
      },
    },
  },
}
