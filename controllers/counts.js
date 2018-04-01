const { resolve,reject,errorOut } = require('../utils'),
      { getCollection } = require('../dbs')


let counts = async (ctx) => {

  try {

     const [,counts] = await getCollection('counts')

     const list = await counts.find({},{projection:{_id:0}}).toArray()

     ctx.body = resolve(list)

  }
  catch(e){
    errorOut(ctx,e)
  }

}




module.exports = {
  method:'get',
  name:'counts',
  fn:counts
}
