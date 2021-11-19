const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

//app.get('/', (req, res) => res.send('Bots Alive!'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './website/index.html'));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const Discord = require('discord.js');
const Database = require("@replit/database");
const { Client, Collection, Attachment } = require('discord.js');
const client = new Client({
  disableEveryone: true
});
const db = require("quick.db");
const Canvas = require('canvas');
const config = require("./config.json");
const memberCount = require("./misc/member-count");
const prefix = config.prefix;
const fs = require('fs');
const { ErelaClient, Utils} = require('erela.js');
const token = process.env.TOKEN;
const Timeout = new Collection();
const ms = require('ms');

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    /*client.user.setActivity('BETA Bot', {type: 'LISTENING'} );
    client.user.setStatus('dnd');*/

 const stson = db.fetch(`statuson`);
 const sts = db.fetch(`status`);

 if (stson === 'sttsoff') {

    const activities = [
      `${client.guilds.cache.size} servers`,
			`${client.channels.cache.size} channels`,
			`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} users (approx.)`
    ];

    let i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: 'WATCHING' }), 15000);

    client.user.setStatus('dnd'); 
 }

 if (stson === 'sttson') {
   client.user.setActivity(sts);
   client.user.setStatus('dnd');
 }

    //setInterval(() => client.user.setPresence({ activity: { name: `${activities[i++ % activities.length]}` }, status: 'dnd' }), 15000);

    //client.user.setActivity(` in ${client.guilds.cache.size} servers`);

});
 
/*client.on('guildMemberAdd', async member =>{

  const wChannel = member.guild.channels.cache.find(channel => channel.name === '🎊・welcome');
  if(!wChannel) return;
  if(wChannel.type != "text") return;

  const canvas = Canvas.createCanvas(933, 393);
  const ctx = canvas.getContext('2d');
  const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/694506689134723093/730667698006130737/20200709_121137.jpg');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = '#74037b';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 7;
  ctx.arc(466, 120, 102.90, 0, 2 * Math.PI, false);
  ctx.stroke();

  ctx.fillStyle = '#ffffff';

  var size1 = 50;
  var x = canvas.width / 2;

  ctx.font = '900 90px sans-serif';
  ctx.fillText('WELCOME', 220, 393 / 1.31);
  ctx.font = `bold small-caps ${size1 -= 5}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.fillText(member.user.tag, x, 347);
  

  ctx.beginPath();
	ctx.arc(466, 120, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 366, 20, 200, 200);

  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

  wChannel.send(`welcome to Anime Realm Discord, ${member}. check out <#696239549726195722>  and <#694564237493665842> , we hope you enjoy your time here.`, attachment).catch(console.error)
});*/

client.on('ready', () => {
  //welcome(client)
    memberCount(client)
})

client.on('message', async message =>{
    if(message.author.bot) return;

    if (message.content === '<@!715438333790257195>' || message.content === '<@715438333790257195>') return message.channel.send('Please Don\'t ping me like that, it tickles 😳').then(sentMessage => sentMessage.delete({ timeout: 10000 }));
    
    if(!message.content.startsWith(prefix)) return;
    if(message.channel.type === 'dm') return message.channel.send("I can't work in DMs");

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    if(cmd.length === 0) return;

    let command = client.commands.get(cmd);
 
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    //if (command) 
    //command.run(client, message, args);

      if (command) {
        if(command.timeout) {
            if(Timeout.has(`${command.name}${message.author.id}`)) return message.channel.send(`You are on a \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long : true})}\` cooldown.`).then(sentMessage => sentMessage.delete({ timeout: 3000 }))
            
            command.run(client, message, args)
            Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.timeout)
            setTimeout(() => {
                Timeout.delete(`${command.name}${message.author.id}`)
            }, command.timeout)
        } else {
          command.run(client, message, args)
        }
    }

  let isBotOwner = message.author.id == '396948643812212744';

  if (message.content === "1RESET") {

     message.channel.send('Restarting...').then(m => {
        client.destroy().then(() => {
          client.login(token);
        });
      });
  }

  if(message.content === `${prefix}help`) {
  message.channel.send(`:tools: Dev's working on it!!`).then(sentMessage => sentMessage.delete({ timeout: 10000 }));
 }

 if(message.content === `Good morning`) {
  db.set('GMcounter', 0)
 }

});

client.login(token);