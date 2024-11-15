const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/adat-minang/' : '/',
  
  chainWebpack: config => {
    // Menangani gambar raster (misalnya .jpg, .png, .gif)
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|bmp)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '../assets/img/[name].[ext]', // Menyimpan gambar raster dalam folder img
      });

    // Menangani gambar vektor (misalnya .svg)
    // config.module
    //   .rule('vectors')
    //   .test(/\.(png|jpe?g|gif|bmp)$/)
    //   .use('file-loader')
    //   .loader('file-loader')
    //   .options({
    //     name: 'assets/vectors/[name].[ext]', // Menyimpan gambar vektor dalam folder vectors
    //   });
  },
});
