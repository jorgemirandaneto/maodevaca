const port = process.env.PORT || 3000
const express = require('express');
const server = express();

var bb = require('bot-brother');
var bot = bb({
  key: '1067672898:AAEjorGizWrVYskfznYdtYwDAqyhiT6G25Y',
  sessionManager: bb.sessionManager.memory(),
  polling: { interval: 0, timeout: 1 }
});


server.listen(port, function(){
    console.log(`Aplicacao rodando na porta ${port}`)
})

bot.command('oi')
.invoke(function (ctx) {
  // Setting data, data is used in text message templates.
  ctx.data.user = ctx.meta.user;
  // Invoke callback must return promise.
  return ctx.sendMessage('Oi <%=user.first_name%>. Você está bem?');
})
.answer(function (ctx) {
    console.log(ctx);
    ctx.data.answer = ctx.answer;
  // Returns promise.
  return ctx.sendMessage('OK. I understood. You feel <%=answer%>');
})
;

// bot.on('text', (msg) => {
//     console.log(msg)
//     if (msg.text.toUpperCase() === 'oi'.toUpperCase()){
//         bot.sendMessage(msg.chat.id, `Olá ${msg.from.first_name}, Seja bem vinda ao seu novo controlador de cartão, estamos em construção para melhor atender.`)

//     }else{
//         bot.sendMessage(msg.chat.id, `${msg.from.first_name}, Ainda não reconheço esse comando, mas estou em contrução para responder melhor.`)
//     }  
// })
