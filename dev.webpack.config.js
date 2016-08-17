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
    new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"not_production"'}})
  ],
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'babel', exclude: [/node_modules/, /public/] },
      { test: /\.js$/, loader: 'babel', exclude: [/node_modules/, /public/] },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }
};
