const {resolve, reject, errorOut, createErr} = require('../utils'), {getCollection} = require('../dbs'),idName = 'commentId'

const getMessage = async (ctx) => {

  try {
    const userInfo = ctx.user

    if (!userInfo)
      throw createErr('尚未登录', 9999)

    const [db, message] = await getCollection('message')


    const list = await message.find({userId:userInfo.userId},{projection:{_id:0}}).toArray()



    ctx.body = resolve(list)



  } catch (e) {
    errorOut(ctx, e)
  }

}



module.exports = {
  method:'get',
  name:'getMessage',
  fn:getMessage,
  auth:true
}
