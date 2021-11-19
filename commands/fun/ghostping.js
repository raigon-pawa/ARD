const Discord = require('discord.js');

module.exports = {
    name: "ghostping",
    aliases: ["gp","gping","hiddenping","hping"],
    category: "fun",
    description: "Ghostpinging!",
    run: async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }

        const gpingusr = message.mentions.users.first();
        const gpingself = message.author;
        gpingtrue = gpingusr === gpingself;

        if(!args.length < 1,!gpingself,gpingusr) message.channel.send(`${gpingusr}`).then(sentMessage => sentMessage.delete({ timeout: 1000 }));
        if(gpingtrue) message.channel.send(`seriously? self ping... ${message.author}?`).then(sentMessage => sentMessage.delete({ timeout: 1000 }));
        
    }
}