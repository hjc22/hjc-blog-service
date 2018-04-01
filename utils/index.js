
const crypto = require('crypto')
const { hget } = require('../dbs/redis')

const resolve = (data) => ({
  code:1,
  data
})


const reject = (error,code = 2) => ({
  code,
  error
})

const errorOut = (ctx,e,code) => {
  console.error(e)
  code = e.errorCode || code
  ctx.body = reject(e.message+'(๑´ڡ`๑)',code)
}

const html_encode = (str) => {
    let s="";
    if (str.length == 0) return "";
    s = str.replace(/&/g, "&gt;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\n/g, "<br>");
    return s;
}

const html_decode = (str) => {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&gt;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br>/g, "\n");
    return s;
}

const dejson = (str) => {
    return JSON.parse(str)
}


const createSha256 = value => {
  const hash = crypto.createHmac('sha256', value)
         .update('I love lijianmin')
         .digest('hex');
  return hash
}

const checkLogin = async ctx => {
   const token = ctx.cookies.get('token')
   if(!token) return false
   const { result } = await hget('USER_LOGIN_STATUS',token)

   // console.log(result)

   return result
}

const getNowDate = () => {

  let nowDate = new Date(),y,m,d

  y = nowDate.getFullYear()

  m = nowDate.getMonth() + 1

  d = nowDate.getDate()


  return [y,to10(m),to10(d)].join('-')
}

const to10 = (val) => {
  if(val<10) return '0'+val
  return val
}

const createErr = (msg,code) => {

  let err = new Error(msg)
  if(code) err.errorCode = code

  return err

}

const getClientIp = (req) => {
    return req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
  }

module.exports = {
  reject,
  resolve,
  html_encode,
  html_decode,
  dejson,
  createSha256,
  checkLogin,
  errorOut,
  getNowDate,
  createErr,
  getClientIp
}
