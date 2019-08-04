const { resolve, reject, errorOut, getClientIp } = require('../utils')

const fs = require('fs')

const child_process = require('child_process')

const gitHookCallBack = async (ctx) => {

    try {
        let { action } = ctx.request.body

        // fs.writeFile('./hook.json', JSON.stringify(ctx.request.body), () => {

        // })



        console.log('gitHookCallBack log----->', ctx.request.body)

        child_process.exec(`. ../bin/update.sh`, {
            cwd: __dirname
        }, (err, stdout) => {
            if (err) {
                console.log('push err:', err)
            }
            else {
                console.log('push err:', stdout)
            }
        })


        // if (action === 'push') {

        // }
        ctx.body = resolve('ok26')

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
