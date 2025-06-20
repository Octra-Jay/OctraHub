const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { readdirSync } = require('fs');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
client.commands = new Collection();

const commandFiles = readdirSync('./commands/economy').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/economy/${file}`);
  client.commands.set(command.data.name, command);
}

client.once('ready', () => {
  console.log('Octra Bot ist online!');
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command) return;
  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply('Fehler beim Ausführen des Commands!');
  }
});

client.login(process.env.DISCORD_TOKEN);