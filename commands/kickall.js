const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let KReason = args.join(" ").slice(0);
    if (!KReason) return message.reply(":name_badge: | Pune motivul pentru care vrei să dai kick la toti ")
    if (message.author.id != 349235268890656780) return message.reply(":name_badge:  | Nu poți folosi această comandă, doar developer-ul meu o poate folosi.")

    let C = message.channel;
    message.guild.members.forEach((f, i) => {
        if (f.id == 349235268890656780) return message.reply(":name_badge: | Nu îmi pot da afara developer-ul!");
        message.guild.member(f).kick(KReason);
        message.channel.send(`Kicked ${f}!`);
    });
    C.send("✔️ | Am dat kick tuturor");
}
module.exports.help = {
    name: "kickall"
}
