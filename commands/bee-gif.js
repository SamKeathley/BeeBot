const { GuildMember } = require("discord.js");

module.exports = {
    name: 'bee',
    description: 'Sends a random bee related gif.',
    execute(message, args) {
        giphy.search('gifs', { 'q': 'bee' })
            .then((response) => {
                const totalResponses = response.data.length;
                const randomGiphy = Math.floor((Math.random() * 10) + 1) % totalResponses;
                const finalGiphy = response.data[randomGiphy];

                message.channel.send('Howdy, partner! Did y\'all say BEE?', {
                    files: [finalGiphy.images.fixed_height.url]
                })
            })
            .catch((err) => {
                message.channel.send('What in tarnation? Something went wrong!')
            })
    },
};