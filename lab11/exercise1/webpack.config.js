const webpack = require('webpack');

module.exports = {
    entry: {
      app: './js/app.js',
    },
    output: {
      filename: '[name].js',
      path: __dirname + '/js/bundle/'
    }
  };