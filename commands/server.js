module.exports = {
    name: 'server',
    description: 'Information about the server.',
    execute(message, args) {
        message.channel.send(`This server's name is: ${message.guild.name}`);
    },
};