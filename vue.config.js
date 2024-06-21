const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },

  css: {
    loaderOptions: {
      //全局配置utils.scss,详细配置参考vue-cli官网
      sass: {
        additionalData: '@import "@/styles/utils.scss";',
      },
    },
  },
}
