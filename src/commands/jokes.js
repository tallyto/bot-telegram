const suamae = (bot, msg) => {
    bot.sendMessage(msg.chat.id, 'aquela safada 😈')
}

const seupai = (bot, msg) => {
    bot.sendMessage(msg.chat.id, 'foi comprar cigarro 🚬')
}

module.exports = { suamae, seupai }