const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/adat-minang/' : '/',
  
  chainWebpack: (config) => {
    // Memastikan kita mengakses aturan 'images' dengan cara yang benar
    const imagesRule = config.module.rule('images');

    if (imagesRule) {
      imagesRule
        .use('file-loader')
        .loader('file-loader')
        .tap((options) => {
          options.name = 'img/[name].[ext]';  // Menjaga nama file gambar tetap sama
          return options;
        });
    } else {
      // Jika aturan 'images' tidak ditemukan
      console.error('Aturan "images" tidak ditemukan!');
    }
  },
});
