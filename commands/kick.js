module.exports = {
    name: 'kick',
    description: 'Kick a user from the server.',
    guildOnly: true,
    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        } else {
            const taggedUser = message.mentions.users.first();
            message.channel.send(`You wanted to kick: ${taggedUser.username}`);
        }
    },
};