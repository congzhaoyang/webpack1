const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// var px2rem = require('postcss-px2rem')

module.exports = {
  entry: {
    app: './src/index.js',
    style: './src/style.scss'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'Output Management'
    // })
    new ExtractTextPlugin("css/[name].css"),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new UglifyJsPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          // use: ['style-loader', "css-loader", 'postcss-loader', 'resolve-url-loader']
          use: ['style-loader', "css-loader", 'postcss-loader']
        }),
        // use: [
        //     {
        //         loader: 'style-loader',
        //     },
        //     {
        //         loader: 'css-loader',
        //         options: {
        //             importLoaders: 1,
        //         }
        //     },
        //     {
        //         loader: 'postcss-loader'
        //     }
        // ]
      },
      // {
      //   test: /\.css|\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //       fallback: 'style-loader',
      //       use: ['css-loader', 'sass-loader', 'resolve-url-loader'],
      //   })
      // },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [{
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "postcss-loader"
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.js$/,
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
};