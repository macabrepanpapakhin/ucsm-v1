const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  watch: true,
};

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/searchperson.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "searchpersonbundle.js",
  },
  watch: true,
};
module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/calendar.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "academiccalendarbundle.js",
  },
  watch: true,
};
