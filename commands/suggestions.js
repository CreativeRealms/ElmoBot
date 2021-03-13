const Discord = require('discord.js');

module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion'],
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "Creates a suggestion.",
    execute(message, args, cmd, client, discord){
        const channel = message.guild.channels.cache.find(c => c.name === 'democracy');
        if(!channel) return message.channel.send('Suggestions channel does not exist.');

        let messageArgs = args.join(' ');
        const embed = new discord.MessageEmbed()
        .setColor('#0000ff')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) =>{
            msg.react(':GnomeHahaYes:765469350685048833');
            msg.react(':No:808058516706689055');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}