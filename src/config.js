export default {
  base: {
    path: {
      baseDir: '',
      src: 'src',
      dist: 'app',
      config: 'raty.config.js',
      entry: 'bin/server.js'
    },
    server: '127.0.0.1',
    port: 2017,
    env: 'production',
    middlewares: [

    ]
  },
  development: {

  },
  production: {}
}
