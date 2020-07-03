module.exports = {
    name: 'kick',
    description: 'Kick!',
    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply('you need to tak a user in order to kick them!');
        } else {
            const taggedUser = message.mentions.users.first();
            message.channel.send(`You wanted to kick: ${taggedUser.username}`);
        }
    },
};