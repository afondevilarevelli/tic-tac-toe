import type IForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import path from "path";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CopyWebpackPlugin = require("copy-webpack-plugin");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: "webpack-infrastructure",
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, "src/renderer", "assets"),
        to: path.resolve(__dirname, ".webpack/renderer", "assets"),
      },
    ],
  }),
];
