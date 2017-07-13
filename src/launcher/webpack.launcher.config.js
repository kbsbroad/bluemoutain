const path = require('path')
const merge = require('webpack-merge');
const baseWebpackConfig = require('../../build/webpack.base.config')

module.exports = merge(baseWebpackConfig, {
  target: 'electron-renderer',
  entry: {
    launcher: path.resolve(__dirname, './src/index.ts')
  }
})
