const card = require('../controller/cardController')

var bb = require('bot-brother');
var bot = bb({
  key: process.env.KEY_BOT,
  sessionManager: bb.sessionManager.memory(),
  polling: { interval: 0, timeout: 1 }
});



bot.command('oi')
  .invoke(function (ctx) {
    card.add({name: 'Nu'});
    ctx.data.user = ctx.meta.user;
    console.log('TESTE123')
    return ctx.sendMessage('Oi <%=user.first_name%>. Você está bem?' + ctx.data.user);       
  })
  .answer(function (ctx) {
    console.log(ctx);
    ctx.data.answer = ctx.answer;
    return ctx.sendMessage('OK. I understood. You feel <%=answer%>');
  });
