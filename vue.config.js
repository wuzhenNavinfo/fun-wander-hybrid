module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5757/weapp',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
      }
    }
  }
}