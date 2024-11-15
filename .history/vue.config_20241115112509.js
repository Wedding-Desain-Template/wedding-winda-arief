const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/adat-minang/' : '/',
  
  chainWebpack: config => {
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|bmp|svg)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'img/[name].[ext]', // Memastikan gambar berada di folder img dengan nama asli
      });
  },
});
