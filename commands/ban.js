exports.run = async (client, message, args, ops) => {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    
      if(!message.member.roles.some(r=>["Zew ascuns", "Coordonator"].includes(r.name)))
      return message.reply("Nu ai acces la aceasta comanda !");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Te rog scrie numele cuiva de pe server.");
    if(!member.bannable) 
      return message.reply("Nu-l pot bana pa asta, cred ca are rol mai mare ca mine sau nam acces");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Niciun motiv specificat";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} Nu-l pot bana pa asta pentru ca : ${error}`));
    message.reply(`${member.user.tag} a fost banat de catre ${message.author.tag} pentru: ${reason}`);
  }