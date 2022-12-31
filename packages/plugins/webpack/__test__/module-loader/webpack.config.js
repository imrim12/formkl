import path from "path";
import { FormklWebpackPlugin } from "../../dist/index.cjs";

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  mode: "production",
  entry: "./__test__/module-loader/app.js",
  experiments: {
    outputModule: true,
  },
  output: {
    filename: "app-bundled.js",
    path: path.resolve("./__test__/module-loader"),
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
