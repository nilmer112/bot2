exports.run = (client, message, args, ops) => {
  
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send('In acest moment nu urla nime');
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Nu esti conectat pe niciun canal');
  
  if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send('Introdu un numar intre 0 si 200');
  
  fetched.dispatcher.setVolume(args[0]/100);
  
  message.channel.send(`Volum: ${args[0]}`);
};