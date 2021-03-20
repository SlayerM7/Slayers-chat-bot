const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => console.log('Ready to chat!'))

client.on('message', (message) => {
    if (message.author.bot) return;

    const axios = require('axios')

    axios.get(`https://api.fc5570.ml/chatbot?text=${message.content.trim().split(/ +/g).join('+').toLowerCase()}`).then((response) => {
        message.reply(response.data.response)
    })
})

client.login('ODE3ODQyMTM3MTEwNTQ0NDM0.YEPY2A.T9X2J2O0Wgs5iMho2JPZ5E4IYZ8')