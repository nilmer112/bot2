const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("**Informatii despre bot** : ")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField(":pencil: | Numele bot-ului : ", bot.user.username)
    .addField(":pencil: | Creat pe data de :", bot.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
