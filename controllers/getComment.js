const { resolve,reject,errorOut,getClientIp } = require('../utils'),
      { getCollection } = require('../dbs'),pageCount = 10


let getComment = async (ctx) => {

  try {
     let { articleId,page = 1 } = ctx.request.query,skip = (page - 1) * pageCount

     articleId = parseInt(articleId)

     if(!articleId) throw new Error('文章ID错误哦')

     const [,comments] = await getCollection('comments')

     let data = {onePageCount:pageCount,page}

     const count = await comments.find({articleId}).count()

     let list = []
     if(count){
       list = await comments.find({articleId},{projection:{_id:0}}).skip(skip).limit(pageCount).toArray()
       data.allCount = count
     }
     else data.allCount = 0

     data.list = list


     ctx.body = resolve(data)

  }
  catch(e){
    errorOut(ctx,e)
  }

}



module.exports = {
  method:'get',
  name:'getComment',
  fn:getComment
}
