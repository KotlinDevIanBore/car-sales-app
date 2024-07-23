
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/env', '@babel/preset-react'] },
        }
      },
      {
        test: /\.scss$/, // Add rule for SCSS files
        use: [
          'style-loader',  // Injects styles into DOM
          'css-loader',    // Translates CSS into CommonJS
          'sass-loader'    // Compiles Sass to CSS
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',  // Injects styles into DOM
          'css-loader',    // Translates CSS into CommonJS
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};

module.exports = webpackConfig;
