const figlet = require('figlet');

exports.run = async (client, message, args) => {
	if (!args.join(' ')) return message.channel.send('Da cv text');
	figlet(args.join(' '), (err,data ) => {
		message.channel.send(data, {
			code:'ascii'
		});
	});
};