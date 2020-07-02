const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

const config = {
    prefix: process.env.PREFIX,
    token: process.env.TOKEN,
    owner: process.env.OWNER
}

client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (message.content === `${config.prefix}ping`) {
        message.channel.send('Pong.');
    } else if (message.content === `${config.prefix}beep`) {
        message.channel.send('Boop.');
    } else if (message.content === `${config.prefix}server`) {
        message.channel.send(`This server's name is: ${message.guild.name}`);
    } else if (message.content === `${config.prefix}user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    } else if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        } else if (args[0] === 'foo') {
            return message.channel.send('bar');
        }
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    } else if (command === 'kick') {
        if (!message.mentions.users.size) {
            return message.reply('you need to tak a user in order to kick them!');
        } else {
            const taggedUser = message.mentions.users.first();
            message.channel.send(`You wanted to kick: ${taggedUser.username}`);
        }
    } else if (command === 'avatar') {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`
        });
        message.channel.send(avatarList);
    } else if (command === 'prune') {
        const amount = parseInt(args[0] + 1);
        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('you need to input a number between 1 and 99');
        }
        message.channel.bulkDelete(amount, true).catch(err => {
            console.log(err);
            message.channel.send('there was an error trying to prune messages in this channel!');
        });
    }
});

client.once('ready', () => {
    console.log('Ready!');
});

client.login(config.token);
