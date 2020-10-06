const axios = require('axios');
const currencyAPI = 'https://economia.awesomeapi.com.br/json/all';

const getCurrency = async (currency) => {
    const currencys = ['USD', 'USDT', 'CAD', 'AUD', 'EUR', 'GBP', 'ARS', 'JPY', 'CHF', 'CNY', 'YLS', 'JPY', 'CHF', 'BTC', 'LTC', 'ETH', 'XRP']
    const options = {
        style: 'currency',
        currency: 'BRL'
    }

    if(currencys.includes(currency)) {
        const response = await axios.get(`${currencyAPI}/${currency}-BRL`)
        const { high, name } = response.data.USD

        return `${name} - ${Number(high).toLocaleString('pt-BR', options)}` 
    }

    return 'Comando inválido. Para saber os comandos válidos, digite:\n\n/currency help'

}

module.exports = getCurrency