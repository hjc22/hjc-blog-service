const { resolve,reject,errorOut,getClientIp } = require('../utils'),
      { getCollection } = require('../dbs')


let getComment = async (ctx) => {

  try {
     let { articleId } = ctx.request.query

     articleId = parseInt(articleId)

     if(!articleId) throw new Error('文章ID错误哦')

     const [,comments] = await getCollection('comments')


     const commentsAllList = await comments.find({articleId},{projection:{_id:0}}).toArray()



     ctx.body = resolve(commentsAllList)

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
