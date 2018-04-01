const {resolve, reject, errorOut, getNowDate, createErr} = require('../utils'), {insertData, getCollection,newID} = require('../dbs')

let setMessage = async (db,type,info) => {

  try{
    const [,message] = await getCollection('message',db)

    let data = {}

    const { userInfo,commentText,articleId,date,dateTime,systemInfo,senderId } = info
    let tmp
    switch (type) {
      case 1:

        tmp = await getArtInfo(db,articleId,commentText,userInfo,'')

        break;
      case 2:

        tmp = await getArtInfo(db,articleId,commentText,userInfo,senderId)

        break;
      default:
        tmp = {
          text:systemInfo
        }
    }

    tmp.type = type
    tmp.date = date
    tmp.dateTime = dateTime

    let { result } = await insertData({db,collection:message},tmp,'messageId')
  }
  catch(e){
    console.log(e)
  }



}


module.exports = setMessage


const getArtInfo = async (db,articleId,commentText,userInfo,userId) => {
  const [,articles2] = await getCollection('articles',db)
  const { articleTitle,autorId } = await articles2.findOne({articleId},{projection:{_id:0,autorId:1,articleTitle:1}})

  tmp = {
    commentUserId:userInfo.userId,
    commentUserName:userInfo.userName,
    text:commentText,
    originArticleId:articleId,
    originArticleTitle:articleTitle,
    userId:userId?userId:autorId

  }

  return tmp
}
