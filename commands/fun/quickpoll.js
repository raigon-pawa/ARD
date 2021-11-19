const Discord = require('discord.js');
var colors = ['#33ff00','#fcff00','#00ffff','#000001','#ffffff'] //#0099ff

module.exports = {
    name: "quickpoll",
    aliases: ["qp"],
    category: "fun",
    description: "Sends a poll for everyone to vote yes or no.",
    run: async (client, message, args) => {
        message.delete();

        /*if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command!`).then(sentMessage => sentMessage.delete({ timeout: 5000 }));
        }*/
        if(args.length < 1) 
            return message.channel.send(":no_entry_sign: Please specify a message for poll.").then(sentMessage => sentMessage.delete({ timeout: 10000 }));

      const channel = message.mentions.channels.first();
      let pollmsg = args.join(" ")

      var rand = Math.floor(Math.random() * (colors.length));  
      var genclr = colors[rand]
      var authorAvatar = "https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".jpeg"

      const embedpoll = new Discord.MessageEmbed()
            .setDescription(':ballot_box: Poll')
            .addField('**'+pollmsg+'**', 'Please vote 👍 or 👎', true)
            .setColor(`${genclr}`)
            .setFooter(`Poll requested by ${message.author.username}`, `${authorAvatar}`);
      

      let msg = await message.channel.send(embedpoll)
        await msg.react('👍')
        await msg.react('👎')
    }

  
}
