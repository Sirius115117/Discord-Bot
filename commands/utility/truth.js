const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('truth')
		.setDescription('The bot will speak facts.'),
	async execute(interaction) {
		await interaction.reply('Carmen is Gay!');
	},
};