const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/adat-minang/' : '/',
  
  chainWebpack: config => {
    // Menangani gambar raster (misalnya .jpg, .png, .gif) dengan hash untuk cache busting
    config.module
      .rule('images')
      .test(/\.(|jpe?g|gif|bmp)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/img/[name].[ext]', // Menyertakan hash hanya untuk gambar dalam folder img
      })
  }
})
