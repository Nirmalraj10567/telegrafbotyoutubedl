

var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header 

   // HTTP Status: 200 : OK

   // Content Type: text/plain

   response.writeHead(200, {'Content-Type': 'text/plain'});

   

   // Send the response body as "Hello World"

   response.redirect("https://t.me/urlicupload")

}).listen(8081);

const TeleBot = require('telebot');
const token = process.env.bot_token;
const bot = new TeleBot(token);
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





