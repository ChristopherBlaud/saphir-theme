const path = require("path");
const HubSpotAutoUploadPlugin = require("@hubspot/webpack-cms-plugins/HubSpotAutoUploadPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = ({ portal, autoupload }) => ({
  mode: "production",

  entry:  [
    "./src/js/main.js"
  ],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    clean: true
  },

  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        exclude: /_[\w]+\.css$/
      })
    ],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
          name: '[name].[ext]'
        },
      },
    ],
  },

  plugins: [
    new HubSpotAutoUploadPlugin({
      portal,
      autoupload,
      src: "dist",
      dest: "saphir",
    }),

    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/css/hubl-css', to: 'css/hubl-css' },
        { from: 'src/css/lib', to: 'css/lib' },
        { from: 'src/js/lib', to: 'js/lib' },
        { from: 'src/js/utils', to: 'js/utils' },
        { from: "src/images", to: "images" },
        { from: "src/templates", to: "templates" },
        { from: "src/layouts", to: "layouts" },
        { from: "src/macros", to: "macros" },
        { from: "src/sections", to: "sections" },
        { from: "src/modules", to: "modules" },
        { from: "src/theme.json", to: "theme.json" },
        { from: "src/fields.json", to: "fields.json" },
      ],
    }),
  ],
});
