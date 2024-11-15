const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/adat-minang/' : '/',
  
  chainWebpack: (config) => {
    // Memastikan aturan gambar ada dan menggunakan file-loader
    const imagesRule = config.module.rule('images');
    if (imagesRule.exists) {
      imagesRule
        .use('file-loader')
        .loader('file-loader')
        .tap((options) => {
          options.name = 'img/[name].[ext]';  // Menjaga nama asli tanpa hashing
          return options;
        });
    } else {
      console.error('Rule images tidak ditemukan');
    }
  },
})
