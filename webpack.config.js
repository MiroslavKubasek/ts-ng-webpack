var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    app1: "./build/javascript/app1-entry.js",
    app2: "./build/javascript/app2-entry.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: 'http://localhost:8080/dist/',
    //publicPath: 'dist/',
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.png$/, loader: "file-loader" },
      { test: /\.woff$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf$/, loader: "file-loader" },
      { test: /\.eot$/, loader: "file-loader" },
      { test: /\.svg$/, loader: "file-loader" },
      { test: /\.html$/, loader: "ng-cache?prefix=[dir]" }
    ]
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".coffee"],
    modulesDirectories: ['bower_components', 'node_modules']
  },
  cache: true,
  plugins: [
    new webpack.ProvidePlugin({}),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ]
};
