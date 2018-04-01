const {resolve, reject, errorOut} = require('../utils'), {getCollection} = require('../dbs'),
  pageCount = 10

let hotArticles = async (ctx) => {

  try {

    const [db, articles] = await getCollection('articles')

    const list = await articles.find({
      likeNum: {
        $gt: 10
      }
    }, {
      projection:{
        articleTitle: 1,
        articleId: 1,
        likeNum:1,
        _id:0
      }
    }).sort({likeNum: -1}).limit(pageCount).toArray()

    ctx.body = resolve(list)

  } catch (e) {
    errorOut(ctx, e)
  }

}


module.exports = {
  method:'get',
  name:'hotArticles',
  fn:hotArticles
}
