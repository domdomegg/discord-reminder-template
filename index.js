/** @type {{ botToken: string, channelId: string, events: { date: string, message: string }[] }} */
const config = require('./config.json');
const Discord = require('discord.js');

/**
 * Sends a message to the Discord channel. Should only be called once.
 * @param {string} text
 */
const sendMessage = (text) => {
    const client = new Discord.Client();

    client.on('ready', async () => {
        console.log(`Logged in as ${client.user.tag}`);
        const channel = await client.channels.fetch(config.channelId);
        console.log(`Got channel ${channel.id}`);
        await channel.send(text);
        console.log('Sent message');
        client.destroy();
    });
    
    client.login(process.env.DISCORD_BOT_TOKEN);
}

const today = (new Date()).toISOString().slice(0, 10);
const event = config.events.find(event => event.date == today);

if (event) {
    console.log(`Found message to send: ${event.message}`);
    sendMessage(event.message);
} else {
    console.log('No message to send');
}
