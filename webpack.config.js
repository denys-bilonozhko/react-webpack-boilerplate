const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 3000,
    watchContentBase: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new miniCssExtractPlugin(),
  ],
};
