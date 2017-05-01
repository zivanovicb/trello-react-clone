const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

module.exports = {
  entry: './bin/www',
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  node: {
    fs: 'empty',
    net: 'empty',
    child_process: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'babel-preset-stage-0',
              'babel-preset-env',
              'babel-preset-react'].map(require.resolve),
            plugins: [
              require('babel-plugin-transform-class-properties'),
              require('babel-plugin-transform-react-jsx')
            ]
          },
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  }
}
