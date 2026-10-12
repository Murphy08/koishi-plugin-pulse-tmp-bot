const { Logger } = require('koishi')

const globalKey = '__pulseTmpBotLogger'

if (!globalThis[globalKey]) {
  globalThis[globalKey] = new Logger('pulse-tmp-bot')
}

if (!globalThis.logger) {
  globalThis.logger = globalThis[globalKey]
}

module.exports = globalThis[globalKey]
