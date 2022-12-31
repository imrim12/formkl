import path from "path";
import { FormklWebpackPlugin } from "../../dist/index.cjs";

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  mode: "production",
  entry: "./__test__/syntax-loader/syntax.form",
  experiments: {
    outputModule: true,
  },
  output: {
    filename: "loaded-syntax.js",
    path: path.resolve("./__test__/syntax-loader"),
    library: {
      type: "module",
    },
  },
  plugins: [
    new FormklWebpackPlugin({
      dts: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.form$/,
        use: ["@formkl/plugin-webpack"],
      },
    ],
  },
};

export default config;
