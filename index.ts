import TelegramBot from 'node-telegram-bot-api'
const TOKEN = "1293975570:AAGcPDluvdTci1RTqgCt6f37tI4G4BL97BA";
const bot = new TelegramBot(TOKEN, { polling: true });
import cep from './src/commands/cep'

const currency = require('./src/commands/currency');
const start = require('./src/commands/start');
const { suamae, seupai, bug } = require('./src/commands/jokes');

bot.on('callback_query', (callbackQuery) => {
  switch (callbackQuery.data){
    case 'currency':
      currency(bot, callbackQuery.message, 'help');
      break;
    
    case 'seupai':
      seupai(bot, callbackQuery.message);
      break;

    case 'suamae':
      suamae(bot, callbackQuery.message);
      break;

    case 'bug':
      bug(bot, callbackQuery.message);
      break;
  }
})
bot.onText(/\/cep (.*)/, (msg, match)=>  cep(bot, msg, match![1]))
bot.onText(/\/currency (.+)/, (msg, match) => currency(bot, msg, match![1]));
bot.onText(/\/start/, (msg) => start(bot, msg));

/**
 * Jokes
 */
bot.onText(/\/suamae/, (msg) => suamae(bot, msg))
bot.onText(/\/seupai/, (msg) => seupai(bot, msg))
bot.onText(/\/bug/, (msg) => bug(bot, msg))

bot.on("new_chat_members", (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `Olá, ${msg.from!.first_name}, bem vindo ao ProgrAmadores HTML!! Conte-nos um pouco sobre você, com que trabalha e onde, se quiser é claro. Saiba que aqui todos somos cansados mas ajudamos quando é preciso, sinta se a vontade.`
  );
});

bot.on("new_chat_photo", (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `${msg.from!.first_name} alterou a imagem do grupo!`
  );
});