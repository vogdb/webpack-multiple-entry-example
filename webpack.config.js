var webpack = require('webpack');
var path = require('path');
var rimraf = require('rimraf');

var buildOutputPath = path.join(__dirname, 'build/static');
rimraf.sync(buildOutputPath);


module.exports = {
  context: __dirname + "/src",
  entry: {
    'vendor': ['jquery', 'underscore', 'backbone'],
    'page-clicks': ['Page/clicks.js'],
    'page-a': ['Page/A.js'],
    'page-b-a': ['Page/B-A.js'],
    'page-b-b': ['Page/B-B.js']
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
      chunks: ['page-b-a', 'page-b-b']

    })
    , new webpack.optimize.CommonsChunkPlugin({
      name: 'page-module',
      chunks: ['page-b', 'page-a']
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
