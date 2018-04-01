// const musics = require('./musics')
// const uploadPhoto = require('./uploadPhoto')
// const login = require('./login')
// const queryArticleList = require('./articleList')
// const editArticle = require('./editArticle')
// const hotArticles = require('./hotArticles')
// const nearArticles = require('./nearArticles')
// const queryArticle = require('./queryArticle')
// const counts = require('./counts')
// const setComment = require('./setComment')
// const register = require('./register')
// const nearComments = require('./nearComments')
// const logout = require('./logout')
// const getMessage = require('./getMessage')
// const delMessage = require('./delMessage')
// const setMessageBoard = require('./setMessageBoard')
// const getMessageBoard = require('./getMessageBoards')
const fs = require('fs'),
      path = require('path'),
      { promisify } = require('util'),
      readdir = promisify(fs.readdir)




async function getControllers(){
  const controllersName = await readdir(__dirname)



  let controllers = []

  controllersName.forEach( v => {

    if(v === 'index.js') return
    let controller = require(path.join(__dirname,v))
    controllers.push(controller)
  })

  return controllers
}



module.exports = getControllers



// module.exports = {
//   musics,
//   uploadPhoto,
//   login,
//   editArticle,
//   queryArticleList,
//   hotArticles,
//   nearArticles,
//   queryArticle,
//   counts,
//   setComment,
//   register,
//   nearComments,
//   logout,
//   getMessage,
//   delMessage,
//   setMessageBoard,
//   getMessageBoard
// }
