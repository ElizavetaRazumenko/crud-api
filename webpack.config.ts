/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path';
import { Configuration } from 'webpack';
import { devConfig } from './webpack.dev.config';
import { prodConfig } from './webpack.prod.config';

const config = {
  target: 'node',
  entry: './src/server.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
};

export default (env: any, argv: Configuration): Configuration => {
  if (argv.mode === 'development') {
    return {
      ...config,
      ...devConfig,
    };
  }

  if (argv.mode === 'production') {
    return {
      ...config,
      ...prodConfig,
    };
  }

  return config;
};