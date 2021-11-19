const Discord = require('discord.js');

var ballans = ["It is Certain","It is decidedly so","Without a doubt","Yes definitely","You may rely on it","As I see it, yes","Most likely","Outlook good","Yes","Signs point to yes","Reply hazy, try again","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again","Don't count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful"];

var colors = ['#33ff00','#fcff00','#00ffff','#000001','#ffffff'];

module.exports = {
    name: "8ball",
    category: "fun",
    description: "Ask 8ball a yes,no question!",
    run: async (client, message, args) => {
      var rndmer = Math.floor(Math.random() * (ballans.length));
      var ballrndm = ballans[rndmer]
      let desc = args.join(" ")
      var rand = Math.floor(Math.random() * (colors.length));
      var genclr = colors[rand];

      if(args.length < 1) 
            return message.channel.send("Sorry, I didn't see the Question.").then(sentMessage => sentMessage.delete({ timeout: 10000 }));

      const embedball = new Discord.MessageEmbed()
            .setDescription(':8ball: 8ball')
            .addField('**Q: **'+desc, '**A: **'+ballrndm+' '+'('+`${message.author}`+')', true)
            .setColor(`${genclr}`)
  
        message.channel.send(embedball);
    }
};