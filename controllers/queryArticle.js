const { resolve,reject,errorOut,getClientIp } = require('../utils'),
      { getCollection } = require('../dbs')


let queryArticle = async (ctx) => {

  try {
     let { articleId } = ctx.request.query

     articleId = parseInt(articleId)

     if(!articleId) throw new Error('文章ID错误哦')

     const [db,articles] = await getCollection('articles'),[,comments] = await getCollection('comments',db)

     const now = await articles.findOne({articleId},{projection:{_id:0}})

     let prev = await articles.find({articleId:{$lte:articleId-1}},{projection:{_id:0,articleTitle:1,articleId:1}}).sort({articleId:-1}).limit(1).toArray()

     let next = await articles.find({articleId:{$gte:articleId+1}},{projection:{_id:0,articleTitle:1,articleId:1}}).limit(1).toArray()


     if(!now) throw new Error('查不到这篇文章')


     const commentsAllList = await comments.find({articleId},{projection:{_id:0}}).toArray()

     now.commentsList = commentsAllList



     prev = prev[0]

     next = next[0]


     if(prev) now.prevArticle = {title:prev.articleTitle,articleId:prev.articleId}
     if(next) now.nextArticle = {title:next.articleTitle,articleId:next.articleId}

     ctx.body = resolve(now)

  }
  catch(e){
    errorOut(ctx,e)
  }

}



module.exports = {
  method:'get',
  name:'queryArticle',
  fn:queryArticle
}
