const { SlashCommandBuilder } = require('discord.js');
const discordaudio = require('discordaudio');

module.exports = {
    name: "play",
    description: "play a song from youtube",
    command: {
      enabled: true,
      usage: "<song-name>",
      minArgsCount: 1,
    },
    slashCommand: {
      enabled: true,
      options: [
        {
          name: "url",
          description: "url",
          type: ApplicationCommandOptionType.String,
          required: true,
        },
      ],
    },
  }