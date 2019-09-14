exports.run = async (client, message, args, ops) => {
    if(!message.member.roles.some(r=>["Zew ascuns", "Coordonator", "**[6]CO-LEADER of Los Vagos", "DISCORD DEVELOPER"].includes(r.name)) )
      return message.reply("N-ai acces la comanda asta mars dreq");

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Te rog mentioneaza numele unui membru.");
    if(!member.kickable) 
      return message.reply("Nu-l pot scoate pe asta afara ca e prea gras drq");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Fara motiv";

    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} Nu-i pot da astuia cu picioru-n cur pentru ca: ${error}`));
    message.reply(`${member.user.tag} a fost scos afara de catre ${message.author.tag} pentru: ${reason}`);
}