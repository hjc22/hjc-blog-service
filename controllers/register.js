

const { resolve,reject,createSha256,errorOut,getClientIp } = require('../utils'),
      { setRedis,getRedis,hset } = require('../dbs/redis'),
      { getCollection,insertData } = require('../dbs'),
      uuid = require('node-uuid'),
      loginTime = 3 * 3600 * 24


let register = async (ctx) => {

  try {
      const { userName,password,email } = ctx.request.body

      let pwdreg=/^[a-zA-Z]\w{5,17}$/,namereg=/.{3,10}/,emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

      if(!userName) throw new Error('用户名不能为空')
      if(!namereg.test(userName)) throw new Error('用户名需要3-10个字符')
      if(!password) throw new Error('密码不能为空')
      if(!pwdreg.test(password)) throw new Error('密码需要首字母，6-18个字符')
      if(!email) throw new Error('邮箱不能为空')
      if(!emailReg.test(email)) throw new Error('邮箱不规范')


      const [db,users] = await getCollection('users'),userInfo = await users.findOne({$or:[{userName},{email}]})

      if(userInfo){
        if(userInfo.userName === userName) throw new Error('用户名重复')
        if(userInfo.email === email) throw new Error('邮箱重复')
      }

      const pwdSha256 = createSha256(password)

      const token = uuid.v1()


      let data = {
        userName,
        email,
        userImg:'',
        grade:1,
        articleNum:0,
        commentNum:0,
        ip:getClientIp(ctx.req),
        password:pwdSha256,
        payQrs:{},
        token
      }


      let { result } = await insertData({db,collection:users},data,'userId')


      ctx.cookies.set('token',token,{ maxAge:loginTime * 1000,signed:false})

      data.userId = result

      await hset('USER_LOGIN_STATUS',{[token]:data},loginTime,1)

      delete password

      delete _id

      ctx.body = resolve({...data,userId:result,token})


  }
  catch(e){
    errorOut(ctx,e)
  }

}



module.exports = {
  method:'post',
  name:'register',
  fn:register
}
