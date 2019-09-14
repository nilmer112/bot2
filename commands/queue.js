exports.run = async (client, message, args, ops) => {
  
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send('Lista de asteptare ie goala');
  
  let queue = fetched.queue;
  
  let nowPlaying = queue[0];
  
  let resp = `__**Acum urla**__\n**${nowPlaying.songTitle}** -- **Cerut de:** *${nowPlaying.requester}*\n\n__**Lista de asteptare**__\n`;
  
  for (var i=1; i < queue.length; i++) {
    resp += `${i}. **${queue[i].songTitle}** -- **Cerut de:** *${queue[i].requester}*\n`;
  }
  message.channel.send(resp);

}