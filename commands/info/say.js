module.exports = {
    name: "say",
    category: "info",
    description: "Repeats your message once",
    run: async (client, message, args) => {
        message.delete();

        if(args.length < 1) 
            return message.channel.send('Type something to say!').then(sentMessage => sentMessage.delete({ timeout: 10000 }));
  
           let desc1 = args.join(" ")
  
        message.channel.send(desc1);
    }
}