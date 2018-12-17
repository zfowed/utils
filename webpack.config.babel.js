
/* global require, process, __dirname */
import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import CleanWebpackPlugin from 'clean-webpack-plugin'
// import CopyWebpackPlugin from 'copy-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'

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
  new ExtractTextPlugin('css/[name].css')
  // new CopyWebpackPlugin([{
  //   from: getPath('entry/*/README.md'),
  //   to: getPath('/dist/doc/[1].md'),
  //   toType: 'template',
  //   test: /([^/]+)\/README\.md$/
  // }])
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
    exclude: [/node_modules/, getPath('/src/library/')],
    include: getPath('/src')
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

addEntry('asynDebounce')
addEntry('debounce')
addEntry('Storage')

export default webpackConfig
