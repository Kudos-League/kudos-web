const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const webpack = require("webpack");

module.exports = async function (env, argv) {
  const mode = argv.mode || "none";
  const config = await createExpoWebpackConfigAsync({ ...env, mode }, argv);

  if (!config.resolve.plugins) {
    config.resolve.plugins = [];
  }

  config.resolve.plugins.push(new TsconfigPathsPlugin());

  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer/"),
    vm: false,
  };

  config.resolve.alias = {
    ...config.resolve.alias,
    "react-native": "react-native-web",
  };

  config.plugins.push(
    new webpack.IgnorePlugin({
      resourceRegExp: /@stripe\/stripe-react-native/,
    })
  );

  config.output = {
    ...config.output,
    publicPath: "/kudos-web/",
  };

  return config;
};
