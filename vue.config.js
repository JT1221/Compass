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
}