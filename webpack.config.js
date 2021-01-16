const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ['@babel/polyfill', "./src/indexMain.js"],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.m?js/,
        resolve: {
            fullySpecified: false
        }
    }
         ]
  },
  watchOptions: {
    ignored: /node_modules/
  },
  resolve: { extensions: [".mjs", "*", ".js", ".jsx"],
fallback:{
  "crypto":false,
  "crypto-browserify": false 
} },
devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "public/"),
    publicPath: "/public/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
    watchContentBase: true,
    compress: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};