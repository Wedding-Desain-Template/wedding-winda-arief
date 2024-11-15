const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/adat-minang/' : '/',
  
  chainWebpack: (config) => {
    // Gunakan file-loader untuk gambar agar nama tetap sama
    config.module
      .rule('images')
      .use('file-loader')  // Pastikan ini menggunakan file-loader, bukan url-loader
      .loader('file-loader')
      .tap((options) => {
        options.name = 'img/[name].[ext]';  // Menyimpan nama asli tanpa hashing
        return options;
      });
  },
})
