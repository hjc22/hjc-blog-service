const { resolve, reject, errorOut, createErr } = require('../utils'),
    { getCollection } = require('../dbs')


const axios = require('axios')
const getVideoList = async (ctx) => {

    try {

        const data = {
            catArr: {
                11: [
                    12, 14, 15, 16
                ],
                1: [
                    12, 14, 15, 16
                ],
                2: [
                    12, 14, 15, 16
                ],
                12: [
                    12, 14, 15, 16
                ],
                15: [
                    12, 14, 15, 16
                ]
            },
            catName: {
                1: '吃饭',
                2: '服饰',
                11: '购物',
                12: '旅行',
                14: '美甲',
                15: '开心',
                16: '玩乐',
            }

        }

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
    name: 'cat',
    fn: getVideoList
}
