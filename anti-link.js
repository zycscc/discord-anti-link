module.exports = (client) => {

client.on('message', (message) => {
if (message.content.includes('discord.gg/'||'discordapp.com/invite/'||'https://')) {
    if(!message.member.permissions.has('ADMINISTRATOR')) { 
    message.delete()
      .then(message.reply("Link Deleted: **Links are forbidded!**"))
   }
}
})
}