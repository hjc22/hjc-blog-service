const {resolve, reject, errorOut, createErr} = require('../utils'), {getCollection} = require('../dbs'),idName = 'commentId'

const getTags = async (ctx) => {

  try {

    const [db, tags] = await getCollection('tags')


    const list = await tags.find({},{projection:{_id:0}}).toArray()



    ctx.body = resolve(list)



  } catch (e) {
    errorOut(ctx, e)
  }

}

module.exports = {
  method:'get',
  name:'getTags',
  fn:getTags
}
