// @ts-ignore
import path from 'path';
// @ts-ignore
import webpack from 'webpack';

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const packageInfo = require('./package.json');

// @ts-ignore
const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    filename: 'hmc-' + packageInfo.version + '.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Hmc',
    libraryTarget: 'umd',
  },
  resolve: { extensions: ['.ts', '.js'] },
  optimization: {
    minimize: true,
    usedExports: true,
    sideEffects: true,
    minimizer: [new UglifyJsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: { allowTsInNodeModules: true },
          },
        ],
      },
    ],
  },
  plugins: [],
};

export default config;
