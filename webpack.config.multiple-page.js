var webpack = require('webpack');
var webpackConfig = require('./webpack.config.single-page');
var path = require('path');
var rimraf = require('rimraf');

var buildOutputPath = path.join(__dirname, 'build/multiple-page');
rimraf.sync(buildOutputPath);

webpackConfig.entry = {
  'vendor': ['jquery', 'underscore', 'backbone'],
  'page-a': ['Page/A.js'],
  'page-b-a': ['Page/B-A.js'],
  'page-b-b': ['Page/B-B.js']
};

webpackConfig.output = {
  path: buildOutputPath,
  filename: '[name].js',
  publicPath: path.join(buildOutputPath, '/')
};

webpackConfig.plugins = [
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
    name: 'vendor',
    chunks: ['page-a', 'page-b']
  })
];

module.exports = webpackConfig;
