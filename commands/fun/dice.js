const Discord = require('discord.js');

module.exports = {
    name: "dice",
    category: "fun",
    description: "Rolls a dice and gives a number from 1 to 6!",
    run: async (client, message, args) => {
      var dicenumb = Math.ceil(Math.random() * 6);
      message.channel.send('Rolling dice.....').then(sentMessage => sentMessage.edit(':game_die:'+' '+`Dice rolled:`+' '+'**'+dicenumb+'**'))
    }
};