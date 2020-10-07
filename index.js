/** @type {{ botToken: string, channelId: string, events: { date: string, message: string }[] }} */
const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

/**
 * Sends a message to the Discord channel. Should only be called once.
 * @param {string} text
 */
const sendMessage = (text) => {
    client.on('ready', async () => {
        console.log(`Logged in as ${client.user.tag}!`);
        const channel = await client.channels.fetch(config.channelId);
        await channel.send(text);
        client.destroy();
    });
    
    client.login(process.env.DISCORD_BOT_TOKEN);
}

const today = (new Date()).toISOString().slice(0, 10);
const event = config.events.find(event => event.date == today);

if (event) {
    sendMessage(event.message);
}
