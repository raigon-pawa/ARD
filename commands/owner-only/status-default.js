const db = require("quick.db")
const Discord = require("discord.js");

module.exports = {
  name: "statusoff",
  category: "owner",
  description: "Change the bot status to default",
  usage: "statusoff",
  run: async (client, message, args) => {
    //OWNER ONLY COMMAND
    if (message.author.id != "396948643812212744") {
      db.set('statuson', 'sttsoff')
    } else {
      return message.channel.send("This command can only be used by owner")
    }

  }
};