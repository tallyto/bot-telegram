const start = (bot, msg) => {
    bot.sendMessage(msg.chat.id, `Saudações humanos.\n\nSou um bot e fui desenvolvido pelo Tállyto com a ajuda dos membros do grupo Program Amadores com o objetivo de dominar o mundo!`, {
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