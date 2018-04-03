

const { resolve,reject,createSha256,errorOut,getNowDate,createErr } = require('../utils'),
      { getCollection,insertData } = require('../dbs')



let setLike = async (ctx) => {

  try {
      let { articleId,commentId } = ctx.request.body,{userId} = ctx.user

      articleId = parseInt(articleId)


      const [db,likes] = await getCollection('likes')


      let art = await likes.findOne({articleId},{projection:{userIds:1}})

      if(!art){
        await likes.insert({articleId,likeNum:1,userIds:[userId]})
      }
      else {

        if(art.userIds.indexOf(userId) !== -1) throw createErr('你已经点赞过了')


        await likes.updateOne({articleId},{$inc:{likeNum:1},$push:{userIds:userId}})
      }





      ctx.body = resolve()


  }
  catch(e){
    errorOut(ctx,e)
  }

}




module.exports = {
  method:'post',
  name:'setLike',
  fn:setLike,
  auth:true
}
