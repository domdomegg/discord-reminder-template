# discord-reminder-template

Uses GitHub Actions to send reminders to a Discord channel

## Usage

1. Click 'Use this template'
2. Set up [config.json](./config.json)
3. Create the `DISCORD_BOT_TOKEN` secret in the GitHub repository settings
4. Enable GitHub Actions on the new repository

## `DISCORD_BOT_TOKEN`

If you haven't already, create an application in the [Discord developer portal](https://discord.com/developers/applications/), then create a bot user in the bot tab. You can copy the token from there.

You will also probably need to add the bot to the Discord server and give it message posting permissions.

## Config reference

`channelId`: Channel id for the channel you wish the bot to post in. If you need to find it, follow [the Discord documentation](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).

`events`: Array of event objects. Each event object should have a date as a string in ISO-8601 format (`YYYY-MM-DD`), and a message to send on that day. Maximum one event per day.
