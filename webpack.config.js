
/* global require, process, __dirname */
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const mode = process.env.NODE_ENV
const debug = mode !== 'production'

const getPath = function (...paths) {
  return path.join(__dirname, ...paths)
}

const esmPath = './esm'
const distPath = './dist'

// --------------------------------------------------------------

const webpackConfig = {
  // mode,
  target: 'web',
  entry: {},
  output: {
    path: getPath(distPath),
    libraryTarget: 'umd',
    library: '[name]',
    globalObject: 'this',
    publicPath: '/',
    chunkFilename: '[name].js',
    filename: '[name].js'
  },
  performance: {
    hints: false
  },
  devtool: debug ? '#source-map' : '#cheap-module-source-map',
  plugins: [],
  module: {
    rules: []
  },
  resolve: {
    extensions: ['.js', '.es6', '.jsx', '.json', '.css', '.sass', '.scss', '.png', '.jpg'],
    alias: {
      '@zfowed/utils/dist': getPath(esmPath),
      '@zfowed/utils': getPath()
    }
  }
}

webpackConfig.plugins.push(...[
  new ExtractTextPlugin('css/[name].css')
])

webpackConfig.module.rules.push(...[
  {
    test: /\.(es6|js)?$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['babel-plugin-syntax-dynamic-import']
        }
      }
    ],
    include: getPath(esmPath)
  },
  {
    test: /\.(css|scss|sass)$/,
    use: ExtractTextPlugin.extract({
      use: [{
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      }, {
        loader: 'postcss-loader'
      }, {
        loader: 'sass-loader'
      }]
    })
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      mimetype: 'application/font-woff',
      name: 'font/[hash:32].[ext]'
    }
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
    options: {
      name: 'font/[hash:32].[ext]'
    }
  }
])

// --------------------------------------------------------------

if (debug) {
  webpackConfig.watch = true
} else {
  webpackConfig.plugins.push(...[
    new CleanWebpackPlugin({
      dry: false, // 模拟文件删除
      verbose: true, // 将日志写入控制台
      cleanStaleWebpackAssets: true, // 重建时自动删除所有未使用的webpack资产
      protectWebpackAssets: true, // 不允许删除当前的Webpack资产
      cleanOnceBeforeBuildPatterns: [getPath(distPath)], // 在构建模式之前清洗一次
      cleanAfterEveryBuildPatterns: [], // 在构建模式之后清洗一次
      dangerouslyAllowCleanPatternsOutsideProject: false // 允许在 process.cwd() 之外的干净模式
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new CompressionPlugin()
  ])
}

webpackConfig.plugins.push(...[
  new CopyWebpackPlugin([
    { from: getPath('package.json'), to: getPath(distPath, 'package.json') }
  ])
])

// -------------------------------------------

function getEntry () {
  const moduleEntry = {}

  const files = fs.readdirSync(getPath(esmPath))

  for (const name of files) {
    if (name === 'index.js') continue

    const entryPath = getPath(esmPath, name)

    const stat = fs.statSync(entryPath)

    if (!stat) continue

    // const isFile = stat.isFile()
    const isDirectory = stat.isDirectory()

    const basename = path.basename(entryPath, path.extname(entryPath))
    if (isDirectory) {
      moduleEntry[basename] = entryPath
    }
  }

  return moduleEntry
}

webpackConfig.entry = getEntry()

module.exports = webpackConfig
