const { GuildMember } = require("discord.js");

module.exports = {
    name: 'bee',
    description: 'Sends a random bee related gif.',
    execute(message, args) {
        giphy.search('gifs', { 'q': 'bee' })
            .then((response) => {
                const facts = [
                    'Bees have 5 eyes!',
                    'Bees are insects, so they have 6 legs! (That\'s a lot of boots)',
                    'Male bees in the hive are called drones!',
                    'Bees fly about 20 mph!',
                    'Female bees in the hive (except for her Royal Majesty) are called worker bees!',
                    'Losing its stinger will cause a bee to die!',
                    'Bees carry pollen on their hind legs in a pollen basket or corbicula!',
                    'An average beehive can hold around 50,000 bees!',
                    'Foragers must collect nectar from about 2 million flowers to make 1 pound of honey!',
                    'The average forager makes about 1/12 th of a teaspoon of honey in her lifetime!',
                    'The principal form of communication among honey bees is through chemicals called pheromones!',
                    'Bees have two pairs of wings!'
                ]
                const randomFact = facts[Math.floor(Math.random() * facts.length)];
                const totalResponses = response.data.length;
                const randomGiphy = Math.floor((Math.random() * 10) + 1) % totalResponses;
                const finalGiphy = response.data[randomGiphy];

                message.channel.send(`Howdy, partner! Did y\'all know: ${randomFact}`, {
                    files: [finalGiphy.images.fixed_height.url]
                })
            })
            .catch((err) => {
                message.channel.send('What in tarnation? Somethin\' went wrong!')
            })
    }
};