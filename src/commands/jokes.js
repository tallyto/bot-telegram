const suamae = (bot, msg) => {
  bot.sendMessage(msg.chat.id, 'aquela safada 😈');
};

const seupai = (bot, msg) => {
  bot.sendMessage(msg.chat.id, 'foi comprar cigarro 🚬');
};

const bug = (bot, msg) => {
  bot.sendMessage(msg.chat.id, 'no meu funciona 🤷🏻‍♂️');
};

module.exports = { suamae, seupai, bug };
