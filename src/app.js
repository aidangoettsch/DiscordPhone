const Eris = require('eris')
const fs = require('fs')
const path = require('path')

const config = JSON.parse(fs.readFileSync(path.join('cfg', 'config.json')))
const bot = new Eris.CommandClient(config.bot.token, {}, {
  description: 'A bot that is a phonar.',
  owner: 'yayes2',
  prefix: config.behavior.commands.prefix
})

bot.on('ready', () => {
  console.info('Bot is ready')
  bot.editSelf({
    avatar: config.bot.avatar
  })
  bot.editStatus('online', {
    name: 'Call 240-654-1592'
  })
})

bot.connect()