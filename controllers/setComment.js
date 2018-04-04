const {resolve, reject, errorOut, getNowDate, createErr} = require('../utils'), {insertData, getCollection,newID} = require('../dbs'),idName = 'commentId',setMessage = require('../common/setMessage')

let setComment = async (ctx) => {

  try {
    const {
        commentText,
        type,
        senderId,
        senderName,
        articleId,
        commentId
      } = ctx.request.body,
      userInfo = ctx.user

    if (!commentText)
      throw createErr('参数错误[commentText]')
    if (!articleId)
      throw createErr('参数错误[articleId]')
    if (!userInfo)
      throw createErr('尚未登录', 9999)

    const [db, comments] = await getCollection('comments'),{userId,userName,userImg,grade} = userInfo,commentUser = {userId,userName,userImg,grade}

    let data = !commentId
      ? {
        commentText,
        articleId,
        userInfo:commentUser,
        replyList: [],
        date: getNowDate(),
        dateTime: + new Date(),
        likeNum: 0,
        noLikeNum: 0
      }
      : {
        senderId,
        senderName,
        articleId,
        commentText,
        userInfo:commentUser,
        date: getNowDate(),
        dateTime: + new Date(),
        likeNum: 0,
        noLikeNum: 0,
        parentCommentId: commentId
      }
    let result
    if(commentId){
      let [,ids] = await getCollection('ids',db)

      let idData = await newID(ids,data,idName)
      data.commentId = idData[idName]

      await comments.updateOne({commentId},{$push:{replyList:data}})

      result = data.commentId

    }
    else {
      let insertResult = await insertData({
        db,
        collection: comments
      }, data, 'commentId')
      data.commentId = insertResult.result

    }


    setMessage(db,commentId?2:1,data)

    ctx.body = resolve(data)



  } catch (e) {
    errorOut(ctx, e)
  }

}

module.exports = {
  method:'post',
  name:'setComment',
  fn:setComment,
  auth:true
}
