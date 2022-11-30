const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://test-yuchocopie.vercel.app',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  )
}