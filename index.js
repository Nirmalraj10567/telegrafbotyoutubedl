
const Telegraf = require('telegraf');

const API_TOKEN = process.env.API_TOKEN || '';

const PORT = process.env.PORT || 3000;

const URL = process.env.URL || 'https://utubevideobot.herokuapp.com/';

const bot = new Telegraf(API_TOKEN);

bot.telegram.setWebhook(`${URL}/bot${API_TOKEN}`);

bot.startWebhook(`/bot${API_TOKEN}`, null, PORT)

const TeleBot = require('telebot');

const bot = new TeleBot(process.env.API_TOKEN);
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




  

  


///const { Telegraf } = require('telegraf')
///const bot = new Telegraf(process.env.BOT_TOKEN)
bot.startPolling()
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.command("youtube",async(ctx)=>
{  
  const query1 = await ctx.message.text.split(" ")[1];
console.log(query1)


  ctx.telegram.sendMessage(ctx.chat.id,"youtube-downloads",{
    reply_markup:{
      inline_keyboard:[
         [{text:"mp4_720p",callback_data:"mp4_720p"}],
         [{text:"mp4_360p",callback_data:"mp4_360p"}],
         [{text:"mp4_1080p",callback_data:"mp4_1080p"}],
         [{text:"webm_1080p",callback_data:"webm_1080p"}]
      ]
    }
  })

bot.action("go-back",(ctx)=>{
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id,"youtube-downloads",{
    reply_markup:{
      inline_keyboard:[
         [{text:"mp4_720p",callback_data:"mp4_720p"}],
         [{text:"mp4_360p",callback_data:"mp4_360p"}],
         [{text:"mp4_1080p",callback_data:"mp4_1080p"}],
         [{text:"webm_1080p",callback_data:"webm_1080p"}]
      ]
    }
  })  
}) 
bot.action("mp4_720p",(ctx)=>{
  ctx.deleteMessage()
const axios = require('axios')
const zx = axios.get('https://youtube-downloader3.herokuapp.com/video_info.php?url='+query1)
  .then((response) => {
  A= response.data.links[1].url
  ctx.telegram.sendMessage(ctx.chat.id,"youtube-downloads",{
    reply_markup:{
      inline_keyboard:[
        [{text:"mp4_720p",url:A}],
        [{text:"go-back",callback_data:"go-back"}]
        
      ]
    }
  }) 
  console.log(A)
  
  }); 
})
bot.action("mp4_360p",async(ctx)=>{
  ctx.deleteMessage()
const axios = require('axios')
const zx = await axios.get('https://youtube-downloader3.herokuapp.com/video_info.php?url='+query1)
  .then((response) => {
  A= response.data.links[0].url
  ctx.telegram.sendMessage(ctx.chat.id,"youtube-downloads",{
    reply_markup:{
      inline_keyboard:[
        [{text:"mp4_360p",url:A}],
        [{text:"go-back",callback_data:"go-back"}]
        
      ]
    }
  }) 
  console.log(A)
  
  }); 
})
bot.action("mp4_1080p",async(ctx)=>{
  ctx.deleteMessage()
  const axios = require('axios')
  const zx = await  axios.get('https://youtube-downloader3.herokuapp.com/video_info.php?url='+query1)
    .then((response) => {
    A= response.data.links[4].url
    ctx.telegram.sendMessage(ctx.chat.id,"youtube-downloads",{
      reply_markup:{
        inline_keyboard:[
          [{text:"mp4_1080p",url:A}],
          [{text:"go-back",callback_data:"go-back"}]
          
        ]
      }
    }) 
    console.log(A)
    
    }); 
  
  
})
bot.action("webm_1080p",async(ctx)=>{
  ctx.deleteMessage()
  const axios = require('axios')
  const zx = await  axios.get('https://youtube-downloader3.herokuapp.com/video_info.php?url='+query1)
    .then((response) => {
    A= response.data.links[5].url
    ctx.telegram.sendMessage(ctx.chat.id,"youtube-downloads",{
      reply_markup:{
        inline_keyboard:[
          [{text:"mp4_1080p",url:A}],
          [{text:"go-back",callback_data:"go-back"}]
          
        ]
      }
    }) 
    console.log(A)
    
    }); 
 







})
})




console.log('Bot is up and running')

bot.launch()
