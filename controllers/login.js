

const { resolve,reject,createSha256,errorOut } = require('../utils'),
      { setRedis,getRedis,hset } = require('../dbs/redis'),
      { getCollection } = require('../dbs'),
      uuid = require('node-uuid'),
      loginTime = 3 * 3600 * 24,
      errorText = '用户名或密码错误(๑´ڡ`๑)'


let login = async (ctx) => {

  try {
      const { userName,password } = ctx.request.body

      if(!userName) throw new Error(errorText)
      if(!password) throw new Error(errorText)

      const pwdSha256 = createSha256(password)

      const [db,users] = await getCollection('users'),userInfo = await users.findOne({userName:userName},{projection:{
        _id:0,
      }})

      if(!userInfo) throw new Error(errorText)
      if(userInfo.password !== pwdSha256) throw new Error(errorText)

      delete userInfo.password

      const token = uuid.v1()

      ctx.cookies.set('token',token,{ maxAge:loginTime * 1000,signed:false})

      await hset('USER_LOGIN_STATUS',{[token]:userInfo},loginTime,1)


      ctx.body = resolve({...userInfo,token})


  }
  catch(e){
    errorOut(ctx,e)
  }

}




module.exports = {
  method:'post',
  name:'login',
  fn:login
}
