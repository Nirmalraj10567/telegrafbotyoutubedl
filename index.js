




const TeleBot = require('telebot');

const bot = new TeleBot('1238769131:AAGXzi8rLKi5dt9ejNMRE4iV-9aqT0e18eo');
bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));
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





