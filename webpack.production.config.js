// 腾讯地图 API key
//  DE2BZ-YSBRF-GPHJ4-JJ7RZ-CNAD3-33F5C

const path = require('path');
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const NPM_PATH = path.resolve(ROOT_PATH, 'node_modules');

module.exports = {
  entry: {
    'duse-eye-app': './index.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle-[chunkhash].js'
  },
  context: path.resolve(__dirname, 'src'),
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  externals: {
    'AMap' : 'AMap',
    'AMapUI': 'AMapUI',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: 'babel-loader'
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }, {
        test: /\.(jpg|png|gif|ttf|otf)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'static/img/[name].[ext]',
          },
        }]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_PRODUCTION: JSON.stringify(true),
    }),

    // react的公共模块
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      filename: 'vendor.js',
      minChunks: ({resource}) => {
          resource &&
          resource.indexOf('node_modules') &&
          resource.match(/\.js$/)
      }
    }),

    // 每个文件里默认引入jquery
    new webpack.ProvidePlugin({
      $: 'jquery',
      setConfig : path.resolve(
        __dirname,
        "./src/config/proQueueConfig"
      ),
    }),

    // 压缩输出的js
    new webpack.optimize.UglifyJsPlugin({
      // mangle: {
      //   toplevel: true
      // },
      // compress: {
      //   passes: 4
      // }
    }),

    // 生成最后的html文件（渲染模版的方式）
    // 这样可以带过去文件的hash值，也方便迭代管理
    new HtmlWebpackPlugin({
      title: 'DUSE-EYE',
      filename: 'index.html',
      // 关闭该插件默认的注入css、js，完全由模版控制
      inject: false,
      template: '../dDist/index.html',
    }),
  ]
};
