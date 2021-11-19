const Discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban anyone with one shot whithout knowing anyone xD",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, You do not have perms to ban someone`).then(sentMessage => sentMessage.delete({ timeout: 5000 }));
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, I am do not have perms to ban someone`).then(sentMessage => sentMessage.delete({ timeout: 5000 }));
    }
    
    const target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author.username}**, Please mention the person who you want to ban.`).then(sentMessage => sentMessage.delete({ timeout: 5000 }));
    }
    
    if(target.id === message.author.id) {
      return message.channel.send(`**${message.author.username}**, You can not ban yourself!`).then(sentMessage => sentMessage.delete({ timeout: 5000 }));
    }
    
   
    let reason = args.slice(1).join(" ");
   if(!args[1]) {
     return message.channel.send(`**${message.author.username}**, Please Give Reason To ban Member`)
   }
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Action : Ban")
    .setDescription(`Banned ${target} (${target.id})`)
    .setColor("#ff2050")
    .setThumbnail(target.avatarURL)
    .setFooter(`Banned by ${message.author.tag}`)
    .addField(`ID:`, `${target.id}`, false)
    .addField(`Reason:`, `\`${reason}\``, true);
    
    message.channel.send(embed).then(sentMessage => sentMessage.delete({ timeout: 30000 }));
    target.ban(args[1])
    
    
    
  }
}
