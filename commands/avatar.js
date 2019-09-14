const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

 let aUser = message.mentions.users.first() || message.author;
    var embed = new Discord.RichEmbed()
    .setAuthor(`${aUser.tag}`, aUser.avatarURL)
    .setImage(`${aUser.avatarURL}?size=1028`)
    .setFooter(`Avatar cerut de ${message.author.username}`)
    .setColor("#36393e")
    .setDescription(`[**Vizioneaza-l**](${aUser.avatarURL})`)

    message.channel.send({embed})
}

module.exports.info = {

    // Set the command name.
    name: 'avatar'

}
