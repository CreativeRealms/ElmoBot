const Discord = require('discord.js');

module.exports = {
    name: 'slowmode',
    aliases: [],
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "Applies slowmode to channel.",
    execute(message, args, cmd, client, discord) {
    if (message.deletable) {
        message.delete();
    }

    let duration = args[0]
    message.channel.setRateLimitPerUser(duration);
    message.channel.send(new Discord.MessageEmbed().setColor('#0000ff').setDescription(`Slowmode set to \`${duration}\` .`)).then(m => m.delete({timeout:5000}));

}
}