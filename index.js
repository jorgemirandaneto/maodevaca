const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '1067672898:AAEjorGizWrVYskfznYdtYwDAqyhiT6G25Y'
const bot = new TelegramBot(TOKEN, { polling: true })

bot.on('text', (msg) => {
    console.log(msg)
    if (msg.text.toUpperCase() === 'oi'.toUpperCase()){
        bot.sendMessage(msg.chat.id, `Olá ${msg.from.first_name}, Seja bem vinda ao seu novo controlador de cartão, estamos em construção para melhor atender.`)

    }else{
        bot.sendMessage(msg.chat.id, `${msg.from.first_name}, Ainda não reconheço esse comando, mas estou em contrução para responder melhor.`)
    }  
})
