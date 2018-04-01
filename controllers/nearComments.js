const { resolve,reject,errorOut,getClientIp } = require('../utils'),
      { getCollection } = require('../dbs')


let nearComments = async (ctx) => {

  try {

     const [,comments] = await getCollection('comments')

     const commentsAllList = await comments.find({},{projection:{_id:0}}).sort({dateTime:-1}).limit(10).toArray()

     ctx.body = resolve(commentsAllList)

  }
  catch(e){
    errorOut(ctx,e)
  }

}



module.exports = {
  method:'get',
  name:'nearComments',
  fn:nearComments
}
