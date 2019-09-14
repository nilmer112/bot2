// addRole
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("❌ Scuze sefule, nu ai acces la asa cv.");
  if(args[0] == "help"){
    message.reply("Foloseste: =addrole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Nu pot sal gasesc pe acest user.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specifica un rol, corditule!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Nu pot sa gasesc rolu asta, cred ca s-a ascuns.");

  if(rMember.roles.has(gRole.id)) return message.reply("❌ Deja egzista acel rol nabule.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Bv, ai dat gradu de  ${gRole.name}`)
  }catch(e){
    console.log(e.stack);
  }
}

module.exports.help = {
  name: "addrole"
}