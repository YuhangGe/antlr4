var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: {
    "antlr": "./index.js",
    "antlr.min": "./index.js",
  },
  devtool: 'source-map',
  output: {
  	libraryTarget: "var",
  	library: 'Antlr',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  node: {
  	fs: 'empty'
  },
  plugins: [
  	new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
  		sourceMap: true
  	})
  ]
};
