var webpack = require('webpack');
var path = require('path');


module.exports = {
  context: __dirname + "/src",
  entry: {
    vendor: ['jquery', 'underscore', 'backbone'],
    'module-a': ['./A.js'],
    'module-b-a': ['./b-A.js'],
    'module-b-b': ['./B-B.js']
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      '_': 'underscore',
      'Backbone': 'backbone'
    })
    , new webpack.optimize.CommonsChunkPlugin({
        name: 'module-b',
        chunks: ['module-b-a', 'module-b-b']
        ,children: false
        ,minChunks: 2
    })
    , new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        chunks: ['module-b', 'module-a']
        ,children: false
        ,minChunks: 2
    })
  ],
  output: {
    path: path.join(__dirname, 'build/static'),
    filename: '[name].js',
    publicPath: path.join(__dirname, 'build/static/')
  }
};
