const Discord = require('discord.js');

module.exports = {
    name: 'purge',
    aliases: [],
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "Removes unwanted messages.",
    execute(message, args, cmd, client, discord) {
    if (message.deletable) {
        message.delete();
    }

    // Check if args[0] is a number
    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("Enter a value greater than 0.").then(m => m.delete({timeout:5000}));
    }

    let deleteAmount;

    if (parseInt(args[0]) > 1000) {
        deleteAmount = 1000;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true)
        .then(deleted => message.channel.send(new Discord.MessageEmbed().setColor('#0000ff').setDescription(`Deleted \`${deleted.size}\` messages.`)).then(m => m.delete({timeout:5000})))
        .catch(err => message.reply(`Something went wrong... ${err}`));
}
}