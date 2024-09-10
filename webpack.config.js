const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/public/index.js', // JavaScript entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean dist folder on each build
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'], // To bundle HTML files
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Source HTML file
    }),
  ],
  mode: 'production', // Or 'development' depending on your environment
};
