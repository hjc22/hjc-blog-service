

const { resolve,reject,createSha256,errorOut } = require('../utils'),
      { hdel } = require('../dbs/redis'),
      { getCollection } = require('../dbs')

let logout = async (ctx) => {

  try {
      const userInfo = ctx.user

      const { token } = userInfo


      ctx.cookies.set('token',token,{ maxAge:0,signed:false})

      await hdel('USER_LOGIN_STATUS',[token],1)


      ctx.body = resolve()


  }
  catch(e){
    errorOut(ctx,e)
  }

}



module.exports = {
  method:'post',
  name:'logout',
  fn:logout,
  auth:true
}
