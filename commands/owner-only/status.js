const db = require("quick.db")
const Discord = require("discord.js");

module.exports = {
  name: "status",
  category: "owner",
  description: "Change the bot status",
  usage: "status <here>",
  run: async (client, message, args) => {
   /* //OWNER ONLY COMMAND
    if (message.author.id != "396948643812212744") {
      return message.channel.send("This command can only be used by owner")
    }
    //ARGUMENT
    if (!args.length) {
      return message.channel.send("Please give status message")
    }

    db.set('statuson', 'sttson')

    db.set('status', args.join(" "))
    await message.channel.send("Updated the bot status")*/
  }
}