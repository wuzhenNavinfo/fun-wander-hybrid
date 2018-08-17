module.exports = {
    outputDir: 'widget', // apicloud指定的目录
    // assetsDir: 'static', // 静态文件目录
    devServer: {
        // 解决跨域问题，代理服务接口请求
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
};
