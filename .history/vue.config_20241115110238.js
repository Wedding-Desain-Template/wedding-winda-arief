const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/adat-minang/' : '/',

  chainWebpack: (config) => {
    // Mengubah pengaturan output filename untuk gambar agar tidak dihash
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => {
        options.name = '/src/assets/img/[name].[ext]';  // Menyimpan nama asli tanpa hashing
        return options;
      });
  },
})
