const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('ODYzOTIwMDc2ODY4NjgxNzQ4.YOt6RQ._6Il99_KblhLkxqI79q68ioNkSM');

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