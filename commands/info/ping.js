const Discord = require('discord.js');

module.exports = {
    name: "ping",
    aliases: ["p"],
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        const pingmsg = new Discord.MessageEmbed()
        .setDescription(":hourglass: **Pinging...**")

      const Msg = await message.channel.send(pingmsg);

      const spingmsg = new Discord.MessageEmbed()
        .setDescription(`:ping_pong: **Pong!** ${Msg.createdTimestamp - message.createdTimestamp}ms`)

      
        setTimeout(function() { Msg.edit(spingmsg); },3000)
        
        /*const m = await message.channel.send("Pinging...");
        m.edit(`\`Pong! ${m.createdTimestamp - message.createdTimestamp}ms\``);*/
    }
}
