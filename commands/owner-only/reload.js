const db = require("quick.db")
const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "reload",
  category: "owner",
  description: "Reload a certain command(Owner only)",
  usage: "reload <command>",
  run: async (client, message, args) => {
    //OWNER ONLY COMMAND
    if (message.author.id != "396948643812212744") return message.channel.send(":no_entry_sign: This command can only be used by the **Owner**.").then(sentMessage => sentMessage.delete({ timeout: 10000 }));

    if(args.length < 1) 
            return message.channel.send('Specify a command to reload!').then(sentMessage => sentMessage.delete({ timeout: 10000 }));

    const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`).then(sentMessage => sentMessage.delete({ timeout: 10000 }));
		}

		const commandFolders = fs.readdirSync('./commands');
		const folderName = commandFolders.find(folder => fs.readdirSync(`./commands/${folder}`).includes(`${command.name}.js`));

		delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)];

		try {
			const newCommand = require(`../${folderName}/${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`Command \`${newCommand.name}\` was reloaded!`).then(sentMessage => sentMessage.delete({ timeout: 10000 }));
		} catch (error) {
			console.error(error);
			message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``).then(sentMessage => sentMessage.delete({ timeout: 10000 }));
		}

  }
};