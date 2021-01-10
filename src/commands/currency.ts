const getCurrency = require('../util/getCurrency');

const currency = async (bot: any, msg: any, currency: any) => {
  const response = await getCurrency(currency.toUpperCase());
  const options = {
    parse_mode: 'HTML',
  };

  if (currency === 'help') {
    bot.sendMessage(msg.chat.id, 'Para verificar a cotação de uma moeda, digite\ <pre language="js">/currency anyCurrency</pre>, onde <pre language="js">anyCurrency</pre> corresponde à uma moeda.\n\nEssas são as moedas aceitas:\n\n<b>USD</b> - Dólar Comercial\n<b>USDT</b> - Dólar Turismo\n<b>CAD</b> - Dólar Canadense\n<b>AUD</b> - Dólar Australiano\n<b>EUR</b> - Euro\n<b>GBP</b> - Liba Esterlina\n<b>ARS</b> - Peso Argentino\n<b>JPY</b> - Iene Japonês\n<b>CHF</b> - Franco Suíço\n<b>CNY</b> - Yuan Chinês\n<b>YLS</b> - Novo Shekel Israelense\n<b>BTC</b> - Bitcoin\n<b>LTC</b> - Litecoin\n<b>ETH</b> - Ethereum\n<b>XRP</b> - Ripple\n', options);
  } else {
    bot.sendMessage(msg.chat.id, response);
  }
};

module.exports = currency;
