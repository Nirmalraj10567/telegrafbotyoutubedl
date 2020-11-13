const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
express().get('/', (req, res) => res.redirect('https://t.me/urlicupload'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))




   // Send the HTTP header 

   // HTTP Status: 200 : OK

   // Content Type: text/plain



   

   // Send the response body as "Hello World"

  



const TeleBot = require('telebot');
const token = process.env.bot_token;
const bot = new TeleBot(token);
bot.on(['/start', '/hello'], (msg) => msg.reply.text(`Welcome! support my group Infinitrocyberhelp

Urluploader + torrent + rename 

How to use /leech Https:// or magnet link

Urluploader + renamer +torrent source code available + YouTube video upload script+YouTube video uploader+nodejs development

https://t.me/urlicupload`));
bot.on(/^\/gplinks (.+)$/, async(msg, props) => {

    const text =await props.match[1];

    const axios = require('axios')

const zx = axios.get('https://gplinks.in/api?api=1b1093a7f93afbe94ad2df18b89861d4970c23b8&url='+text)

  .then((response) => {

  A= response.data.shortenedUrl

    return bot.sendMessage(msg.from.id, A,{ replyToMessage: msg.message_id });

}) 

});

bot.start()
const TelegramBot = require('node-telegram-bot-api');
const token = '1355780647:AAHvGWqbgZyxKZ-7ZjDj_YjL2vbRP4pV1e4';
const bot = new TelegramBot(token, {polling: true});
bot.onText(/\/gplinks (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
  const axios = require('axios')
const zx = axios.get('https://gplinks.in/api?api=1b1093a7f93afbe94ad2df18b89861d4970c23b8&url='+resp).then((response) => {
  A= response.data.shortenedUrl
    return  bot.sendMessage(chatId, A);
}) 
});




