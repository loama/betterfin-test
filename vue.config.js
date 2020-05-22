const exec = require('child_process').exec

module.exports = {
  configureWebpack: {
    plugins: [
      {
        apply: (compiler) => {
          compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
            // console.log('2')
            // exec('node copyToElectron.js')
            /* exec('', (err, stdout, stderr) => {
              if (stdout) process.stdout.write(stdout);
              if (stderr) process.stderr.write(stderr);
            }); */
          })
        }
      }
    ]
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? './' // production
    : './'   // development
}
