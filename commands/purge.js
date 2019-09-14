module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Scuze dar n-ai acces la comanda.')
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send('N-am acces la **Manage Messages** mm tai de idiot.');

    if (!args[0]) return message.channel.send('Te rog pune o sumă validă de mesaje ');
    if (args[0] < 1) return message.channel.send('Te rog pune un numar mai mare de 1.');
    if (args[0] > 100) return message.channel.send('Te rog pune un numar mai mic de 100.');
    if (isNaN(args[0])) return message.channel.send('Te rog pune un număr corect.');

    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`🗑️ | Am sters **${args[0]}** mesaje.`).then(message => message.delete(3000));
    }).catch().catch((e) => message.channel.send('🗑️ | Nu poți șterge mesaje de 14 zile.'));

}

module.exports.help = {
    name: "purge",
    category: "moderation"
}
