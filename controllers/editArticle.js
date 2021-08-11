

const { resolve,reject,createSha256,errorOut,getNowDate } = require('../utils'),
      { getCollection,insertData } = require('../dbs')

const tags = [
    {name:'javaScript',id:1},
    {name:'nodeJs',id:2}
  ]



let editArticle = async (ctx) => {

  try {
      const { articleTitle,titleImg = '',tagId,articleText,simpleText } = ctx.request.body,userInfo = ctx.user

      if(userInfo.userId !== 1 && userInfo.userId !== 13 ) throw new Error('抱歉，你没有发表权限(๑´ڡ`๑)')
      if(!articleTitle) throw new Error('没有文章标题(๑´ڡ`๑)')
      if(!articleText) throw new Error('没有文章内容(๑´ڡ`๑)')

      const articleData = {
        articleTitle,
        titleImg,
        tagId,
        articleText,
        simpleText,
        autor:userInfo.userName,
        autorId:userInfo.userId,
        likeNum:0,
        tag:tags.find(v => v.id === tagId).name,
        date:getNowDate(),
        dateMs:+new Date(),
        seeNum:0,
        commentNum:0,
        jobPersons:0,
        prevArticle:{},
        nextArticle:{},
        commentsList:[]
      }


      const [db,articles] = await getCollection('articles'),isArt = await articles.findOne({articleTitle})

      if(isArt) throw new Error('已有同名的文章(๑´ڡ`๑)')

      const { result } = await insertData({db,collection:articles},articleData,'articleId')



      ctx.body = resolve(result)


  }
  catch(e){
    console.error('edit---', e);
    errorOut(ctx,e)
  }

}




module.exports = {
  method:'post',
  name:'editArticle',
  fn:editArticle,
  auth:true
}
