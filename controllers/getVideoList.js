const { resolve, reject, errorOut, createErr } = require('../utils'),
    { getCollection } = require('../dbs')


const axios = require('axios')
const getVideoList = async (ctx) => {

    try {

        const count = 6


        // await new Promise((resolve) => {
        //     setTimeout(() => { resolve() }, 3000)
        // })

        // const result = await axios({
        //     method: 'GET',
        //     url: `https://aweme-eagle-hl.snssdk.com/aweme/v1/feed/?version_code=6.2.0&pass-region=1&pass-route=1&js_sdk_version=1.16.3.4&app_name=aweme&vid=CB4F8878-3F96-48C3-80CF-D80B0E4A4C3C&app_version=6.2.0&device_id=59487412690&channel=App%20Store&mcc_mnc=46001&aid=1128&screen_width=1242&openudid=83871ce3e194e14cbdcbfa410072ce4573685ee5&os_api=18&ac=4G&os_version=12.4&device_platform=iphone&build_number=62022&device_type=iPhone11,6&iid=73467861817&idfa=ED4886CA-6F5C-43DF-8612-E02946DDC2BC&volume=0.25&count=6&longitude=116.3659667877868&feed_style=0&user_id=96924822780&address_book_access=0&min_cursor=0&is_cold_start=1&type=0&filter_warn=0&gps_access=3&latitude=40.08361341577706&pull_type=0&max_cursor=0&mas=01947835ef398f30d985f13db1dd3c5300c89cc73c5eab1cde2288&as=a24598d4636bfd2a5e5437&ts=1565428403`,
        //     headers: {
        //         'Host': 'aweme-eagle-hl.snssdk.com',
        //         'Connection': 'keep-alive',
        //         // 'x-Tt-Token': '00fad6bb5a556c0a7cdee27e68a5c792d1ee17f0fa25d1f14040321301df9d189ce7749bc15a65dd818a64fadac621dc0819',
        //         'sdk-version': '1',
        //         'User-Agent': 'Aweme 6.2.0 rv:62022 (iPhone; iOS 12.4; zh_CN) Cronet',
        //         'Accept-Encoding': 'gzip, deflate',
        //         // 'Cookie': 'sid_guard=fad6bb5a556c0a7cdee27e68a5c792d1%7C1564913155%7C21600%7CSun%2C+04-Aug-2019+16%3A05%3A55+GMT;uid_tt=8862d7772a169b115f42a2246626a6e6; sid_tt=fad6bb5a556c0a7cdee27e68a5c792d1; sessionid=fad6bb5a556c0a7cdee27e68a5c792d1; odin_tt=f94ad7ecc2b21cdd49b34626492f5ff3b85cc375071886e08f2213674fe2110bbbba76f750d18bc3e0b0cbc56ad14a3748e08316bae35eb262cbfe529612edbd; install_id=73467861817; ttreq=1$104bd938e422c8e32f43a2bfa09319ff0a37069d',
        //         'X-Khronos': '1565428403',
        //         'X-Pods': '',
        //         'X-Gorgon': '8300000000009d6e1526b28e0730e69a2b7f85d18b49d6abcc3c'
        //     }
        // })

        // const data = result.data

        // console.log(data)

        // if (data.status_code) {
        //     throw createErr('上层服务故障', 4000)
        // }
        const data = [
            {
                "id": "6723431373232672012",
                "desc": "好可怕，小伙将饮料瓶放置桌上，不小心掉在地上后瞬间炸掉。@抖音小助手",
                "seller": "新湖南",
                "video": {
                    "duration": 9930,
                    "width": 720,
                    "height": 1280,
                    "fid": "https://aweme-hl.snssdk.com/aweme/v1/play/?video_id=v0300f900000bl76qdq92mhgjmg32oj0&line=0&ratio=720p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1&h265=1&adapt720=1"
                }
            },
            {
                "id": "6723355422767467780",
                "desc": "",
                "seller": "李",
                "video": {
                    "duration": 4230,
                    "width": 720,
                    "height": 640,
                    "fid": "https://aweme-hl.snssdk.com/aweme/v1/play/?video_id=v0200f8b0000bl72ftf3cp5apdudvj40&line=0&ratio=540p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1&h265=1"
                }
            },
            {
                "id": "6723092699454491907",
                "desc": "我老爸怕我吃苦不让我来非洲，我没听他的话🤭🤭，这下好了，哈哈哈哈😂，天天笑我的黑板烂，桌子破...",
                "seller": "非洲的海岸边",
                "video": {
                    "duration": 16070,
                    "width": 720,
                    "height": 1280,
                    "fid": "https://aweme-hl.snssdk.com/aweme/v1/play/?video_id=v0300faa0000bl6ji838cv2e0t5c65jg&line=0&ratio=540p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1&h265=1"
                }
            },
            {
                "id": "6721938973456862477",
                "desc": "生活压力大？？？打开这款游戏，拿起机枪疯狂扫射，不要太嗨！",
                "seller": "全民吃鸡枪战",
                "video": {
                    "duration": 23190,
                    "width": 640,
                    "height": 360,
                    "fid": "https://aweme-hl.snssdk.com/aweme/v1/play/?video_id=v02033e50000bl41fi6gnco8hu32umeg&line=0&ratio=720p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1"
                }
            },
            {
                "id": "6722428769115639054",
                "desc": "",
                "seller": "人生苦短",
                "video": {
                    "duration": 6530,
                    "width": 576,
                    "height": 1024,
                    "fid": "https://aweme-hl.snssdk.com/aweme/v1/play/?video_id=v0300f990000bl5dqlc74cl3fa6md88g&line=0&ratio=540p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1&h265=1"
                }
            },
            {
                "id": "6721984598450015501",
                "desc": "当男朋友喝了我喝过的水",
                "seller": "杨倩",
                "video": {
                    "duration": 8130,
                    "width": 720,
                    "height": 1280,
                    "fid": "https://aweme-hl.snssdk.com/aweme/v1/play/?video_id=v0200f340000bl4rm2a7u0r1prs5pnkg&line=0&ratio=720p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1&h265=1&adapt720=1"
                }
            },
            {
                "id": "6719820406833810701",
                "desc": "我真的差点离开这美丽的世界了😂#晋江",
                "seller": "🌬      李姐姐呀！",
                "video": {
                    "duration": 11150,
                    "width": 720,
                    "height": 1280,
                    "fid": "https://aweme-hl.snssdk.com/aweme/v1/play/?video_id=v0200f650000bl0r6389lr7f24mb0cn0&line=0&ratio=720p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1&h265=1&adapt720=1"
                }
            },
            {
                "id": "6719476843453484292",
                "desc": "#乔碧萝殿下   我要到10万订阅才可以漏脸！",
                "seller": "吴姊嫣",
                "video": {
                    "duration": 15490,
                    "width": 720,
                    "height": 1280,
                    "fid": "https://aweme-hl.snssdk.com/aweme/v1/play/?video_id=v0300f6b0000bl0ibbbkkqv75dpngka0&line=0&ratio=720p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1&h265=1&adapt720=1"
                }
            },
            {
                "id": "6723207705449729294",
                "desc": "人不可貌相滴！",
                "seller": "张雅倩",
                "video": {
                    "duration": 10120,
                    "width": 720,
                    "height": 1280,
                    "fid": "https://aweme-hl.snssdk.com/aweme/v1/play/?video_id=v0200fdd0000bl6q3jfrri6ar8ku10c0&line=0&ratio=720p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1&h265=1&adapt720=1"
                }
            },
            {
                "id": "6720883790031473932",
                "desc": "2018.8.4号，三点47分。你们分手多久了",
                "seller": "满天星",
                "video": {
                    "duration": 4600,
                    "width": 720,
                    "height": 1280,
                    "fid": "https://aweme-hl.snssdk.com/aweme/v1/play/?video_id=v0200f580000bl2u9f9q4do1isbaq710&line=0&ratio=540p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1&h265=1"
                }
            },
            {
                "id": "6723229702741429508",
                "desc": "一个女人带个女儿在娘家住了两年。外面的指指点点从没停过。女儿也长大了常常问她亲什么时候回来？我都不知道怎么回答",
                "seller": "李美妮",
                "video": {
                    "duration": 8200,
                    "width": 576,
                    "height": 1024,
                    "fid": "https://aweme-hl.snssdk.com/aweme/v1/play/?video_id=v0300f3a0000bl6rbi3ee8lm11ee6f40&line=0&ratio=540p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1&h265=1"
                }
            },
            {
                "id": "6723330871706815758",
                "desc": "卡点咯",
                "seller": "✨🌈碩～✨",
                "video": {
                    "duration": 6070,
                    "width": 720,
                    "height": 1280,
                    "fid": "https://aweme-hl.snssdk.com/aweme/v1/play/?video_id=v0200f5b0000bl713gegnco2fruj3ikg&line=0&ratio=720p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1&h265=1&adapt720=1"
                }
            },
            {
                "id": "6719880690470587660",
                "desc": "你们以后回消息给我麻溜点#欠揍",
                "seller": "MOMO_99",
                "video": {
                    "duration": 8170,
                    "width": 720,
                    "height": 1280,
                    "fid": "https://aweme-hl.snssdk.com/aweme/v1/play/?video_id=v0200f950000bl14vr6gncobgcas4r20&line=0&ratio=720p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1&h265=1&adapt720=1"
                }
            }
        ]


        // console.log(data.aweme_list)
        // ctx.body = resolve(dyFilter(data.aweme_list))

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
    method: 'get',
    name: 'getVideoList',
    fn: getVideoList
}
