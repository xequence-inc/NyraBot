import { Client, REST, Routes, SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } from 'discord.js';

export async function registerCommands(client: Client) {
    const commands = [
        new SlashCommandBuilder()
            .setName('kick')
            .setDescription('Kick a user from the server.')
            .addUserOption(option => option.setName('target').setDescription('The user to kick').setRequired(true))
            .addStringOption(option => option.setName('reason').setDescription('Reason for kick'))
            .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
        
        new SlashCommandBuilder()
            .setName('ban')
            .setDescription('Ban a user from the server.')
            .addUserOption(option => option.setName('target').setDescription('The user to ban').setRequired(true))
            .addStringOption(option => option.setName('reason').setDescription('Reason for ban'))
            .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

        new SlashCommandBuilder()
            .setName('mute')
            .setDescription('Timeout a user.')
            .addUserOption(option => option.setName('target').setDescription('The user to mute').setRequired(true))
            .addIntegerOption(option => option.setName('duration').setDescription('Duration in minutes').setRequired(true))
            .addStringOption(option => option.setName('reason').setDescription('Reason for mute'))
            .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),

        new SlashCommandBuilder()
            .setName('warn')
            .setDescription('Warn a user.')
            .addUserOption(option => option.setName('target').setDescription('The user to warn').setRequired(true))
            .addStringOption(option => option.setName('reason').setDescription('Reason for warning').setRequired(true))
            .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),

        new SlashCommandBuilder()
            .setName('purge')
            .setDescription('Delete messages.')
            .addIntegerOption(option => option.setName('amount').setDescription('Number of messages to delete').setRequired(true))
            .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

         new SlashCommandBuilder()
            .setName('lockdown')
            .setDescription('Lock current channel.')
            .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
    ];

    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN!);

    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID!), { body: commands });
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
}

export function setupCommandHandlers(client: Client) {
    client.on('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return;

        const { commandName } = interaction;

        if (commandName === 'kick') {
            const target = interaction.options.getUser('target');
            const reason = interaction.options.getString('reason') ?? 'No reason provided';
            await interaction.reply({ content: `👢 Kicked ${target?.tag} for: ${reason}`, ephemeral: true });
        }

        if (commandName === 'ban') {
            const target = interaction.options.getUser('target');
            const reason = interaction.options.getString('reason') ?? 'No reason provided';
            await interaction.reply({ content: `🔨 Banned ${target?.tag} for: ${reason}`, ephemeral: true });
        }

        if (commandName === 'mute') {
            const target = interaction.options.getUser('target');
            const duration = interaction.options.getInteger('duration');
             await interaction.reply({ content: `🤐 Muted ${target?.tag} for ${duration} minutes.`, ephemeral: true });
        }
        
        if (commandName === 'warn') {
             const target = interaction.options.getUser('target');
             const reason = interaction.options.getString('reason');
             // TODO: Save to DB
             await interaction.reply({ content: `⚠️ Warned ${target?.tag} for: ${reason}`, ephemeral: true });
        }

        if (commandName === 'purge') {
            const amount = interaction.options.getInteger('amount')!;
            if (interaction.channel && 'bulkDelete' in interaction.channel) {
                await interaction.channel.bulkDelete(amount);
                await interaction.reply({ content: `Deleted ${amount} messages.`, ephemeral: true });
            }
        }
    });
}
