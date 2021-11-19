module.exports = {
    name: "clear",
    aliases: ["clr", "prune", "delete", "del"],
    category: "moderation",
    description: "Keep the channel clean with clear command!",
    usage: "clear <amount>",
    run: async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }

        if (!message.member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) {
            return message.channel.send("`You can't delete messages.... 🧐`").then(sentMessage => sentMessage.delete({ timeout: 5000 }));
        }

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.channel.send("`Can't delete 0 Msgs! 😏`").then(sentMessage => sentMessage.delete({ timeout: 5000 }));
        }
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) {
            return message.channel.send("`Sorry... I can't delete messages. 😔`").then(sentMessage => sentMessage.delete({ timeout: 5000 }));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` messages.`))
            .then(sentMessage => sentMessage.delete({ timeout: 5000 }))
            
    }
  }
