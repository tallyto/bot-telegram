const getCurrency = require('../util/getCurrency');

// bot.onText(/\/currency (.+)/, 
const currency = async (bot, msg, currency) => {
    const response = await getCurrency(currency.toUpperCase());
  
    if (currency == 'help'){
      bot.sendMessage(msg.chat.id, `Para verificar a cotação de uma moeda, digite '/currency anyCurrency', onde 'anyCurrency' corresponde à uma moeda.\n\nEssas são as moedas aceitas:\n\nUSD - Dólar Comercial\nUSDT - Dólar Turismo\nCAD - Dólar Canadense\nAUD - Dólar Australiano\nEUR - Euro\nGBP - Libra Esterlina\nARS - Peso Argentino\nJPY - Iene Japonês\nCHF - Franco Suíço\nCNY - Yuan Chinês\nYLS - Novo Shekel Israelense\nBTC - Bitcoin\nLTC - Litecoin\nETH - Ethereum\nXRP - Ripple\n`)
    } else {
      bot.sendMessage(msg.chat.id, response)
    }
}

module.exports = currency