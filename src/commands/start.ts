import TelegramBot from 'node-telegram-bot-api';

export default function start(bot: TelegramBot, msg: TelegramBot.Message) {
  bot.sendMessage(msg.chat.id, 'Saudações humanos.\n\nSou um bot e fui desenvolvido pelo Tállyto com a ajuda dos membros do grupo Program Amadores com o objetivo de dominar o mundo!');
}
