const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: {
    editor: path.join(__dirname, "src/ts/editor.tsx"),
    tracking: path.join(__dirname, "src/ts/tracking.ts"),
  },
  output: {
    path: path.join(__dirname, "public/js"),
    filename: "[name].js",
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          ascii_only: true
        },
      },
    })],
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        exclude: /node_modules/,
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // Creates style nodes from JS strings
          },
          {
            loader: "css-loader" // Translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // Compiles Sass to CSS
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'fluffy.html',
      template: 'src/html/fluffy.html'
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
