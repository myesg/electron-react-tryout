var path = require('path')
var webpack = require('webpack')
console.log(__dirname)
module.exports = {
  //devtool: 'eval',
  context : __dirname,
  node :{
          __dirname : false,
          __filename : true
  },
  entry:'./app/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    loaders: [{
          test: /\.jsx?$/,
          loader: 'babel-loader',
          query: { presets: ['es2015', 'react'] }
        }]
  },
  target : 'electron-renderer'
}
