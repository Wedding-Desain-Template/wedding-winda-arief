const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/adat-minang/' : '/',
  
  chainWebpack: (config) => {
    // Cek jika aturan 'images' sudah ada
    const imagesRule = config.module.rules.find(rule => rule.test && rule.test.toString().includes('png|jpe?g|gif|svg|webp'));

    if (imagesRule) {
      imagesRule
        .use('file-loader')
        .loader('file-loader')
        .tap((options) => {
          // Menjaga nama asli tanpa hashing dan output di folder img/
          options.name = 'img/[name].[ext]';  
          return options;
        });
    } else {
      // Jika aturan 'images' tidak ditemukan, log error
      console.error('Aturan "images" tidak ditemukan!');
    }
  },
});
