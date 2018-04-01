const axios = require('axios'),
      { html_decode,dejson } = require('../utils'),
      fs = require('fs'),
      request = require('superagent'),
      { resolve,reject,errorOut } = require('../utils')


const uploadPhoto = async (ctx) => {

  try {
    if(!ctx.request.body) throw new Error('no file')
    const files = ctx.request.body.files.img

    if(files.size > 1 * 1024 * 1024) throw new Error('图片大小不能超过1M哦！(๑´ڡ`๑)')

    let body = await getTaobao(files.path)
    ctx.body = resolve(body)

  } catch (e) {

    errorOut(ctx,e)

  }

}


const getTaobao= async path => {
     let stream = fs.createReadStream(path)

     var req = await request.post('http://open.taobao.com/upload.do').attach('Filedata', path)


     fs.unlink(path,err => {
       if(err) console.error(err)
     })

     return `http:${dejson(html_decode(req.text)).imgUrl}`

}

module.exports = {
  method:'post',
  name:'uploadPhoto',
  fn:uploadPhoto
}
