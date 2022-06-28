const Discord = require('discord.js');
const client = new Discord.Client();
var boss = require('/home/williamkenzie/Documents/boss.js/boss.js')

client.on('ready', () => { console.log('Boss is online!'); });

client.on("message", (message) => {
  // ensure a bot isn't talking
  if(message.author.bot) return;
  // check that the bot was mentioned to ensure it doesn't spam
    if (message.mentions.has(client.user) || message.content.toLowerCase().includes("boss")) {
      message.channel.send(boss.read(message.content))
    }
});

client.login("change your token");