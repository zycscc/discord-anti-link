const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

const antilink = require("./anti-link");
antilink(client);


client.login(config.token);