
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//prepack配置
const configuration = {
  mathRandomSeed: 0
};


module.exports = {
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "template"),
    publicPath: "/",
    host: "0.0.0.0",
    port: 8089
  },
  entry: ["babel-polyfill", "./index.jsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
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
    //new PrepackWebpackPlugin(configuration),
    new webpack.DefinePlugin({
      IS_PRODUCTION: JSON.stringify(false)
    }),

    // enable HMR globally
    new webpack.ProvidePlugin({
      $: "jquery",
      setConfig: path.resolve(__dirname, "./src/config/devQueueConfig")
    }),

    // 使用webpack-dashboard，但是输出的信息在item2里，显示容易错乱
    // new DashboardPlugin(dashboard.setData)

    new HtmlWebpackPlugin({
      title: "nemo",
      filename: "index.html",
      // 关闭该插件默认的注入css、js，完全由模版控制
      inject: false,
      template: "../template/index.html"
    })
  ]
};
