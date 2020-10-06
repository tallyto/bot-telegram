const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
const TOKEN = "1293975570:AAGcPDluvdTci1RTqgCt6f37tI4G4BL97BA";
const bot = new TelegramBot(TOKEN, { polling: true });

const getCurrency = require('./src/util/getCurrency');

bot.on("new_chat_members", (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `Olá, ${msg.from.first_name}, bem vindo ao Program amadores HTML!! Conte-nos um pouco sobre você, com que trabalha e onde, se quiser é claro. Saiba que aqui todos somos cansados mas ajudamos quando é preciso, sinta se a vontade.`
  );
});

bot.on("new_chat_photo", (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `${msg.from.first_name} alterou a imagem do grupo!`
  );
});

bot.onText(/\/currency (.+)/, async (msg, match) => {
  const currency = match[1];
  const response = await getCurrency(currency);

  if (currency == 'help'){
    bot.sendMessage(msg.chat.id, `Para verificar a cotação de uma moeda, digite '/currency anyCurrency', onde 'anyCurrency' corresponde à uma moeda.\n\nEssas são as moedas aceitas:\n\nUSD - Dólar Comercial\nUSDT - Dólar Turismo\nCAD - Dólar Canadense\nAUD - Dólar Australiano\nEUR - Euro\nGBP - Libra Esterlina\nARS - Peso Argentino\nJPY - Iene Japonês\nCHF - Franco Suíço\nCNY - Yuan Chinês\nYLS - Novo Shekel Israelense\nBTC - Bitcoin\nLTC - Litecoin\nETH - Ethereum\nXRP - Ripple\n`)
  } else {
    bot.sendMessage(msg.chat.id, response)
  }
})

bot.onText(/\/suamae/, (msg) => {
  bot.sendMessage(msg.chat.id, `aquela safada 😈`);
});

bot.onText(/\/seupai/, (msg) => {
  bot.sendMessage(msg.chat.id, `foi comprar cigarro.`)
})

bot.onText(/\/bug/, (msg) => {
  bot.sendMessage(msg.chat.id, `no meu funciona.`)
})