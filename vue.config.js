const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = {
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, '../server/public'),
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  devServer: {
    /*proxy: {
      '/api' : {
        target: "http://localhost:5000",
        changeOrigin: true
      },
    }*/
    //proxy: "http://localhost:5000"
    proxy: "https://grumpy-teal-cuff.cyclic.app/"
  }
};