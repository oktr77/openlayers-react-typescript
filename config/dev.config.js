const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
  name: 'dev',
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 8000,
    historyApiFallback: true,
  },
});
