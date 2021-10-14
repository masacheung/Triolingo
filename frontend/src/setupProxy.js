const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/apitesting", {
      target: "https://api.dictionaryapi.dev/api/v2/entries/",
      secure: false,
      changeOrigin: true
    })
  )
}