const { createProxyMiddleware: proxy } = require("http-proxy-middleware"); //需要安装中间件

module.exports = function (app) {
  app.use(
    proxy("/api", {
      target: "http://localhost:8081",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    }),
    proxy("/images", {
      target: "http://images.cx.com/",
      changeOrigin: true,
      pathRewrite: { "^/images": "" },
    }),
    proxy("/user/images", {
      target: "http://images.cx.com/",
      changeOrigin: true,
      pathRewrite: { "^/user/images": "" },
    })
  );
};
