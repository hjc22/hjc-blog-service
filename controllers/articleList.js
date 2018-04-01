



const { resolve,reject ,errorOut} = require('../utils'),
      { setRedis,getRedis,hset } = require('../dbs/redis'),
      { getCollection } = require('../dbs'),
      pageCount = 10


let queryArticleList = async (ctx) => {

  try {

     let { page = 1,type = -1,tagId } = ctx.request.query,skip = (page - 1) * pageCount
     page = parseInt(page)
     tagId = parseInt(tagId)

     let data = {onePageCount:pageCount,page}

     // type -1 时间反向排序， 1 正向
     const [db,articles] = await getCollection('articles')
     let findParams = {},count = 0
     tagId && (findParams.tagId = tagId)



     if(tagId){
       findParams.tagId = tagId
       count = await articles.find(findParams).count(true)

     }
     else {
       count = await articles.count()
     }

     if(count) {

       const list = await articles.find(findParams,{
         projection:{
           _id:0,
           commentsList:0,
           nextArticle:0,
           prevArticle:0
         }
       }).sort({articleId:type}).skip(skip).limit(pageCount).toArray()
       data.allCount = count
       data.list = list
     }
     else {
       data.allCount = 0
       data.list = []
     }

     ctx.body = resolve(data)

  }
  catch(e){
    errorOut(ctx,e)
  }

}



module.exports = {
  method:'get',
  name:'queryArticleList',
  fn:queryArticleList
}
