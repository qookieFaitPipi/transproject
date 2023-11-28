const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const production = process.env.NODE_ENV == 'production';

module.exports = {
  entry: {
    filename: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: production ? '[name].[contenthash].js' : '[name].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /node_modules/,
        use: [
          production ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: !production,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !production,
            }
          }
        ]
      },
      {
        test: /\.png|svg|jpg|jpeg|gif$/i,
        type: 'asset/resource'
      },
      {
        test: /\.pdf$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.*', '.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack & react",
      template: './src/index.html',
      favicon: './public/logo.svg'
    }),
    new MiniCssExtractPlugin({
      filename: production ? '[name].[contenthash].css' : '[name].css',
    })
  ],
  devServer: {
    port: 9000,
    hot: true,
  },
  mode: production ? 'production' : 'development'
}