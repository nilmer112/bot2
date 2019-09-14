// Practic opreste si iese de pe canal

exports.run = async (client, message, args, ops) => {

	// Verifica daca e conectat pe canal
	if (!message.member.voiceChannel) return message.channel.send('Te rog sa te conectezi pe canal');
    
    // Verifica daca tu etsi conectat pe acelasi canal cu botu
	if (!message.guild.me.voiceChannel) return message.channel.send('Nu sunt conectat pe niciun canal, idiot.');

	// Verifica daca autoru si boti is pe acelasi canal 
	if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Scuze, nu suntem conectati pe acelasi canal.');

	// Aici practic pleaca
	message.guild.me.voiceChannel.leave();

	// Mesaj

	message.channel.send('Parasesc canalu re :(');
}