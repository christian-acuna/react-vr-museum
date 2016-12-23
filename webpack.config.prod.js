var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [

    './client/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '\'production\''
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    },
    // CSS
    {
        test: /\.css?$/,
        exclude: /node_modules/,
        loaders: ['style', 'css'] // same as "style-loader!css-loader"
      }
    ]
  }
};
