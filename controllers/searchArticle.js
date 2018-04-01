



const { resolve,reject ,errorOut} = require('../utils'),
      { setRedis,getRedis,hset } = require('../dbs/redis'),
      { getCollection } = require('../dbs')


let searchArticle = async (ctx) => {

  try {

     let { articleTitle } = ctx.request.query


       const list = await articles.find({

       },{
         projection:{
           _id:0,
           commentsList:0,
           nextArticle:0,
           prevArticle:0
         }
       }).toArray()


     ctx.body = resolve(data)

  }
  catch(e){
    errorOut(ctx,e)
  }

}



module.exports = {
  method:'get',
  name:'searchArticle',
  fn:searchArticle
}
