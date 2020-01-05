const card = require('../controller/cardController')

var bb = require('bot-brother');
var bot = bb({
  key: process.env.KEY_BOT,
  sessionManager: bb.sessionManager.memory(),
  polling: { interval: 0, timeout: 1 }
});

bot.command('cadastrar').invoke(function (ctx) {
  return ctx.sendMessage('Escolha uma opção abaixo <%=user.first_name%>!')
}).keyboard([  
  [{':money_with_wings: Cadastrar conta': {go: 'page3'}}],
  [{':credit_card: cadastrar cartão': {go: 'conta'}}]
])

bot.command('conta')
  .invoke(function (ctx) {    
    ctx.data.user = ctx.meta.user;
    return ctx.sendMessage('Muito bem <%=user.first_name%>. Agora digite o nome do cartão?');       
  })
  .answer(function (ctx) {
    ctx.data.answer = ctx.answer;
    try {
      card.add({Name: ctx.answer});
      return ctx.sendMessage('OK. O cartão <%=answer%> foi cadastrado');
    } catch (error) {
      return ctx.sendMessage('Infelizmente seu cartão não pode ser cadastrado');
    }    
  });
