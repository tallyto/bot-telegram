const start = (bot, msg) => {
    bot.sendMessage(msg.chat.id, `
        Olá, eu sou o Program_Amadores BOT.\n\nSou um BOT desenvolvido pelo Tállyto Rodrigues, com a ajuda dos membros do grupo Program Amadores.\n\nEssas são as minhas funções:
    `)
};

module.exports = start;