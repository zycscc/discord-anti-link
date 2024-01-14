const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on('message', (message) => {
if (message.content.includes('discord.gg/'||'discordapp.com/invite/'||'https://')) {
    if(!message.member.permissions.has('ADMINISTRATOR')) { 
    message.delete()
      .then(message.reply("Link Deleted: **Links are forbidden!**"))
   }
}
})

client.login(config.token);
