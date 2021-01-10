import TelegramBot from 'node-telegram-bot-api';

export function suaMae(bot: TelegramBot, msg: TelegramBot.Message): void {
  bot.sendMessage(msg.chat.id, 'aquela safada 😈');
}

export function seuPai(bot: TelegramBot, msg: TelegramBot.Message) : void {
  bot.sendMessage(msg.chat.id, 'foi comprar cigarro 🚬');
}

export function bug(bot: TelegramBot, msg: TelegramBot.Message) : void {
  bot.sendMessage(msg.chat.id, 'no meu funciona 🤷🏻‍♂️');
}
