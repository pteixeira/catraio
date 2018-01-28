const path = require("path");
const Webpack = require("webpack");

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
      },
    },
  },
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
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins: [
    new Webpack.optimize.CommonsChunkPlugin({name: "vendors", filename: "vendors.js"}),
    new Webpack.ProvidePlugin({"fetch": "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"})
  ],
  module: {
    rules: [
      { enforce: "pre", test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader" },
      { test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot-loader", "babel-loader"] },
      { test: /\.css/, loader: "style-loader!css-loader!autoprefixer-loader" },
      { test: /\.styl$/, loader: "style-loader!css-loader!autoprefixer-loader!stylus-loader" },
      { test: /\.(jpg|png)$/, loader: "url-loader" },
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.(woff2?|eot|ttf|svg)$/, loader: "file-loader" }
    ]
  },
  resolve: {
    alias: {
      "app-root": path.join(__dirname, "src"),
      "app-assets": path.join(__dirname, "src", "assets"),
      "app-components": path.join(__dirname, "src", "components"),
    }
  }
};
