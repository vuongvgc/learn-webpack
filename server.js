const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require("./webpack.config");
const compiler = webpack(config);
app.use(
  webpackDevMiddleware(compiler, { publicPath: config.output.publicPath })
);
app.listen(2003, function () {
  console.log("app listen  port 2003");
});
