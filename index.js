const TelegramBot = require("node-telegram-bot-api");
const TOKEN = "1293975570:AAGcPDluvdTci1RTqgCt6f37tI4G4BL97BA";
const bot = new TelegramBot(TOKEN, { polling: true });

/**
 * Commands
 */
const currency = require('./src/commands/currency');
const start = require('./src/commands/start');
const { suamae, seupai } = require('./src/commands/jokes');

bot.onText(/\/currency (.+)/, (msg, match) => currency(bot, msg, match));
bot.onText(/\/start/, (msg) => start(bot, msg));

/**
 * Jokes
 */
bot.onText(/\/suamae/, (msg) => suamae(bot, msg))
bot.onText(/\/seupai/, (msg) => seupai(bot, msg))

bot.on("new_chat_members", (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `Olá, ${msg.from.first_name}, bem vindo ao ProgrAmadores HTML!! Conte-nos um pouco sobre você, com que trabalha e onde, se quiser é claro. Saiba que aqui todos somos cansados mas ajudamos quando é preciso, sinta se a vontade.`
  );
});

bot.on("new_chat_photo", (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `${msg.from.first_name} alterou a imagem do grupo!`
  );
});