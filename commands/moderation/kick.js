const Discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kick anyone with it",
  usage: "kick <@user> <raeson>",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission("KICK_MEMBERS", "ADMINISTRATOR")) {
      return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`).then(sentMessage => sentMessage.delete({ timeout: 5000 }));
    }
    
    if(!message.guild.me.hasPermission("KICK_MEMBERS", "ADMINISTRATOR")) {
      return message.channel.send(`**${message.author.username}**, I do not have enough permission to use this command`).then(sentMessage => sentMessage.delete({ timeout: 5000 }));
    }
    
    let target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author.username}**, Please mention the person who you want to kick`).then(sentMessage => sentMessage.delete({ timeout: 5000 }));
    }
    
    if(target.id === message.author.id) {
     return message.channel.send(`**${message.author.username}**, You can not kick yourself`).then(sentMessage => sentMessage.delete({ timeout: 5000 }));
    }
    
  let reason = args.slice(1).join(" ");  
  if(!args[1]) {    
    return message.channel.send(`**${message.author.username}**, Please Give Reason to kick`).then(sentMessage => sentMessage.delete({ timeout: 5000 }));
  }
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Action: Kick")
    .setDescription(`Kicked ${target}`)
    .setColor("#ff2050")
    .setFooter(`By ${message.author.username}`)
    .addField(`ID:`, `${target.id}`, false)
    .addField(`Reason:`, `\`${reason}\``, true);
    
    message.channel.send(embed).then(sentMessage => sentMessage.delete({ timeout: 30000 }));
    
    target.kick(args[1]);
    
    
    
  }
}