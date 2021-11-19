const Discord = require('discord.js');

module.exports = {
    name: "rapidghostping",
    aliases: ["rgp","rgping","rapidhiddenping","rhping"],
    timeout: 6000,
    category: "fun",
    description: "RAPID Ghostpinging!",
    run: async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }

        const gpingusr = message.mentions.users.first();
        const gpingself = message.author;
        gpingtrue = gpingusr === gpingself;
        const amount = args[0]
        const inRange = 1 <= amount && amount <= 10;
      
        if (isNaN(amount) === true, !inRange) return message.channel.send("Use an amount from `1` to `10`").then(sentMessage => sentMessage.delete({ timeout: 3000 }))

        const rapid = function() {for (let i = 0; i < amount; i++) {
             message.channel.send(`${gpingusr}`).then(sentMessage => sentMessage.delete({ timeout: 1000 }))
           }}

        if(!args.length < 1,!gpingself,gpingusr, isNaN(amount) === false ) rapid();
     
        if(gpingtrue) message.channel.send(`seriously? self ping... ${message.author}?`).then(sentMessage => sentMessage.delete({ timeout: 1000 }));
        
    }
}