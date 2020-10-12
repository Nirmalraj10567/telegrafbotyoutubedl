



const { Telegraf } = require('telegraf')

const bot = new Telegraf("1323936121:AAHixzno7g60DXEcJ7x0PfgAQZiOAKlnZqU")
const { DownloaderHelper } = require("node-downloader-helper");

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.command("text", async (ctx)=>{
    const query1 = ctx.message.text.split(" ")[1];
    console.log(query1)
  //  const query2 = ctx.message.reply.text
    


  const dl = new DownloaderHelper(query1,"./downloads");
 const ff= await dl.on("end", () =>ctx.telegram.sendDocument(ctx.chat.id,{source:"./"+dl.getDownloadPath()}))  
  //ctx.telegram.sendDocument(ctx.chat.id,{source:dl.skip.})
  //ctx.reply(dl.getDownloadPath()))//console.log(dl.getDownloadPath()))
  console.log(ff)
  dl.start()
    //console.log(query1)
    //const dl = new DownloaderHelper(query1, __dirname);
    //dl.on("end", () => console.log(dl.getDownloadPath(),dl.eventNames())
    //ctx.reply("download completed to server",dl.getDownloadPath())
   // )//console.log("Download Completed");
    //dl.start()
   // ctx.telegram.sendDocument(ctx.chat.id,{source:dl.skip.})
    //return 

  //  ctx.telegram.sendDocument(ctx.chat.id,{source:"./"+query1})
    console.log(query1)
    //console.log(query2)


})


bot.on("inline_query",async(ctx)=>{
    query = ctx.inlineQuery.query

 //const aqq = await ctx.telegram.sendDocument(ctx.chat.id,`./${query}`)
})
bot.command("youtube",(ctx)=>
{  
  const query1 = ctx.message.text.split(" ")[1];
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
bot.action("mp4_720p",async(ctx)=>{
  ctx.deleteMessage()
const axios = require('axios')
const zx = await axios.get('https://youtube-downloader3.herokuapp.com/video_info.php?url='+query1)
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




bot.launch()
