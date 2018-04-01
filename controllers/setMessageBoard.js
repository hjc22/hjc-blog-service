const {resolve, reject, errorOut, getNowDate, createErr} = require('../utils'), {insertData, getCollection,newID} = require('../dbs'),idName = 'boardId',setMessage = require('../common/setMessage')

let setMessageBoard = async (ctx) => {

  try {
    const {
        commentText,
        type,
        senderId,
        senderName,
        boardId
      } = ctx.request.body,
      userInfo = ctx.user

    if (!commentText)
      throw createErr('参数错误[commentText]')
    if (!userInfo)
      throw createErr('尚未登录', 9999)

    const [db, messageBoard] = await getCollection('messageBoard')

    let data = !boardId
      ? {
        commentText,
        // articleId,
        userInfo,
        replyList: [],
        date: getNowDate(),
        dateTime: + new Date(),
        likeNum: 0,
        noLikeNum: 0
      }
      : {
        senderId,
        senderName,
        // articleId
        commentText,
        userInfo,
        date: getNowDate(),
        dateTime: + new Date(),
        likeNum: 0,
        noLikeNum: 0,
        parentCommentId: boardId
      }
    let result
    if(boardId){
      let [,ids] = await getCollection('ids',db)

      let idData = await newID(ids,data,idName)
      data.boardId = idData[idName]

      await messageBoard.updateOne({boardId},{$push:{replyList:data}})

      result = data.boardId

    }
    else {
      let insertResult = await insertData({
        db,
        collection: messageBoard
      }, data, 'boardId')
      data.boardId = insertResult.result

    }


    // setMessage(db,boardId?2:1,data)

    ctx.body = resolve(data)



  } catch (e) {
    errorOut(ctx, e)
  }

}


module.exports = {
  method:'post',
  name:'setMessageBoard',
  fn:setMessageBoard
}
