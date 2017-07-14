const path = require('path')
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
  target: 'electron-renderer',
  entry: {
    renderer: path.resolve(__dirname, '../src/renderer/index.tsx')
  },
  plugins: [new HtmlWebpackPlugin()]
})
