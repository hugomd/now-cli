const chalk = require('chalk')

// the equivalent of <code>, for embedding a cmd
// eg: Please run ${cmd(woot)}

module.exports = cmd => (
  `${chalk.gray('`')}${chalk.cyan(cmd)}${chalk.gray('`')}`
)
