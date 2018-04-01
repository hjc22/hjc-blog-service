const {resolve, reject, errorOut} = require('../utils'), {getCollection} = require('../dbs'),
  pageCount = 5

let nearArticles = async (ctx) => {

  try {

    const [db, articles] = await getCollection('articles')

    const list = await articles.find({}, {
      projection:{
        articleTitle: 1,
        articleId: 1,
        date:1,
        _id:0
      }
    }).sort({dateMs: -1}).limit(pageCount).toArray()

    ctx.body = resolve(list)

  } catch (e) {
    errorOut(ctx, e)
  }

}


module.exports = {
  method:'get',
  name:'nearArticles',
  fn:nearArticles
}
