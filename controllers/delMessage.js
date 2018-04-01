const {resolve, reject, errorOut, createErr} = require('../utils'), {getCollection} = require('../dbs'),
  idName = 'commentId'
const getMeesage = async (ctx) => {

  try {
    const {messageId} = ctx.request.body

    if(!messageId) throw createErr('参数错误[messageId]')

    const [db, message] = await getCollection('message')


    await message.removeOne({messageId})

    ctx.body = resolve()

  } catch (e) {
    errorOut(ctx, e)
  }

}


module.exports = {
  method:'post',
  name:'getMeesage',
  fn:getMeesage
}
