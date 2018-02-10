const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    popup: "./src/popup/main.js",
    options: "./src/options/main.js",
    tab: "./src/tab/main.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist/js"),
    publicPath: "/dist/js/",
    filename: "[name].build.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.sass$/,
        use: ["vue-style-loader", "css-loader", "sass-loader?indentedSyntax"]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            scss: ["vue-style-loader", "css-loader", "sass-loader"],
            sass: [
              "vue-style-loader",
              "css-loader",
              "sass-loader?indentedSyntax"
            ],
            options: {
              includePaths: [path.resolve("/node_modules")]
            }
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.common.js"
    }
  },
  resolve: {
    alias: {
      styles: path.resolve(__dirname, "./src/sass/")
    }
  },
  performance: {
    hints: false
  },
  devtool: "#eval-source-map"
};
