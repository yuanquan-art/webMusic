module.exports = {
    // webpack-dev-server 相关配置
    devServer: {
        proxy: {
            '/api': {
                target: 'http://118.31.12.203:8081',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
                }
            }
        }
    },
}