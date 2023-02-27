const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap:false,
  // 关闭ESLINT校验工具
  lintOnSave: false,
  //代理跨域
  devServer: {
    proxy: {
      '/api': {
        // target： 'http://39.98.123.211',
        target: 'http://localhost:8080',
        pathRewrite: {'^/api': ''}
      }
    }
  }
})
