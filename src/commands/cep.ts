import cepPromisse from 'cep-promise';

export default async function cep(bot: any, msg: any, match: any) {
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
