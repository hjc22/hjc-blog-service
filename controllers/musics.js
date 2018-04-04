const cheerio = require('cheerio'),
      fs = require('fs'),
      axios = require('axios'),
      { resolve,reject,errorOut } = require('../utils'),
      { setRedis,getRedis,setCtx } = require('../dbs/redis'),
      music_redis = 'MUSIC_DATA'
let musics = async (ctx) => {

  try{

    let { result } = await getRedis(music_redis)

    if(!result){
      const html = await axios.get('http://music.163.com/discover/toplist?id=3778678')

      const $ = cheerio.load(html.data,{decodeEntities:false})

      let url = $('#song-list-pre-cache textarea').html()

      result = JSON.parse(url).slice(0,10)

      await setRedis(music_redis,JSON.stringify(result),259200,1)
    }
    else {
      result = JSON.parse(result)
    }


    ctx.body = resolve(result)
  }
  catch(e){
    errorOut(ctx,e)
  }

}




module.exports = {
  method:'get',
  name:'musics',
  fn:musics
}
