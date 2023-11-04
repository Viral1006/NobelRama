const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://api.nobelprize.org/v1',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // remove /api from the request path
      },
    })
  );
};