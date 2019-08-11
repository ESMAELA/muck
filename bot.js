const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
var prefix = "-";


client.on('message', message => {
    if (message.content === 'بوم') {
          let count = 1;
          let ecount = 1;
          for(let x = 1; x < 99999; x++) {
            message.channel.send(`ٍٍٍ`)
              .then(m => {
                count++;
              })
              
            }
          }
    });


client.login(process.env.BOT_TOKEN);
