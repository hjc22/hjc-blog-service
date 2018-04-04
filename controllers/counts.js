const { resolve,reject,errorOut } = require('../utils'),
      { getCollection } = require('../dbs')


let counts = async (ctx) => {

  try {

     const [db,counts] = await getCollection('counts'),[,tags] = await getCollection('tags',db),[,comments] = await getCollection('comments',db),[,articles] = await getCollection('articles',db)

     const list = await counts.find({},{projection:{_id:0}}).toArray(),tagCount = await tags.count(),commentCount = await comments.count(),articleCount = await articles.count()

     list[0].num = tagCount

     list[2].num = 7

     list[3].num = articleCount

     list[4].num = commentCount

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
