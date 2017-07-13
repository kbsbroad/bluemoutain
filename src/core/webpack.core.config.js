const path = require('path')
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('../../build/webpack.base.config')

module.exports = merge(baseWebpackConfig, {
  target: 'electron-main',
  entry: {
    core: path.resolve(__dirname, './src/index.tsx')
  },
  plugins: [new HtmlWebpackPlugin()]
})
