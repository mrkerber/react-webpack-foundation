const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

//command to start webpack: npx webpack

module.exports = function(_env, argv) {
  const isProduction = argv.mode === "production";
  const isDevelopment = !isProduction;

  return{
    devtool: isDevelopment && "cheap-module-source-map",
    entry: './src/index.jsx',
    mode: 'none',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: isProduction ? "production" : "development"
            }
          }
        }
      ]
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: "/"
    },
    resolve: {
      extensions: [".js", ".jsx"]
    }
    watch: true,
    watchOptions:{
      aggregateTimeout: 200,
      poll: 1000
    }
  }
}
