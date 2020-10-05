const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
const TOKEN = "1293975570:AAGcPDluvdTci1RTqgCt6f37tI4G4BL97BA";
const bot = new TelegramBot(TOKEN, { polling: true });
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

bot.onText(/\/dolar/, (msg) => {
  axios.get("https://economia.awesomeapi.com.br/json/all").then((response) => {
    const { USD } = response.data;
    bot.sendMessage(msg.chat.id, `${USD.name} R$ ${USD.high}`);
  });
});
