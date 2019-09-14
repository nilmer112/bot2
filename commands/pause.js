exports.run = (client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send('Nici n-am inceput sa cant');
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Nu esti conectat idiotule.');
  
  if (fetched.dispatcher.paused) return message.channel.send('Deja tac idiotule');
  
  fetched.dispatcher.pause();
  
  message.channel.send('Gata sefu, nu mai urlu');




}