const router = require('koa-router')()
  const getControllers = require('../controllers'), {resolve, reject, checkLogin, errorOut} = require('../utils'),
    koaBody = require('koa-body'),
    path = require('path')

  const userAuth = async (ctx, next) => {

    try {
      const isLogin = await checkLogin(ctx)

      if (!isLogin) {
        ctx.body = reject('尚未登录', 9999)
      } else {
        delete isLogin.password
        ctx.user = isLogin
        await next()
      }
    } catch (e) {
      errorOut(ctx, e, 1000)
    }

  }

  router.prefix('/api')


  async function setRouter(){

    try{
      const controllers = await getControllers()


          controllers.forEach( v => {

            if(v.name !== 'uploadPhoto'){

              let method = router[v.method].bind(router)
              method('/'+ v.name, async (ctx, next) => {
                await v.fn(ctx)
              })
            }
            else {
              router.post('/' + v.name, koaBody({
                multipart: true,
                formidable: {
                  uploadDir: path.resolve(__dirname, '../uploads'),
                  keepExtensions: true,
                  maxFieldsSize: 1024 * 1024
                }
              }), async (ctx, next) => {

                await v.fn(ctx)

              })
            }

          })
    }
    catch(e){
       console.log(e)
    }


  }

  setRouter()


  router.use([
    '/setComment', '/editArticle','/logout','/getMessage','/delMessage','/setMessageBoard'
  ], userAuth)
  //
  // router.get('/', async (ctx, next) => {
  //
  //   await ctx.render('index', {title: 'api!'})
  // })
  //
  // router.get('/musics', async (ctx, next) => {
  //   await musics(ctx)
  // })
  //
  // router.post('/login', async (ctx, next) => {
  //   await login(ctx)
  // })
  //
  // router.post('/editArticle', async (ctx, next) => {
  //   await editArticle(ctx)
  // })
  //
  // router.post('/register', async (ctx, next) => {
  //   await register(ctx)
  // })
  //
  // router.post('/setComment', async (ctx, next) => {
  //   await setComment(ctx)
  // })
  //
  // router.post('/logout', async (ctx, next) => {
  //   await logout(ctx)
  // })
  //
  // router.post('/delMessage', async (ctx, next) => {
  //   await delMessage(ctx)
  // })
  // router.post('/setMessageBoard', async (ctx, next) => {
  //   await setMessageBoard(ctx)
  // })
  //
  // router.get('/getMessageBoard', async (ctx, next) => {
  //   await getMessageBoard(ctx)
  // })
  //
  // router.get('/queryArticleList', async (ctx, next) => {
  //   await queryArticleList(ctx)
  // })
  //
  // router.get('/nearComments', async (ctx, next) => {
  //   await nearComments(ctx)
  // })
  //
  // router.get('/nearArticles', async (ctx, next) => {
  //   await nearArticles(ctx)
  // })
  // router.get('/getMessage', async (ctx, next) => {
  //   await getMessage(ctx)
  // })
  //
  // router.get('/queryArticle', async (ctx, next) => {
  //   await queryArticle(ctx)
  // })
  //
  // router.get('/counts', async (ctx, next) => {
  //   await counts(ctx)
  // })
  //
  // router.get('/hotArticles', async (ctx, next) => {
  //   await hotArticles(ctx)
  // })
  //
  // router.post('/uploadPhoto', koaBody({
  //   multipart: true,
  //   formidable: {
  //     uploadDir: path.resolve(__dirname, '../uploads'),
  //     keepExtensions: true,
  //     maxFieldsSize: 1 * 1024 * 1024
  //   }
  // }), async (ctx, next) => {
  //
  //   await uploadPhoto(ctx)
  //
  // })

  module.exports = router
