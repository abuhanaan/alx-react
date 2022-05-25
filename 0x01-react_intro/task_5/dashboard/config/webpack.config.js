const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve('./dist')
      },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          { 
            test: /\.css$/, 
            use: ["style-loader", "css-loader"] 
          },
        //   { 
        //     test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        //     type: 'asset/resource',
        //   },
        {
            test: /\.(jpg|png)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true,
                  disable: true,
                },
              },
            ],
        },
        {
            test: /\.jsx?$/i,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
        }
        ]
      },
    plugins: [
        new HtmlWebpackPlugin({
        title: "Dashboard",
        }),
    ],
};
