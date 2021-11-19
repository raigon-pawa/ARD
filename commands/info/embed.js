const Discord = require('discord.js');
var colors = ['#33ff00','#fcff00','#00ffff','#000001','#ffffff'] //#0099ff

module.exports = {
    name: "embed",
    category: "info",
    description: "Embeds your mesage!",
    run: async (client, message, args) => {
        message.delete();

        if(args.length < 1) 
            return message.channel.send('Type something to embed!').then(sentMessage => sentMessage.delete({ timeout: 10000 }));
  
        let desc = args.join(" ")
  
        
        
        var rand = Math.floor(Math.random() * (colors.length));
        
        var genclr = colors[rand];
  
        const embedmsg = new Discord.MessageEmbed()
            .setDescription(desc)
            .setColor(`${genclr}`)
  
        message.channel.send(embedmsg);
    }
}