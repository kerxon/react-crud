const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          presets: ['es2015','stage-0','react']
        }
      }
    ]
  }
}
