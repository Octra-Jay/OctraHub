const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('balance')
    .setDescription('Zeigt deinen Kontostand an'),
  async execute(interaction) {
    await interaction.reply('Dein Kontostand: 0 Coins');
  },
};