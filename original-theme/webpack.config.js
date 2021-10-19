const MODE = process.env.NODE_ENV;

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isSourceMap = (MODE === 'development');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,
  entry: {
    "index": "./src/index.js",
  },
  output: {
    path: `${__dirname}/public/build`,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: true, // CSS内のurl()メソッドを取り込む
              sourceMap: isSourceMap, // ソースマップの利用
              importLoaders: 2 // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isSourceMap,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isSourceMap
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
};
