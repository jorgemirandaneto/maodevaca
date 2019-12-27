const port = process.env.PORT || 3000
const express = require('express');
const server = express();

var bb = require('bot-brother');
var bot = bb({
  key: process.env.KEY_BOT,
  sessionManager: bb.sessionManager.memory(),
  polling: { interval: 0, timeout: 1 }
});


server.listen(port, function () {
  console.log(`Aplicacao rodando na porta ${port}`)
})

bot.command('oi')
  .invoke(function (ctx) {
    ctx.data.user = ctx.meta.user;
    return ctx.sendMessage('Oi <%=user.first_name%>. Você está bem?');
  })
  .answer(function (ctx) {
    console.log(ctx);
    ctx.data.answer = ctx.answer;
    return ctx.sendMessage('OK. I understood. You feel <%=answer%>');
  });

