const TelegramBot = require( `node-telegram-bot-api` )

const TOKEN = `1067672898:AAEjorGizWrVYskfznYdtYwDAqyhiT6G25Y`

const bot = new TelegramBot( TOKEN, { polling: true } )

bot.on('new_chat_members', (msg) => {
    console.log(msg)
 })

