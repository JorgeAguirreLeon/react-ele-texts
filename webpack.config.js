const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./app/App",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: [ 'node_modules' ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings:false}, comments: false, sourceMap: false, magnle: true, minimize: true}),
    new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"production"'}})
  ],
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'babel', exclude: [/node_modules/, /public/] },
      { test: /\.js$/, loader: 'babel', exclude: [/node_modules/, /public/] },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }
};
