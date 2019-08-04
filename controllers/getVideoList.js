const { resolve, reject, errorOut, createErr } = require('../utils'),
    { getCollection } = require('../dbs')


const axios = require('axios')
const getVideoList = async (ctx) => {

    try {

        const count = 6

        const result = await axios({
            method: 'GET',
            url: `https://aweme-eagle-hl.snssdk.com/aweme/v1/feed/?version_code=6.2.0&pass-region=1&pass-route=1&js_sdk_version=1.16.3.4&app_name=aweme&vid=CB4F8878-3F96-48C3-80CF-D80B0E4A4C3C&app_version=6.2.0&device_id=59487412690&channel=App%20Store&mcc_mnc=46001&aid=1128&screen_width=1242&openudid=83871ce3e194e14cbdcbfa410072ce4573685ee5&os_api=18&ac=WIFI&os_version=12.4&device_platform=iphone&build_number=62022&device_type=iPhone11,6&iid=73467861817&idfa=ED4886CA-6F5C-43DF-8612-E02946DDC2BC&volume=0.06&count=${count}&longitude=116.3661469209558&feed_style=0&filter_warn=0&address_book_access=0&min_cursor=0&latitude=40.08369187002337&type=0&gps_access=3&pull_type=1&max_cursor=0&mas=016ec74ccc4a358330c090ec8d9aa0ff6e38b6e4ffe5210cf75281&as=a275fad4b6729d7e164939&ts=1564913190`,
            headers: {
                'Host': 'aweme-eagle-hl.snssdk.com',
                'Connection': 'keep-alive',
                // 'x-Tt-Token': '00fad6bb5a556c0a7cdee27e68a5c792d1ee17f0fa25d1f14040321301df9d189ce7749bc15a65dd818a64fadac621dc0819',
                'sdk-version': '1',
                'User-Agent': 'Aweme 6.2.0 rv:62022 (iPhone; iOS 12.4; zh_CN) Cronet',
                'Accept-Encoding': 'gzip, deflate',
                // 'Cookie': 'sid_guard=fad6bb5a556c0a7cdee27e68a5c792d1%7C1564913155%7C21600%7CSun%2C+04-Aug-2019+16%3A05%3A55+GMT;uid_tt=8862d7772a169b115f42a2246626a6e6; sid_tt=fad6bb5a556c0a7cdee27e68a5c792d1; sessionid=fad6bb5a556c0a7cdee27e68a5c792d1; odin_tt=f94ad7ecc2b21cdd49b34626492f5ff3b85cc375071886e08f2213674fe2110bbbba76f750d18bc3e0b0cbc56ad14a3748e08316bae35eb262cbfe529612edbd; install_id=73467861817; ttreq=1$104bd938e422c8e32f43a2bfa09319ff0a37069d',
                'X-Khronos': '1564913191',
                'X-Pods': '',
                'X-Gorgon': '830000000000a7a5c79ab28e07ee877b386785d18b49c68ea7f2'
            }
        })

        console.log(result.data)



        ctx.body = resolve(result.data)



    } catch (e) {
        errorOut(ctx, e)
    }

}

module.exports = {
    method: 'get',
    name: 'getVideoList',
    fn: getVideoList
}
