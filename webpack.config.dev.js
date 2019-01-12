const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');
const ReplaceTextWebpackPlugin = require('./lib/webpack-replace-text-plugin');
const { getEntryJsHtmlPrj } = require('./utils/helpers');
let [entryJsPath, htmlTemplatePath] = getEntryJsHtmlPrj();
const config = {
  mode: 'development',
  target: 'web',
  entry: [entryJsPath],
  devtool: 'cheap-module-source-map', //with eval, harding the debug
  output: {
    path: path.resolve(__dirname, './'),
    publicPath: '/',
    pathinfo: false,
    filename: '[name].js',
    chunkFilename: '[id].[name].js'
  },
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: 'chrome',
    port: 8080,
    proxy: {
      '/cvms/marketbuzz-survey-service': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/cvms/marketbuzz-survey-service': '' }
      }
    }
  },
  module: {
    rules: [
      { parser: { requireEnsure: false } },
      // { //for affecting the develop progress, it stops
      //   test: /\.(js|mjs|jsx)$/,
      //   enforce: 'pre',
      //   use: [
      //     {
      //       loader: 'eslint-loader'
      //     }
      //   ],
      //   exclude: /node_modules/
      // },
      {
        test: /\.(js|mjs|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                  autoprefixer: {
                    flexbox: 'no-2009',
                    grid: 'autoplace'
                  },
                  stage: 0
                })
              ]
            }
          }
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.mjs', '.web.js', '.js', '.json', '.web.jsx', '.jsx'],
    alias: {
      'react-native': 'react-native-web'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|zh/),
    new StyleLintPlugin({
      configFile: './stylelint.config.js',
      files: './src/*.css'
    }),
    new HtmlWebPackPlugin({
      template: htmlTemplatePath,
      title: 'developing',
      inject: true
    }),
    new ReplaceTextWebpackPlugin({ title: 'JJJ' }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  performance: false
};
module.exports = config;
