const card = require('../controller/cardController')

var bb = require('bot-brother');
var bot = bb({
  key: process.env.KEY_BOT,
  sessionManager: bb.sessionManager.memory(),
  polling: { interval: 0, timeout: 1 }
});


var Card = {
  Nome,
  key_user,
  Limit
}


bot.command('start')
  .invoke(function (ctx) {
    ctx.data.user = ctx.meta.user;
    return ctx.sendMessage('Olá <%=user.first_name%>.Você tem os seguinte comandos \n /cadastrar \n /conta \n Obs: o comando cadastrar te da a opção de cadastrar tanto uma nova conta do seu cartão e o conta vai direto para cadastramento do valor caso já tenha um cartão cadastrado');
  })


bot.command('cadastrar').invoke(function (ctx) {
  ctx.data.user = ctx.meta.user;
  return ctx.sendMessage('<%=user.first_name%> selecione uma opção a baixo.')
}).keyboard([
  [{ ':money_with_wings: Cadastrar conta': { go: 'page3' } }],
  [{ ':credit_card: Cadastrar cartão': { go: 'conta' } }]
])

bot.command('conta')
  .invoke(function (ctx) {
    ctx.data.user = ctx.meta.user;
    return ctx.sendMessage('Muito bem <%=user.first_name%>. Agora digite o nome do cartão?');
  })
  .answer(function (ctx) {
    ctx.data.answer = ctx.answer;
    try {
      Card.Nome = ctx.answer;
      return ctx.sendMessage('OK. O cartão <%=answer%> foi cadastrado');
    } catch (error) {
      return ctx.sendMessage('Infelizmente seu cartão não pode ser cadastrado');
    }
  });
