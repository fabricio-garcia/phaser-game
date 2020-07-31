const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|jpg|gif|json|xml|ico|svg|wav|ogg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:10].[ext]',
            outputPath: 'assets',
          },
        },
      },
    ],
  },
};
