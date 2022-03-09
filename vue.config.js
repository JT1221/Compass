module.exports = {
  devServer: {
    port:3500
  },
  configureWebpack: config=>{
    config.resolve.alias = Object.assign(config.resolve.alias, {
      'assets': '@/assets',
      'components': '@/components',
      'views': '@/views',
      'config': '@/config',
      'mixins': '@/mixins',
      'actions': '@/actions',
      'store': '@/store',
      'images': '@/assets/images'
    })
  },
  configureWebpack: {
    //关闭 webpack 的性能提示
    performance: {
      hints:false
    },

    //或者

    //警告 webpack 的性能提示
    performance: {
      hints:'warning',
      //入口起点的最大体积
      maxEntrypointSize: 5000000000,
      //生成文件的最大体积
      maxAssetSize: 3000000000,
      //只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js');
      }
    }
  }

}