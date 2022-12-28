const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = {
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, '../server/public'),
  pluginOptions: {
  },
  devServer: {
    proxy: "http://localhost:5000"
  }
};