var webpack = require('webpack');
var path = require('path');
var rimraf = require('rimraf');

var buildOutputPath = path.join(__dirname, 'build/static');
rimraf.sync(buildOutputPath);


module.exports = {
  context: __dirname + "/src",
  entry: {
    vendor: ['jquery', 'underscore', 'backbone'],
    'page-a': ['Page/A.js'],
    'page-b-a': ['Page/B-A.js'],
    'page-b-b': ['Page/B-B.js']
  },
  resolve: {
    modulesDirectories: ['vendor', 'src', 'node_modules']
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
        ,children: false
        ,minChunks: 2
    })
    , new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        chunks: ['page-b', 'page-a']
        ,children: false
        ,minChunks: 2
    })
  ],
  output: {
    path: buildOutputPath,
    filename: '[name].js',
    publicPath: path.join(__dirname, 'build/static/')
  }
};
