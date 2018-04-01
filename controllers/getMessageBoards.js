const { resolve,reject,errorOut,getClientIp } = require('../utils'),
      { getCollection } = require('../dbs'),pageCount = 20


let getMessageBoard = async (ctx) => {

  try {

      let { page = 1,type = -1 } = ctx.request.query,skip = (page - 1) * pageCount
      page = parseInt(page)


      let data = {onePageCount:pageCount,page}

      const [db,messageBoard] = await getCollection('messageBoard')

      const count = await messageBoard.count()

      let list = []
      if(count){
        list = await messageBoard.find({},{projection:{_id:0}}).skip(skip).limit(pageCount).toArray()

        data.allCount = count

      }
      else {
        data.allCount = 0
      }

      data.list = list



      ctx.body = resolve(data)

  }
  catch(e){
    errorOut(ctx,e)
  }

}



module.exports = {
  method:'get',
  name:'getMessageBoard',
  fn:getMessageBoard
}
