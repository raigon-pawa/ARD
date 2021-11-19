const Database = require("@replit/database");
const db = new Database()

module.exports = {
    name: "welcomemessage",
    aliases: ["wmsg","welcomemsg","wmessage"],
    category: "misc",
    description: "Sets welcome ",
    run: async (client, message, args, content, guild) => {
       
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
            return message.channel.send(`Sorry... You can't use this function.`).then(sentMessage => sentMessage.delete({ timeout: 5000 }));
        }

      //

    }
}
