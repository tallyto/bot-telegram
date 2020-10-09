const start = (bot, msg) => {
    bot.sendMessage(msg.chat.id, `
        Olá, eu sou o Program_Amadores BOT.\n\nSou um BOT desenvolvido pelo Tállyto Rodrigues, com a ajuda dos membros do grupo Program Amadores.
    `, {
        reply_markup: {
            inline_keyboard: [[
                {
                    text: 'Cotação',
                    callback_data: 'currency'
                },
                {
                    text: 'Sua Mãe',
                    callback_data: 'suamae'
                },
                {
                    text: 'Seu Pai',
                    callback_data: 'seupai'
                },
                {
                    text: 'Bug',
                    callback_data: 'bug'
                }
            ]]
        }
    })
};

module.exports = start;