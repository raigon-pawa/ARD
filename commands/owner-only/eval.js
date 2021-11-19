const Discord = require('discord.js');

module.exports = {
    name: "eval",
    //aliases: ["<alt name>"],
    category: "owner",
    description: "Eval command to evaluate JS code.",
    run: async (client, message, args) => {
      const { member, channel, content } = message
        if (message.author.id != "396948643812212744") return
        if (args.length < 1) return

        let evalmsg = args.join(" ");

        const result = eval(evalmsg)
        if(result === null) return message.channel.send(`:no_entry_sign: Eval error!`)
        channel.send(result)

    }
}
