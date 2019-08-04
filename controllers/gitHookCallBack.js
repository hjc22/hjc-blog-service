const { resolve, reject, errorOut, getClientIp } = require('../utils')


const gitHookCallBack = async (ctx) => {

    try {
        let { action } = ctx.request.body

        console.log('gitHookCallBack log----->', ctx.request.body)
        console.log('gitHookCallBack-action log----->', ctx.request.body.action)


        if (action === 'push') {

        }
        ctx.body = resolve('ok2')

    }
    catch (e) {
        errorOut(ctx, e);
    }

}



module.exports = {
    method: 'post',
    name: 'gitHookCallBack',
    fn: gitHookCallBack
}
