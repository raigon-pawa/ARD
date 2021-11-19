/*module.exports = (client, guild) => {
  const channelId = '843448994457845791'

  const updateMembers = (guild) => {
    const channel = guild.channels.cache.get(channelId)
    var guilduser = guild.members.filter(member => !member.user.bot).size;
    channel.setName(`Members: ${guild.memberCount}`)
    console.log(`${guilduser}`)
  }

  client.on('guildMemberAdd', (member) => updateMembers(member.guild))
  client.on('guildMemberRemove', (member) => updateMembers(member.guild))

  const guilds = client.guilds.cache.get('747083964199731230')
  updateMembers(guild)
};*/

/*module.exports.run = async (client, message, arguments) => {
   const guild = client.guilds.get("747083964199731230");
   setInterval(function () {
      var memberCounter = guild.members.filter(member => !member.user.bot).size;  
      var memberCounterChannel = client.channels.cache.get("843448994457845791");
      memberCounterChannel.setName(`Members: `+memberCounter);
   }, 1000))
};*/

module.exports = async (client) =>{
    const guild = client.guilds.cache.get('747083964199731230');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('843448994457845791');
        channel.setName(`Members: ${memberCount.toLocaleString()}`);
    }, 5000);
};