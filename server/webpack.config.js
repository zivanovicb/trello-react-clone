const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

module.exports = {
  entry: './app.js',
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
            presets: ['env','react']
          }
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
// module.exports = {
//   context: PATHS.server,
//   entry: {
//     server: './app.js',
//   },
//   target: 'node',
//   output: {
//     filename: '[name].bundle.js',
//     path: PATHS.build,
//   },
//
//   // keep node_module paths out of the bundle
//   externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
//     'react-dom/server'
//   ]).reduce((ext, mod) => {
//     ext[mod] = 'commonjs2 '+ mod;
//     return ext;
//   }, {}),
//
//   node: {
//     __filename: false,
//     __dirname: false
//   },
//
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         include: [
//           PATHS.app,
//           PATHS.server,
//         ],
//         loader: 'babel-loader',
//         options: {
//           // TODO: remove 'es2015'
//           presets: ['react', 'es2015', 'stage-2'],
//         },
//       },
//       // why 'locals'? see https://github.com/webpack/css-loader#local-scope
//       {
//         test: /\.css$/,
//         include: [
//           PATHS.app,
//         ],
//         loader: 'css-loader/locals?modules',
//       },
//     ],
//   },
// };
