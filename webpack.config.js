var webpack = require('webpack');
var path = require('path');
var rimraf = require('rimraf');

var buildOutputPath = path.join(__dirname, 'build/static');
rimraf.sync(buildOutputPath);


module.exports = {
  context: __dirname + "/src",
  entry: {
    'vendor': ['jquery', 'underscore', 'backbone'],
    'page-clicks': ['Page/clicks.js']
  },
  resolve: {
    modulesDirectories: ['vendor', 'src/js', 'src/styles', 'node_modules']
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      '_': 'underscore',
      'Backbone': 'backbone'
    })
    , new webpack.optimize.CommonsChunkPlugin({
      name: 'page-b',
      chunks: ['Page/B-A', 'Page/B-B']

    })
    , new webpack.optimize.CommonsChunkPlugin({
      name: 'page-module',
      chunks: ['page-b', 'Page/A']
    })
    , new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['page-clicks', 'page-module']
    })
  ],
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      }
    ]
  },
  output: {
    path: buildOutputPath,
    filename: '[name].js',
    publicPath: path.join(__dirname, 'build/static/')
  }
};
