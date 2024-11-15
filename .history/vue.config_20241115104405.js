const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/adat-minang/' : '/',

  chainWebpack: config => {
    // Memastikan gambar tidak menggunakan hashing
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg|webp)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'img/[name].[ext]'  // Menjaga nama file gambar tetap sama
      })
  }
})
