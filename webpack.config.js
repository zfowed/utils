
/* global require, process, __dirname */
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const mode = process.env.NODE_ENV
const debug = mode !== 'production'

const getPath = function (...paths) {
  return path.join(__dirname, ...paths)
}

const webpackConfig = {
  mode,
  entry: {},
  output: {
    path: getPath('dist'),
    libraryTarget: 'umd',
    library: '[name]',
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
      '@zfowed/utils': getPath('entry')
    }
  }
}

webpackConfig.plugins.push(...[
  new CleanWebpackPlugin([getPath('/dist')]),
  new ExtractTextPlugin('css/[name].css'),
  new CopyWebpackPlugin([{
    from: getPath('entry/*/README.md'),
    to: getPath('/dist/doc/[1].md'),
    toType: 'template',
    test: /([^/]+)\/README\.md$/
  }])
])

if (debug) {
  // webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
} else {
  webpackConfig.plugins.push(...[
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new CompressionPlugin()
  ])
}

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
    include: getPath('/entry')
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

function addEntry (name) {
  const entryPath = getPath('entry', name, `index.js`)
  const exists = fs.existsSync(entryPath)

  if (!exists) return

  const stat = fs.statSync(entryPath)

  if (!stat) return

  const isFile = stat.isFile()

  if (!isFile) return

  webpackConfig.entry[name] = entryPath
}

const files = fs.readdirSync(getPath('entry'))

for (const name of files) {
  addEntry(name)
}

module.exports = webpackConfig
