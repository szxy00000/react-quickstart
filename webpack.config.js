
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PrepackWebpackPlugin = require("prepack-webpack-plugin").default;
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const Dashboard = require('webpack-dashboard');
// const DashboardPlugin = require('webpack-dashboard/plugin');
// const dashboard = new Dashboard();

const ROOT_PATH = path.resolve(__dirname);
const NPM_PATH = path.resolve(ROOT_PATH, 'node_modules');
//prepack配置
const configuration = {
  mathRandomSeed: 0
};


module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase : path.resolve(__dirname , 'template'),
    publicPath : '/',
    host : '0.0.0.0',
    port : 8089
  },
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  context: path.resolve(__dirname, 'src'),
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      store: path.resolve(__dirname, "src/store")
    }
  },
  externals: {
    'AMap' : 'AMap',
    'AMapUI': 'AMapUI'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader : 'eslint-loader',
        options: {
          emitWarning: true
        }
      },
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
            name: 'img/[name].[ext]'
          },
        }]
      }
    ]
  },
  plugins: [
    //new PrepackWebpackPlugin(configuration),
    new webpack.DefinePlugin({
      IS_PRODUCTION: JSON.stringify(false),
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

    // enable HMR globally
    new webpack.ProvidePlugin({
        $: 'jquery',
        "setConfig" : path.resolve(
          __dirname,
          "./src/config/devQueueConfig"
        ),
    }),

    // 使用webpack-dashboard，但是输出的信息在item2里，显示容易错乱
    // new DashboardPlugin(dashboard.setData)


    new HtmlWebpackPlugin({
      title: 'nemo',
      filename: 'index.html',
      // 关闭该插件默认的注入css、js，完全由模版控制
      inject: false,
      template: '../template/index.html',
    }),
  ]
};
