const Discord = require('discord.js');
const config = require("../../config.json");

//var slapimgs = ['https://i.imgur.com/fm49srQ.gif', 'https://i.imgur.com/4MQkDKm.gif','https://i.imgur.com/o2SJYUS.gif','https://i.imgur.com/oOCq3Bt.gif','https://i.imgur.com/Agwwaj6.gif','https://i.imgur.com/YA7g7h7.gif','https://i.imgur.com/mIg8erJ.gif','https://i.imgur.com/oRsaSyU.gif','https://i.imgur.com/kSLODXO.gif','https://i.imgur.com/CwbYjBX.gif','https://i.imgur.com/mdZR2D2.gif','https://i.imgur.com/ABE1arT.gif','https://i.imgur.com/Li9mx3A.gif','https://i.imgur.com/kVI9SHf.gif','https://i.imgur.com/sKDLYXE.gif','https://i.imgur.com/FQKJpzU.gif','https://i.imgur.com/miFmhBg.gif','https://i.imgur.com/GsLRT0o.gif','https://i.imgur.com/ISDUslk.gif','https://i.imgur.com/XqtlhuZ.gif','https://i.imgur.com/0B7O5Zi.gif','https://i.imgur.com/HcTCdJ1.gif','https://i.imgur.com/yAlP0u1.gif','https://i.imgur.com/ZDiDDdc.gif','https://c.tenor.com/DeJ-P43S830AAAAM/yen-slap.gif','https://c.tenor.com/Lc7C5mLIVIQAAAAM/anime-slap.gif','https://c.tenor.com/_RZ87T5zbzsAAAAM/aqua-anime.gif','https://c.tenor.com/nBVh6acneb4AAAAM/fate-grand-order-fate.gif','https://c.tenor.com/PQ_imJXimaMAAAAM/smack-tongue.gif','https://c.tenor.com/WmYPgtao4ygAAAAM/kaifuku-keyaru.gif','https://media.tenor.com/images/734d628ba871022bc9ae142035b969b5/tenor.gif','https://media.tenor.com/images/1d8edce282f3e36abc6b730357d3cea2/tenor.gif','https://i.pinimg.com/originals/f8/5f/4c/f85f4c557e5a03d2a7a2e903b66e0047.gif']

module.exports = {
    name: "diccslap",
    aliases: ["dicslp","diccslapp","dikslap"],
    category: "fun",
    description: "DICC Slappp!",
    run: async (client, message, args) => {
        
      /*slapusr = message.mentions.users.first();
      const slapself = message.author;
      slaptrue = slapusr === slapself;


      const slapembedno = new Discord.MessageEmbed()
          .setDescription(`**${message.author.username}**, dicc slapped someone that he don't want us to know!`)
          .setImage(`https://c.tenor.com/WmYPgtao4ygAAAAM/kaifuku-keyaru.gif`)
          
      
      const slapembedyes = new Discord.MessageEmbed()
          .setDescription(`**${message.author.username}**, dicc slapped the DAMN out of ${slapusr} `)
          .setImage(`https://c.tenor.com/WmYPgtao4ygAAAAM/kaifuku-keyaru.gif`)
          .setColor(`#fffff1`)

      if(args.length < 1,!slapself,!slapusr) message.channel.send(slapembedno);
      if(!args.length < 1,!slapself,slapusr) message.channel.send(slapembedyes);
      if(slaptrue) message.channel.send(`alone ${message.author}?`).then(sentMessage => sentMessage.delete({ timeout: 10000 }));*/

      message.channel.send(`This command is disabled RN, Sorry`).then(sentMessage => sentMessage.delete({ timeout: 10000 }))
    }
}