import cepPromisse from 'cep-promise';
import TelegramBot from 'node-telegram-bot-api';

export default async function cep(bot: TelegramBot, msg: TelegramBot.Message, match: string) {
  try {
    const response = await cepPromisse(match);
    const {
      street, neighborhood, city, state,
    } = response;

    bot.sendMessage(msg.chat.id, `${street}, ${neighborhood},  ${city} - ${state}`);
  } catch (error) {
    bot.sendMessage(msg.chat.id, 'cep não encontrado');
  }
}
