const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/adat-minang/' : '/',

  chainWebpack: (config) => {
    // Mengakses aturan gambar dengan benar menggunakan get
    const imagesRule = config.module.rule('images');

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
      console.error('Rule images tidak ditemukan');
    }
  },
})
