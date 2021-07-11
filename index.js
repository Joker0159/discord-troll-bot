const Discord = require('discord.js');
const bot = new Discord.Client();
console.log('Code by joker0159!')

bot.login('Paste Bot Token here!');

bot.on('message', (message) => {
    
    if (message.content == 'hey') {
        message.reply('Nope')
    }
});

const messages = ["Message1", "Message2", "Message3", "Message4"]
const randomMessage = messages[Math.floor(Math.random() * messages.lenght)];

bot.on('message', (message) => {

    if (message.content == 'can i', 'may i') {
        message.reply('No you may not :joy:')
    }
})