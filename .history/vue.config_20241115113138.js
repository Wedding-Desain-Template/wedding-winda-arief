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
        name: 'src/assets/img/[name].[ext]', // Pastikan gambar tetap menggunakan nama asli
      });
  },
});
