const { resolve, reject, errorOut, getClientIp } = require('../utils')


const gitHookCallBack = async (ctx) => {

    try {
        let { action } = ctx.request.body

        console.log('gitHookCallBack log----->', ctx.request.body)

        if (action === 'push') {

        }
        ctx.body = resolve('ok')

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
