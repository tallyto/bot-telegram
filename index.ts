import TelegramBot from 'node-telegram-bot-api';
import cep from './src/commands/cep';
import { bug, seuPai, suaMae } from './src/commands/jokes';
import start from './src/commands/start';

const TOKEN = '1293975570:AAGcPDluvdTci1RTqgCt6f37tI4G4BL97BA';
const bot: TelegramBot = new TelegramBot(TOKEN, { polling: true });

const currency = require('./src/commands/currency.ts');

bot.onText(/\/cep (.*)/, (msg, match) => cep(bot, msg, match![1]));
bot.onText(/\/currency (.+)/, (msg, match) => currency(bot, msg, match![1]));
bot.onText(/\/start/, (msg) => start(bot, msg));

/**
 * Jokes
 */
bot.onText(/\/suamae/, (msg) => suaMae(bot, msg));
bot.onText(/\/seupai/, (msg) => seuPai(bot, msg));
bot.onText(/\/bug/, (msg) => bug(bot, msg));

bot.on('new_chat_members', (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `Olá, ${msg.from!.first_name}, bem vindo ao ProgrAmadores HTML!! Conte-nos um pouco sobre você, com que trabalha e onde, se quiser é claro. Saiba que aqui todos somos cansados mas ajudamos quando é preciso, sinta se a vontade.`,
  );
});

bot.on('new_chat_photo', (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `${msg.from!.first_name} alterou a imagem do grupo!`,
  );
});
