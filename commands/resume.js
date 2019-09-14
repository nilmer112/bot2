exports.run = (client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send('Nici nu am inceput sa cant');
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Tu n\'est pas connecté à un channel vocal');
  
  if (!fetched.dispatcher.paused) return message.channel.send('Muzica nu este oprita.');
  
  fetched.dispatcher.resume();
  
  message.channel.send(`Muzica a revenit oc: ${fetched.queue[0].songTitle}`);




}