const {RichEmbed} = require("discord.js");
exports.run = async (client, message, args, level) => {
if (message.author.id == "349235268890656780") {
var nameResult = args.join(' ');
if (!nameResult) nameResult = null;
client.user.setActivity(nameResult, {type: "WATCHING"});
let embed = new RichEmbed()
.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
.setDescription(`${nameResult} se joaca cv nou, bv lui.`)
message.channel.send(embed)
} else {
  let embed2 = new RichEmbed()
  .setTitle("Numa sefu meu are acces la asta .")
  message.channel.send(embed2)
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "setgame",
  category: "Owner",
  description: "Sets new bot game in watching form",
  usage: "setgame"
};