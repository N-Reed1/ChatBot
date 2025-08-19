const path = require('path');

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: {
      main: path.resolve(__dirname, "./src/main/index.js"),
      preload: path.resolve(__dirname, "./src/main/preload.js"),
    },
  // Put your normal webpack config below here
  module: {
    rules: require('./webpack.rules'),
  }, 
};
