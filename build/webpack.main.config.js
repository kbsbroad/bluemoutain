const path = require('path')
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config')

module.exports = merge(baseWebpackConfig, {
  target: 'electron-main',
  entry: {
    main: path.resolve(__dirname, '../src/main/index.ts')
  }
})
