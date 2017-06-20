var path = require('path')
var fs = require('fs')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var nodeModules = {}

// consider using webpack-node-externals
fs.readdirSync('./functionsES6/node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1
  })
  .forEach(function(module) {
    nodeModules[module] = 'commonjs ' + module
  })

module.exports = {
  entry: './functionsES6/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'functions'),
    libraryTarget: 'this',
  },
  target: 'node',
  externals: nodeModules,
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'functionsES6/package.json' },
    ]),
  ]
}