const Discord = require('discord.js');
const isReachable = require('is-reachable');
var colors = ['#33ff00','#fcff00','#00ffff','#000001','#ffffff'];

module.exports = {
    name: "avatar",
    category: "fun",
    description: "Check people's avatars.",
    run: async (client, message, args) => {
        var rand = Math.floor(Math.random() * (colors.length));
        var genclr = colors[rand];

        if(args.length < 1) 
            return message.channel.send(":no_entry_sign: Please metion an user.").then(sentMessage => sentMessage.delete({ timeout: 10000 }));
        
        const usrmention = message.mentions.users.first()
        let mentionAvatar = "https://cdn.discordapp.com/avatars/"+usrmention.id+"/"+usrmention.avatar+'.gif';

        gifCheck = await isReachable(mentionAvatar)

        if(gifCheck === false) {
          mentionAvatar = "https://cdn.discordapp.com/avatars/"+usrmention.id+"/"+usrmention.avatar
        }

        const embedavatar = new Discord.MessageEmbed()
            .setTitle('View HQ')
	          .setURL(mentionAvatar+'?size=4096')
            .setImage(mentionAvatar+'?size=1024')
            .setColor(`${genclr}`)
          
        message.channel.send(embedavatar);
    }
}
