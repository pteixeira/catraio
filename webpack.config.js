var path = require("path");
var Webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/main.js",
    vendors: [
      "classnames",
      "lodash",
      "moment",
      "react",
      "react-dom"
    ]
  },
  output: {
    path: "./build",
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins: [
    new Webpack.optimize.CommonsChunkPlugin("vendors", "vendors.js")
  ],
  module: {
    preLoaders: [
      // { test: /\.js$/, exclude: /node_modules/, loader: "eslint" }
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "react-hot!babel" }
    ]
  }
};
