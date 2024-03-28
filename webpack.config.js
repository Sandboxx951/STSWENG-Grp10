const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const yaml = require('yamljs');

module.exports = {
  mode: 'development',
  entry: {
    signup: './src/scripts/signup.js',
    login: './src/scripts/login.js',
    home: './src/scripts/home.js',
    plans: './src/scripts/plans.js'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'signup.html',
      title: 'Sign up',
      template: './src/pages/signup.html',
      chunks: ['signup'],
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      title: 'Log in',
      template: './src/pages/login.html',
      chunks: ['login'],
    }),
    new HtmlWebpackPlugin({
      filename: 'home.html',
      title: 'Home',
      template: './src/pages/home.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      filename: 'plans.html',
      title: 'Plans',
      template: './src/pages/plans.html',
      chunks: ['plans'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  module: {
    rules: [
        {
          test: /\.css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.yaml$/i,
          type: 'json',
          parser: {
            parse: yaml.parse,
          }
        },
        {
          test: /\.js$/i,
          use: ['babel-loader'],
          exclude: /node_nodules/
        }
    ],
  },
};