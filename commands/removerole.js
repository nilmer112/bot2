// Remove Role

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Scz, nu poti face asa cv.");
  if(args[0] == "help"){
    message.reply("Foloseste: !removerole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("N-am putut sa-l gasesc pe asta");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specifica un rol corditule");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("N-am gasit rolu asta, sigur egzista?.");

  if(!rMember.roles.has(gRole.id)) return message.reply("Astia nau rolu ala.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`Ai piedut gradul ${gRole.name}`)
  }catch(e){
    message.channel.send(`RIP <@${rMember.id}>ai avut si ${gRole.name}, re.`)
  }
}

module.exports.help = {
  name: "removerole"
}