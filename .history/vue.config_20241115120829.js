const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/adat-minang/' : '/',
  
  chainWebpack: config => {
    // Menangani gambar raster (misalnya .jpg, .png, .gif) dengan hash untuk cache busting
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|bmp)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/img/[name].[hash:8].[ext]', // Menyertakan hash hanya untuk gambar dalam folder img
      });

    // Menangani gambar vektor atau jenis lainnya tanpa hash (misalnya .svg)
    config.module
      .rule('vectors')
      .test(/\.png$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/vectors/[name].[ext]', // Menyimpan gambar vektor dengan nama asli tanpa hash
      });
  },
});
