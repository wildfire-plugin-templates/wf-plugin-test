require('./check-versions')()

const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('./config').build
const pluginCfg = require('./wpcfg.plugin')
const PACKAGE_NAME = process.env.PACKAGE_NAME

const build = (list) => {
  if (list.length === 0) { return }
  const { name, config } = list.shift()
  spinner = ora(chalk.green(`Building "${name}"...`))
  spinner.start()
  webpack(config, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red(`  Failed to build "${name}".\n`))
      process.exit(1)
    }

    console.log(chalk.cyan(`  "${name}" built!\n`))
    build(list)
  })
}

let spinner
console.log(chalk.blue(`Start to build 「${PACKAGE_NAME}」...`))
rm(config.assetsRoot, err => {
  if (err) throw err
  build([
    {
      name: PACKAGE_NAME,
      config: pluginCfg
    }
  ])
})
