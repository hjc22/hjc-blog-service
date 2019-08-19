const { resolve, reject, errorOut, createErr } = require('../utils'),
    { getCollection } = require('../dbs')


const axios = require('axios')
const getVideoList = async (ctx) => {

    try {

        const data = [
            '美食', '购物',
            '美食', '购物',
            '美食', '购物',
            '美食', '购物',
            '美食', '购物',
            '美食', '购物',
            '美食', '购物',
            '美食', '购物',
        ]

        ctx.body = resolve(data)



    } catch (e) {
        errorOut(ctx, e)
    }

}


function dyFilter(list) {
    return list.map(v => {
        return {
            id: v.aweme_id,
            desc: v.desc,
            seller: v.author.nickname,
            video: {
                duration: v.video.duration,
                width: v.video.width,
                height: v.video.height,
                fid: v.video.play_addr.url_list[0]
            }
        }
    })

}

module.exports = {
    method: 'post',
    name: 'hotkeyword',
    fn: getVideoList
}
