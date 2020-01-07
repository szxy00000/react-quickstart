// 腾讯地图 API key
//  DE2BZ-YSBRF-GPHJ4-JJ7RZ-CNAD3-33F5C

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const NPM_PATH = path.resolve(ROOT_PATH, 'node_modules');

module.exports = {
  entry: {
    "react-app": ["babel-polyfill", "./index.jsx"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle-[chunkhash].js"
  },
  context: path.resolve(__dirname, "src"),
  resolve: {
    extensions: [".js", ".json", ".jsx"],
    alias: {
      common: path.resolve(__dirname, "src/common"),
      component: path.resolve(__dirname, "src/component"),
      config: path.resolve(__dirname, "src/config"),
      page: path.resolve(__dirname, "src/page"),
      static: path.resolve(__dirname, "src/static"),
      store: path.resolve(__dirname, "src/store"),
      pure: path.resolve(__dirname, "src/pure")
    }
  },
  externals: {
    AMap: "AMap",
    AMapUI: "AMapUI"
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loader: "eslint-loader",
        options: {
          emitWarning: true
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(jpg|png|gif|ttf|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "img/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_PRODUCTION: JSON.stringify(true)
    }),
    // 生成最后的html文件（渲染模版的方式）
    // 这样可以带过去文件的hash值，也方便迭代管理
    new HtmlWebpackPlugin({
      title: "NEMO",
      filename: "index.html",
      // 关闭该插件默认的注入css、js，完全由模版控制
      inject: false,
      template: "../template/index.html"
    })
  ]
};
