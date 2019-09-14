exports.run = async (client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  if (!fetched) return message.channel.send('In acest moment nu este nicio melodie');
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Nu esti conectat pe canal');
  
  let userCount = message.member.voiceChannel.members.size;
  
  let required = Math.ceil(userCount/2);
  
  if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
  
  if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`Ai votat deja. ${fetched.queue[0].voteSkips.length}/${required} requis pour skip`);
  
  fetched.queue[0].voteSkips.push(message.member.id);
  
  ops.active.set(message.guild.id, fetched);
  
  if (fetched.queue[0].voteSkips.length >= required) {
    message.channel.send('Melodia urmatoare!');
    return fetched.dispatcher.emit('end');
  }
  
  message.channel.send(`Ai decis sa sari peste melodie.${fetched.queue[0].voteSkips.length}/${required} voturi necesare pentru a sarii.`)
  
  










}