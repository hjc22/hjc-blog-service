<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="baidu-site-verification" content="cNhJHKEzsD" />
<meta property="qc:admins" content="27354635321361636375" />
<link rel="canonical" href="https://music.163.com/discover/toplist?id=3778678">
<meta name="applicable-device" content="pc">
<title>云音乐热歌榜 - 排行榜 - 网易云音乐</title>
<meta name="keywords" content="云音乐热歌榜，排行榜，榜单，网易云音乐" />
<meta name="description" content="云音乐热歌榜为你提供最权威最及时的榜单，最近更新：03月01日（刚刚更新）" />
<script type="text/javascript">
var GDownloadLink="";
var GDevice = "phone";
var GFrom="";
var GClient="";
var GPlatform="ios";
var GRef = '';
var GInApp = false;
var GMobile = false;
var GAbroad = false;
var GUser={};
var GAllowRejectComment = false;
var GEnc = true;
var GEnvType = "online";
var GWebpSupport = "1";
window.NEJ_CONF = {p_csrf:{cookie:'__csrf',param:'csrf_token'}};
//线上环境参数配置
window.MUSIC_CONFIG = {
pushHost:'web.push.126.net',
pushPort:'6003',
pushKey:'3b97981848064bbabeaaf2fb1eab7368'
};
GUtil = {
getBase:function(){
return location.protocol+'//'+location.hostname;
},
getPathAndHash:function(_url){//获取URL path 之后的所有内容,并将/#/替换成/m/使之成为path的一部分
if(!_url) return '';
var _reg0 = /^https?:\/\/.*?\//i,
_reg1 = /\/?#\/?/i;
return _url.replace(_reg0,'/').replace(_reg1,'/m/');
},
composeRefer:function(_url,_ref){//对所有的页面请求都加上ref参数表示被嵌套的来源
if(!_ref) return _url;
var _hi = _url.indexOf('#'),
_si = _url.indexOf('?');
if(_si>0&&(_si<_hi||_hi<0)){
return _url.substring(0,_si+1)+'ref='+_ref+'&'+_url.substring(_si+1);
}else if(_hi>0&&(_si<0||_si>_hi)){
return _url.substring(0,_hi)+'?ref='+_ref+_url.substring(_hi);
}else{
return _url+'?ref='+_ref;
}
}
};(function(){
var _ua = window.navigator.userAgent,
_isMobile = /(mobile|mobi|wap|iphone)/i.test(_ua),
_isAndroid = /android/i.test(_ua),
_isIpad = /(ipad)/i.test(_ua),
_igList = [/^\/xiami$/,/^\/live$/],//不需要以单页面打开的列表，比如某些活动页面
_pn = location.pathname,
_idx = _pn.lastIndexOf('/'),
_pReg = /\s*(\w+)\s*=\s*(\d+)\s*/,
_redirect2mobile = function() {
var _type,_murl,
_id = 0,
_hash = location.hash,
_mReg = /^#\/?m?\/(share|song|playlist|djradio|dj|program|album|mv|artist|topic|radio|zysf|drqp|qp|activity|store|user|event|video|discover\/toplist)(\/(\d+))?/,
_base = location.protocol+'//'+location.hostname,
_sindex = _hash.lastIndexOf('?'),
_search = _sindex>-1?_hash.substring(_sindex+1):'',
_match = _mReg.exec(_hash);
// 无hash || 不匹配 || 匹配但是商品之外不带参数 || 匹配且是排行榜
if (!_hash.length || !_match || (_match[1] != 'store' && !_search) || /share|discover\/toplist/.test(_match[1])) {
// 有hash && (没有参数 || 排行榜)
if ((!_search || /share|discover\/toplist/.test(_match[1])) && _hash.length) {
location.href = _base + '/' + _hash.replace('#', 'm');
} else {
location.href = _base + '/m/';
}
return;
}
_type = _match[1];
_id = _match[3];
if (_type == 'dj') _type = 'program';
if (_type == 'store') {
_murl = /^#\/store\/(product|concert)\/detail/.test(_hash) ? _hash.replace('#/store', '/store/m') : '/store/m/product/index';
} else {
_murl = '/' + _type + '?' + (_id ? 'id=' + _id + '&': '') + _search;
}
location.href = _base + _murl;
};
if(_isMobile || _isAndroid || _isIpad){
_redirect2mobile();
return;
}
if(!_pn||_pn=='/') return;
for(var i in _igList){
if(_igList[i].test(_pn)) return;
}
if(top==self){
location.href = '/#'+GUtil.getPathAndHash(location.href);
return;
}
//搜索引擎过来的内容页连接
if(top==self&&/^\/static\/(song|playlist|album|artist)/i.test(_pn)){
location.href = '/#'+_pn.substring(0,_idx).replace('/static/','/')+'?id='+_pn.substring(_idx+1);
}
})();
(function(){
var _addEvent = function(_node,_type,_cb){
if(_node.addEventListener){
_node.addEventListener(_type,_cb);
}else if(_node.attachEvent){
_node.attachEvent('on'+_type,_cb);
}
},
_onAnchorClick = function(_event){//截获所有<a>标签的点击事件，自定义页面的跳转
_event = _event||window.event;
var _el = _event.target||_event.srcElement,
_base = location.protocol+'//'+location.host;
while(_el&&_el!=document){
if(_el.tagName&&_el.tagName.toLowerCase()=='a'){
//fix ie6下有时javascript:;不能阻止默认事件的bug.
if(_el.href.indexOf('javascript:')>=0){
!!_event.preventDefault
? _event.preventDefault()
: _event.returnValue = !1;
return;
}
if(_event.button==2) return;//ff 右键会触发click事件
//商城有独立地顶栏了，排除掉。但会员、数字专辑、单曲的商品、订单页仍保持主站frame，
//这些url往往是通过/vip2, /payfee这样的地址跳转的，也没有问题，如果真的有，URL用#配置就好了
var _path = _el.href.replace(/^https?:\/\/.*?\//i, '/').split(/[?#]/)[0];
if(_path.indexOf('/store/')==0) return;
if(_path.indexOf('/m/at/')==0) return;
//新窗口打开的链接、云音乐单页面形式的链接、站外的链接不做拦截处理。
if(_el.target=='_blank'
||_el.target=='blank'
||_isNotSameHost(_el.href)
||_el.href==_base
||_el.href.indexOf(_base+'/#')>=0) return;
!!_event.preventDefault
? _event.preventDefault()
: _event.returnValue = !1;
location.dispatch2(_el.href);
break;
}else{
_el = _el.parentNode;
}
}
},
_isNotSameHost = function(_href){
var _same = true;
if(_href.charAt(0)!='/'){
var _index = _href.indexOf('//'+location.hostname);
if(_index > 0){
var _index2 = _href.indexOf('?');
if(_index2 > 0 && _index2 < _index){
_same = false;
}
}else{
_same = false;
}
}
return !_same;
};
_addEvent(document,'click',_onAnchorClick);
//扩展一个js中直接使用的页面跳转的方法，以拦截js中的页面跳转行为
location.dispatch2 = function(_url,_replace){
var delegate = false;
try{
delegate = !!top.GDispatcher;
}catch(e){
delegate = false;
}
if(delegate){
top.GDispatcher.dispatch(_url,_replace);
}else{
_url = GUtil.composeRefer(_url,GRef);
//邮箱音乐盒中，每次链接的跳转都要将proxy.html的地址合并到hash中
if(GRef&&GRef=='mail'){
var _hindex,_sindex,
_reg = /(https?:\/\/.+\/proxy.html)/,
_hreg = /#(.*?)$/,
_href = decodeURIComponent(location.href);
if(!_reg.test(decodeURIComponent(_url))&&_reg.test(_href)){
_hindex = _url.indexOf('#');
_sindex = _url.lastIndexOf('?');
if(_hindex>0){
_url = _url+(_sindex>_hindex?'&':'?')+'proxy='+encodeURIComponent(RegExp.$1);
}else{
_url = _url+'#proxy='+encodeURIComponent(RegExp.$1);
}
}
}
if(_replace){
location.replace(_url);
}else{
location.href = _url;
}
}
};
})();(function(){
if(window.addEventListener){
window.addEventListener('scroll', onScroll)
}else{
window.attachEvent('onscroll', onScroll)
}
try{
top.scrollTopbar(0);
}catch(e){
}
function onScroll(){
try{
top.scrollTopbar(Math.max(document.body.scrollTop, document.documentElement.scrollTop));
}catch(e){
//ignore
}
};
})();</script>
<base href="//music.163.com/" target="_top">
<link rel="shortcut icon" href="//s1.music.126.net/music.ico?v1" />
<link href="//s2.music.126.net/web/s/core.css?713bd6c0d4612d250056ca7765d52fd9" type="text/css" rel="stylesheet"/><link href="//s2.music.126.net/web/s/pt_frame.css?8d03555b47a0b59129a7fd7573e8bfbe" type="text/css" rel="stylesheet"/>
</head>
<body>
<div data-module="discover" data-sub="toplist" id="g_top" class="m-top">&nbsp;</div>
<div id="g_nav" class="m-subnav">&nbsp;</div>
<script>
try{
top.matchNav("discover", "toplist");
}catch(e){
}
</script>
<div id="toplist" class="g-bd3 g-bd3-1 f-cb">
<div class="g-sd3 g-sd3-1">
<div class="n-minelst n-minelst-2">
<h2 class="f-ff1">云音乐特色榜</h2>
<ul class="f-cb">
<li data-res-id="19723756" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=19723756">
<img src="http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40" alt="云音乐飙升榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=19723756" class="s-fc0">云音乐飙升榜</a></p>
<p class="s-fc4">每天更新</p>
</div>
</li>
<li data-res-id="3779629" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=3779629">
<img src="http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40" alt="云音乐新歌榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=3779629" class="s-fc0">云音乐新歌榜</a></p>
<p class="s-fc4">每天更新</p>
</div>
</li>
<li data-res-id="2884035" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=2884035">
<img src="http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=40y40" alt="网易原创歌曲榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=2884035" class="s-fc0">网易原创歌曲榜</a></p>
<p class="s-fc4">刚刚更新</p>
</div>
</li>
<li data-res-id="3778678" data-res-action="href" class="mine z-selected">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=3778678">
<img src="http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40" alt="云音乐热歌榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=3778678" class="s-fc0">云音乐热歌榜</a></p>
<p class="s-fc4">刚刚更新</p>
</div>
</li>
</ul>
<h2 class="scd f-ff1">全球媒体榜</h2>
<ul class="f-cb">
<li data-res-id="1978921795" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=1978921795">
<img src="http://p1.music.126.net/5tgOCD4jiPKBGt7znJl-2g==/18822539557941307.jpg?param=40y40" alt="云音乐电音榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=1978921795" class="s-fc0">云音乐电音榜</a></p>
<p class="s-fc4">每周五更新</p>
</div>
</li>
<li data-res-id="991319590" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=991319590">
<img src="http://p1.music.126.net/RChr5NydlXafIV1GVEHJdg==/19073228207465342.jpg?param=40y40" alt="云音乐嘻哈榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=991319590" class="s-fc0">云音乐嘻哈榜</a></p>
<p class="s-fc4">每周五更新</p>
</div>
</li>
<li data-res-id="2023401535" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=2023401535">
<img src="http://p1.music.126.net/0_6_Efe9m0D0NtghOxinUg==/109951163089272193.jpg?param=40y40" alt="英国Q杂志中文版周榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=2023401535" class="s-fc0">英国Q杂志中文版周榜</a></p>
<p class="s-fc4">每周三更新</p>
</div>
</li>
<li data-res-id="2006508653" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=2006508653">
<img src="http://p1.music.126.net/CUqQp33MZf_m0BwH4u0V6A==/109951163078922993.jpg?param=40y40" alt="电竞音乐榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=2006508653" class="s-fc0">电竞音乐榜</a></p>
<p class="s-fc4">每周五更新</p>
</div>
</li>
<li data-res-id="10520166" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=10520166">
<img src="http://p1.music.126.net/qN-sDLqehN1oHGyov-0EZw==/109951163068669685.jpg?param=40y40" alt="云音乐新电力榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=10520166" class="s-fc0">云音乐新电力榜</a></p>
<p class="s-fc4">每周五更新</p>
</div>
</li>
<li data-res-id="71385702" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=71385702">
<img src="http://p1.music.126.net/vttjtRjL75Q4DEnjRsO8-A==/18752170813539664.jpg?param=40y40" alt="云音乐ACG音乐榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=71385702" class="s-fc0">云音乐ACG音乐榜</a></p>
<p class="s-fc4">刚刚更新</p>
</div>
</li>
<li data-res-id="71384707" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=71384707">
<img src="http://p1.music.126.net/BzSxoj6O1LQPlFceDn-LKw==/18681802069355169.jpg?param=40y40" alt="云音乐古典音乐榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=71384707" class="s-fc0">云音乐古典音乐榜</a></p>
<p class="s-fc4">刚刚更新</p>
</div>
</li>
<li data-res-id="180106" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=180106">
<img src="http://p1.music.126.net/VQOMRRix9_omZbg4t-pVpw==/18930291695438269.jpg?param=40y40" alt="UK排行榜周榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=180106" class="s-fc0">UK排行榜周榜</a></p>
<p class="s-fc4">每周一更新</p>
</div>
</li>
<li data-res-id="60198" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=60198">
<img src="http://p1.music.126.net/EBRqPmY8k8qyVHyF8AyjdQ==/18641120139148117.jpg?param=40y40" alt="美国Billboard周榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=60198" class="s-fc0">美国Billboard周榜</a></p>
<p class="s-fc4">每周三更新</p>
</div>
</li>
<li data-res-id="3812895" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=3812895">
<img src="http://p1.music.126.net/A61n94BjWAb-ql4xpwpYcg==/18613632348448741.jpg?param=40y40" alt="Beatport全球电子舞曲榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=3812895" class="s-fc0">Beatport全球电子舞曲榜</a></p>
<p class="s-fc4">刚刚更新</p>
</div>
</li>
<li data-res-id="27135204" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=27135204">
<img src="http://p1.music.126.net/6O0ZEnO-I_RADBylVypprg==/109951162873641556.jpg?param=40y40" alt="法国 NRJ Vos Hits 周榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=27135204" class="s-fc0">法国 NRJ Vos Hits 周榜</a></p>
<p class="s-fc4">每周五更新</p>
</div>
</li>
<li data-res-id="21845217" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=21845217">
<img src="http://p1.music.126.net/H4Y7jxd_zwygcAmPMfwJnQ==/19174383276805159.jpg?param=40y40" alt="KTV唛榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=21845217" class="s-fc0">KTV唛榜</a></p>
<p class="s-fc4">每周五更新</p>
</div>
</li>
<li data-res-id="11641012" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=11641012">
<img src="http://p1.music.126.net/83pU_bx5Cz0NlcTq-P3R3g==/18588343581028558.jpg?param=40y40" alt="iTunes榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=11641012" class="s-fc0">iTunes榜</a></p>
<p class="s-fc4">每周一更新</p>
</div>
</li>
<li data-res-id="60131" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=60131">
<img src="http://p1.music.126.net/Rgqbqsf4b3gNOzZKxOMxuw==/19029247741938160.jpg?param=40y40" alt="日本Oricon周榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=60131" class="s-fc0">日本Oricon周榜</a></p>
<p class="s-fc4">每周三更新</p>
</div>
</li>
<li data-res-id="120001" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=120001">
<img src="http://p1.music.126.net/54vZEZ-fCudWZm6GH7I55w==/19187577416338508.jpg?param=40y40" alt="Hit FM Top榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=120001" class="s-fc0">Hit FM Top榜</a></p>
<p class="s-fc4">每周一更新</p>
</div>
</li>
<li data-res-id="112463" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=112463">
<img src="http://p1.music.126.net/wqi4TF4ILiTUUL5T7zhwsQ==/18646617697286899.jpg?param=40y40" alt="台湾Hito排行榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=112463" class="s-fc0">台湾Hito排行榜</a></p>
<p class="s-fc4">每周一更新</p>
</div>
</li>
<li data-res-id="112504" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=112504">
<img src="http://p1.music.126.net/JPh-zekmt0sW2Z3TZMsGzA==/18967675090783713.jpg?param=40y40" alt="中国TOP排行榜（港台榜）"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=112504" class="s-fc0">中国TOP排行榜（港台榜）</a></p>
<p class="s-fc4">每周一更新</p>
</div>
</li>
<li data-res-id="64016" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=64016">
<img src="http://p1.music.126.net/2klOtThpDQ0CMhOy5AOzSg==/18878614648932971.jpg?param=40y40" alt="中国TOP排行榜（内地榜）"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=64016" class="s-fc0">中国TOP排行榜（内地榜）</a></p>
<p class="s-fc4">每周一更新</p>
</div>
</li>
<li data-res-id="10169002" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=10169002">
<img src="http://p1.music.126.net/YQsr07nkdkOyZrlAkf0SHA==/18976471183805915.jpg?param=40y40" alt="香港电台中文歌曲龙虎榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=10169002" class="s-fc0">香港电台中文歌曲龙虎榜</a></p>
<p class="s-fc4">每周五更新</p>
</div>
</li>
<li data-res-id="1899724" data-res-action="href" class="mine ">
<div class="item f-cb">
<div class="left">
<a class="avatar" href="/discover/toplist?id=1899724">
<img src="http://p1.music.126.net/_nwkQTFtOdAjFvOI8Wg7Tg==/18922595114302109.jpg?param=40y40" alt="中国嘻哈榜"/>
<span class="msk"></span>
</a>
</div>
<p class="name"><a href="/discover/toplist?id=1899724" class="s-fc0">中国嘻哈榜</a></p>
<p class="s-fc4">每周五更新</p>
</div>
</li>
</ul>
</div>
</div>
<div class="g-mn3">
<div class="g-mn3c">
<div class="g-wrap">
<div class="m-info m-info-rank f-cb">
<div class="cover u-cover u-cover-rank"><img src="http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=150y150"><span class="msk"></span></div>
<div class="cnt">
<div class="cntc m-info">
<div class="hd f-cb">
<h2 class="f-ff2">云音乐热歌榜</h2>
</div>
<div class="user f-cb">
<i class="u-icn u-icn-57"></i><span class="sep s-fc3">最近更新：03月01日</span> <span class="s-fc4">（刚刚更新）</span>
</div>
<div class="btns f-cb">
<a href="javascript:;" class="u-btn2 u-btn2-2 u-btni-addply f-fl" hidefocus="true" title="播放"
data-res-type="13"
data-res-id="3778678"
data-res-action="play"
data-res-from="31"
data-res-data="3778678"><i><em class="ply"></em>播放</i></a>
<a href="javascript:;" class="u-btni u-btni-add" hidefocus="true" title="添加到播放列表"
data-res-type="13"
data-res-id="3778678"
data-res-action="addto"
data-res-from="31"
data-res-data="3778678"></a>
<a id="toplist-fav" data-res-id="3778678" data-res-type="13" data-res-action="fav" data-res-data="2360171" class="u-btni u-btni-fav" href="javascript:;"><i>(2360171)</i></a>
<a id="toplist-share" data-res-id="3778678" data-res-type="13" data-res-action="share" data-res-name="云音乐热歌榜" data-res-author="网易云音乐" data-res-data="http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg" class="u-btni u-btni-share" href="javascript:;"><i>(13566)</i></a>
<a data-res-id="3778678" data-res-type="13" data-res-action="download" class="u-btni u-btni-dl" href="javascript:;"><i>下载</i></a>
<a data-res-id="3778678" data-res-action="comment" href="javascript:;" class="u-btni u-btni-cmmt j-cmt"><i>(<span id="comment-count">170170</span>)</i></a>
</div>
</div>
</div>
</div>
</div>
<div class="g-wrap12">
<div class="u-title u-title-1 f-cb"><h3><span class="f-ff2">歌曲列表</span></h3><span class="sub s-fc3"><span>200</span>首歌</span><div class="more s-fc3">播放：<strong class="s-fc6" id="play-count">1622364544</strong>次</div></div>
<div id="song-list-pre-cache" data-key="song_toplist-3778678" data-simple="0" data-pvnamed="0">
<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>
<ul class="f-hide"><li><a href="/song?id=526464293">空空如也 </a></li><li><a href="/song?id=514761281">白羊</a></li><li><a href="/song?id=486218073">BINGBIAN病变</a></li><li><a href="/song?id=531051217">等你下课 (with 杨瑞代)</a></li><li><a href="/song?id=523251118">说散就散</a></li><li><a href="/song?id=513791211">广东十年爱情故事</a></li><li><a href="/song?id=812400">PLANET</a></li><li><a href="/song?id=531295576">最美的期待</a></li><li><a href="/song?id=452986458">红昭愿</a></li><li><a href="/song?id=526307800">123我爱你</a></li><li><a href="/song?id=461347998">Something Just Like This</a></li><li><a href="/song?id=504017347">Just Like This (Original Mix)</a></li><li><a href="/song?id=483671599">追光者</a></li><li><a href="/song?id=492145159">Superstar</a></li><li><a href="/song?id=536624791">玻璃糖</a></li><li><a href="/song?id=108478">醉赤壁</a></li><li><a href="/song?id=451703096">Shape of You</a></li><li><a href="/song?id=440208643">Psycho (Pt. 2)</a></li><li><a href="/song?id=472361096">Despacito (Remix)</a></li><li><a href="/song?id=494865824">Havana</a></li><li><a href="/song?id=480580003">再也没有</a></li><li><a href="/song?id=37653063">Please Don't Go</a></li><li><a href="/song?id=465920905">全部都是你</a></li><li><a href="/song?id=33035611">Time</a></li><li><a href="/song?id=496870798">带你去旅行</a></li><li><a href="/song?id=432506345">童话镇</a></li><li><a href="/song?id=448393515">尽头</a></li><li><a href="/song?id=29004400">烟火里的尘埃</a></li><li><a href="/song?id=482988834">男孩</a></li><li><a href="/song?id=507116418">那个人</a></li><li><a href="/song?id=479574796">文爱</a></li><li><a href="/song?id=529823971">Ei Ei</a></li><li><a href="/song?id=518076124">差一步</a></li><li><a href="/song?id=418602088">Nevada</a></li><li><a href="/song?id=34229976">Panama</a></li><li><a href="/song?id=436514312">成都</a></li><li><a href="/song?id=445665094">过客</a></li><li><a href="/song?id=33887645">回忆总想哭</a></li><li><a href="/song?id=28285910">岁月神偷</a></li><li><a href="/song?id=529668356">你要的全拿走</a></li><li><a href="/song?id=515143305">9420</a></li><li><a href="/song?id=468513829">说散就散</a></li><li><a href="/song?id=474567580">远走高飞</a></li><li><a href="/song?id=501220770">Wannabe (Spice Girls Cover)</a></li><li><a href="/song?id=421423806">小半</a></li><li><a href="/song?id=29561031">Welcome To New York</a></li><li><a href="/song?id=26092806">Take me hand</a></li><li><a href="/song?id=38592976">Dream It Possible</a></li><li><a href="/song?id=489506275">非酋</a></li><li><a href="/song?id=470795480">Something Just Like This</a></li><li><a href="/song?id=486111543">7538(Me U-Remix)</a></li><li><a href="/song?id=29759733">可乐</a></li><li><a href="/song?id=418603077">告白气球</a></li><li><a href="/song?id=35270898">少林英雄</a></li><li><a href="/song?id=518094151">Зая</a></li><li><a href="/song?id=488876810">Welcome to New York</a></li><li><a href="/song?id=539941039">佛系少女</a></li><li><a href="/song?id=139774">The truth that you leave</a></li><li><a href="/song?id=31445772">理想三旬</a></li><li><a href="/song?id=440353010">#Lov3 #Ngẫu Hứng</a></li><li><a href="/song?id=536622918">暴风雨</a></li><li><a href="/song?id=471871012">是个好人</a></li><li><a href="/song?id=439915614">刚好遇见你</a></li><li><a href="/song?id=534530792">病变remix(女声版)</a></li><li><a href="/song?id=401249910">We Don't Talk Anymore</a></li><li><a href="/song?id=2919622">I Am You</a></li><li><a href="/song?id=27759600">Five Hundred Miles</a></li><li><a href="/song?id=509313150">Sakura Tears</a></li><li><a href="/song?id=466794339">Something Just Like This</a></li><li><a href="/song?id=27646205">安和桥</a></li><li><a href="/song?id=36990266">Faded</a></li><li><a href="/song?id=33337002">Welcome To New York (Karaoke Version)</a></li><li><a href="/song?id=482395261">我们不一样</a></li><li><a href="/song?id=520581566">体面</a></li><li><a href="/song?id=534541484">爱不得</a></li><li><a href="/song?id=523251474">说散就散</a></li><li><a href="/song?id=509728806">How Long</a></li><li><a href="/song?id=516657051">像风一样</a></li><li><a href="/song?id=28193075">在人间</a></li><li><a href="/song?id=514765154">世界上的另一个我</a></li><li><a href="/song?id=32019002">Beautiful Now</a></li><li><a href="/song?id=515453363">All Falls Down</a></li><li><a href="/song?id=190499">给你们</a></li><li><a href="/song?id=488256319">九张机</a></li><li><a href="/song?id=525278524">无问</a></li><li><a href="/song?id=28694864">Wicked Wonderland</a></li><li><a href="/song?id=513357140">Heartbeat (Nightcore) [PØRPEL Remix]</a></li><li><a href="/song?id=522510615">千禧</a></li><li><a href="/song?id=521602388">缺氧</a></li><li><a href="/song?id=31445554">七月上</a></li><li><a href="/song?id=423228325">Closer</a></li><li><a href="/song?id=441491080">Oops</a></li><li><a href="/song?id=469699266">最美情侣</a></li><li><a href="/song?id=511678913">Sucker for You</a></li><li><a href="/song?id=491943068">流浪</a></li><li><a href="/song?id=496869422">打上花火</a></li><li><a href="/song?id=38576323">春风十里</a></li><li><a href="/song?id=30394891">Seve</a></li><li><a href="/song?id=479598964">椿</a></li><li><a href="/song?id=533259686">BINGBIAN病变（原版）</a></li><li><a href="/song?id=536622304">Lemon</a></li><li><a href="/song?id=509508063">退</a></li><li><a href="/song?id=517565282">多想留在你身边</a></li><li><a href="/song?id=499308706">短发</a></li><li><a href="/song?id=208902">红色高跟鞋</a></li><li><a href="/song?id=534064010">不必说抱歉</a></li><li><a href="/song?id=132975">爱的就是你</a></li><li><a href="/song?id=536097172">盲目自信</a></li><li><a href="/song?id=420125990">西安人的歌</a></li><li><a href="/song?id=186016">晴天</a></li><li><a href="/song?id=501467216">Papillon</a></li><li><a href="/song?id=150430">就是爱你</a></li><li><a href="/song?id=31654455">Victory</a></li><li><a href="/song?id=465675773">Don't Wanna Know/We Don't Talk Anymore</a></li><li><a href="/song?id=480426313">There For You</a></li><li><a href="/song?id=26429346">We Can't Stop</a></li><li><a href="/song?id=133998">老街</a></li><li><a href="/song?id=287063">我怀念的</a></li><li><a href="/song?id=479408220">凉凉</a></li><li><a href="/song?id=27867140">房间</a></li><li><a href="/song?id=468882985">Shape of You</a></li><li><a href="/song?id=407677607">我想</a></li><li><a href="/song?id=32507038">演员</a></li><li><a href="/song?id=519913462">做我的猫</a></li><li><a href="/song?id=28815250">平凡之路</a></li><li><a href="/song?id=29750825">Es rappelt im Karton</a></li><li><a href="/song?id=72408">天后</a></li><li><a href="/song?id=409941242">다시 너를</a></li><li><a href="/song?id=471385043">暧昧</a></li><li><a href="/song?id=33291435">Samsara</a></li><li><a href="/song?id=474581010">BOOM</a></li><li><a href="/song?id=29850531">不找了</a></li><li><a href="/song?id=36492599">Trip</a></li><li><a href="/song?id=506092035">The Spectre</a></li><li><a href="/song?id=529834699">大哥别杀我</a></li><li><a href="/song?id=513357806">再见</a></li><li><a href="/song?id=451169473">骗自己PT.2 (Remix-下酒菜)</a></li><li><a href="/song?id=534067514">粉红色的回忆</a></li><li><a href="/song?id=29787426">Freaks (Radio Edit)</a></li><li><a href="/song?id=534540498">藏</a></li><li><a href="/song?id=515601126">Shivers</a></li><li><a href="/song?id=30431376">易燃易爆炸</a></li><li><a href="/song?id=410654865">GQ</a></li><li><a href="/song?id=254285">下个，路口，见</a></li><li><a href="/song?id=25706282">夜空中最亮的星</a></li><li><a href="/song?id=526857315">I Wanna Get Love</a></li><li><a href="/song?id=462895657">Young Dumb & Broke</a></li><li><a href="/song?id=493705537">Thunder</a></li><li><a href="/song?id=408814900">借我</a></li><li><a href="/song?id=308353">钟无艳</a></li><li><a href="/song?id=30953009">See You Again (feat. Charlie Puth)</a></li><li><a href="/song?id=27583305">Here With You</a></li><li><a href="/song?id=68450">小情歌</a></li><li><a href="/song?id=460578140">感谢你曾来过</a></li><li><a href="/song?id=484365611">Parties</a></li><li><a href="/song?id=493784861">走心小卖家</a></li><li><a href="/song?id=448184048">化身孤岛的鲸</a></li><li><a href="/song?id=423227267">Bomba (Radio Edit) (Remix Klass)</a></li><li><a href="/song?id=410801653">啷个哩个啷</a></li><li><a href="/song?id=30352891">牵丝戏</a></li><li><a href="/song?id=432506809">致姗姗来迟的你 </a></li><li><a href="/song?id=540253253">Like I Do</a></li><li><a href="/song?id=29019227">Sugar</a></li><li><a href="/song?id=534542490">奴隶</a></li><li><a href="/song?id=534065323">Sincerely</a></li><li><a href="/song?id=25718007">你瞒我瞒</a></li><li><a href="/song?id=34383004">Without U</a></li><li><a href="/song?id=519136840">只只</a></li><li><a href="/song?id=536502758">离人愁</a></li><li><a href="/song?id=520459701">想把你留在这里</a></li><li><a href="/song?id=468517666">失恋重修手册</a></li><li><a href="/song?id=4386589">I Just Wanna Run</a></li><li><a href="/song?id=445546453">浮生</a></li><li><a href="/song?id=437292675">我要你</a></li><li><a href="/song?id=26060065">Counting Stars</a></li><li><a href="/song?id=427142481">Clsr (Aash Mehta Flip)</a></li><li><a href="/song?id=371362">小跳蛙</a></li><li><a href="/song?id=540861947">尾站天国</a></li><li><a href="/song?id=474922552">白山茶</a></li><li><a href="/song?id=473817398">Attention</a></li><li><a href="/song?id=511391907">PUMA</a></li><li><a href="/song?id=461519272">勉为其难</a></li><li><a href="/song?id=441491828">水星记</a></li><li><a href="/song?id=31168303">儿子，我是你爸爸</a></li><li><a href="/song?id=25906124">不要说话</a></li><li><a href="/song?id=82486">春风吹</a></li><li><a href="/song?id=450853439">遥不可及的你</a></li><li><a href="/song?id=447925059">阿刁</a></li><li><a href="/song?id=409916250">The Ocean (Radio Edit)</a></li><li><a href="/song?id=525238797">REFRESH</a></li><li><a href="/song?id=287035">遇见</a></li><li><a href="/song?id=515269424">Wolves</a></li><li><a href="/song?id=28796621">Toca Toca (Radio Edit)</a></li><li><a href="/song?id=4341314">Intro</a></li><li><a href="/song?id=579954">恋爱サーキュレーション</a></li><li><a href="/song?id=471403427">我喜欢上你时的内心活动</a></li><li><a href="/song?id=509518010">我多喜欢你，你会知道</a></li><li><a href="/song?id=355992">追梦赤子心</a></li><li><a href="/song?id=25788001">其实都没有</a></li><li><a href="/song?id=504624714">青柠</a></li></ul>
<textarea style="display:none;">[{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":526464293,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":37087074,"name":"空空如也","picUrl":"http://p1.music.126.net/84FJjDgb51TmRqixaUpshg==/109951163094476391.jpg","tns":[],"pic_str":"109951163094476391","pic":109951163094476391},"artists":[{"id":9255,"name":"任然","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":650011,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_526464293","ftype":0,"publishTime":1514390400007,"no":1,"fee":8,"type":0,"duration":213846,"status":0,"name":"空空如也 ","id":526464293,"lastRank":0},{"privilege":{"st":0,"flag":2,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":514761281,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":36633179,"name":"白羊","picUrl":"http://p1.music.126.net/tczb_7II9KzSuLQsVt89Gw==/109951163049336667.jpg","tns":[],"pic_str":"109951163049336667","pic":109951163049336667},"artists":[{"id":1197168,"name":"徐秉龙","tns":[],"alias":[]},{"id":12002248,"name":"沈以诚","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_514761281","ftype":0,"publishTime":1508947200007,"no":1,"fee":8,"type":0,"duration":168420,"status":0,"name":"白羊","id":514761281,"lastRank":9},{"privilege":{"st":0,"flag":2,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":486218073,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35667299,"name":"BINGBIAN病变","picUrl":"http://p1.music.126.net/FcW4qPSjTLRJORMWNHeElA==/109951162955696086.jpg","tns":[],"pic_str":"109951162955696086","pic":109951162955696086},"artists":[{"id":12276430,"name":"Cubi","tns":[],"alias":[]},{"id":0,"name":"Aydo$","tns":[],"alias":[]},{"id":12056078,"name":"BRGang","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":22023,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_486218073","ftype":0,"publishTime":1498211775922,"no":1,"fee":0,"type":0,"duration":241221,"status":0,"name":"BINGBIAN病变","id":486218073,"lastRank":1},{"privilege":{"st":0,"flag":4,"subp":1,"fl":128000,"fee":8,"dl":128000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":531051217,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":37251353,"name":"等你下课","picUrl":"http://p1.music.126.net/A8qicH14toObbLpPMiKmBw==/109951163110962030.jpg","tns":[],"pic_str":"109951163110962030","pic":109951163110962030},"artists":[{"id":6452,"name":"周杰伦","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":1007,"mvid":5819032,"transNames":null,"commentThreadId":"R_SO_4_531051217","ftype":0,"publishTime":1516204800007,"no":1,"fee":8,"type":0,"duration":270000,"status":0,"name":"等你下课 (with 杨瑞代)","id":531051217,"lastRank":11},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":523251118,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":36957040,"name":"说散就散","picUrl":"http://p1.music.126.net/Yj2g6u9X6UCZPaRLCoJ5mQ==/109951163169027515.jpg","tns":[],"pic_str":"109951163169027515","pic":109951163169027515},"artists":[{"id":10473,"name":"袁娅维","tns":[],"alias":[]}],"alias":["电影《前任3：再见前任》主题曲"],"score":100.0,"copyrightId":7002,"mvid":5741462,"transNames":null,"commentThreadId":"R_SO_4_523251118","ftype":0,"publishTime":1513094400007,"no":1,"fee":8,"type":0,"duration":242571,"status":0,"name":"说散就散","id":523251118,"lastRank":2},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":513791211,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36589315,"name":"广东十年爱情故事","picUrl":"http://p1.music.126.net/SWDOrvO3f6L8Q1xGPTbb6w==/109951163102543599.jpg","tns":[],"pic_str":"109951163102543599","pic":109951163102543599},"artists":[{"id":12760978,"name":"广东雨神","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_513791211","ftype":0,"publishTime":1508302771097,"no":1,"fee":0,"type":0,"duration":214282,"status":0,"name":"广东十年爱情故事","id":513791211,"lastRank":5},{"privilege":{"st":0,"flag":1,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":812400,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":80454,"name":"3ラムジ","picUrl":"http://p1.music.126.net/cCyPSxi-BE2h-SmpLBztbA==/18635622580993683.jpg","tns":["3 Lambsey"],"pic_str":"18635622580993683","pic":18635622580993683},"artists":[{"id":21196,"name":"ラムジ","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":457010,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_812400","ftype":0,"publishTime":1149609600000,"no":3,"fee":8,"type":0,"duration":243400,"status":0,"name":"PLANET","id":812400,"lastRank":3},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":531295576,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":37313151,"name":"最美的期待","picUrl":"http://p1.music.126.net/mwCUI0iL3xEC2a4WVICHlA==/109951163115369030.jpg","tns":[],"pic_str":"109951163115369030","pic":109951163115369030},"artists":[{"id":10558,"name":"周笔畅","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":36031,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_531295576","ftype":0,"publishTime":1516204800000,"no":1,"fee":8,"type":0,"duration":210878,"status":0,"name":"最美的期待","id":531295576,"lastRank":8},{"privilege":{"st":0,"flag":2,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":452986458,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35114938,"name":"红昭愿","picUrl":"http://p1.music.126.net/8ltR3o9R8uJ9_5Cc71cDhA==/109951162951242154.jpg","tns":[],"pic_str":"109951162951242154","pic":109951162951242154},"artists":[{"id":12174521,"name":"音阙诗听","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":30002,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_452986458","ftype":0,"publishTime":1484064000007,"no":1,"fee":8,"type":0,"duration":173217,"status":0,"name":"红昭愿","id":452986458,"lastRank":10},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":526307800,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":37051672,"name":"123我爱你","picUrl":"http://p1.music.126.net/_LNk7rEEBSdAcnyHL8zi6Q==/109951163093399018.jpg","tns":[],"pic_str":"109951163093399018","pic":109951163093399018},"artists":[{"id":12503194,"name":"新乐尘符","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":17003,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_526307800","ftype":0,"publishTime":1514288916113,"no":1,"fee":0,"type":0,"duration":199530,"status":0,"name":"123我爱你","id":526307800,"lastRank":7},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":461347998,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35196287,"name":"Something Just Like This","picUrl":"http://p1.music.126.net/ggnyubDdMxrhpqYvpZbhEQ==/3302932937412681.jpg","tns":[],"pic":3302932937412681},"artists":[{"id":893484,"name":"The Chainsmokers","tns":[],"alias":[]},{"id":89365,"name":"Coldplay","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7001,"mvid":5449021,"transNames":null,"commentThreadId":"R_SO_4_461347998","ftype":0,"publishTime":1487952000007,"no":1,"fee":8,"type":0,"duration":247626,"status":0,"name":"Something Just Like This","id":461347998,"lastRank":6},{"privilege":{"st":0,"flag":16,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":504017347,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":36139089,"name":"Just Like This","picUrl":"http://p1.music.126.net/UiKTv4h6ISD053jYucchjg==/109951163019318875.jpg","tns":[],"pic_str":"109951163019318875","pic":109951163019318875},"artists":[{"id":12620097,"name":"Deepmaniak","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":405025,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_504017347","ftype":0,"publishTime":1503676800007,"no":1,"fee":8,"type":0,"duration":290089,"status":0,"name":"Just Like This (Original Mix)","id":504017347,"lastRank":4},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":483671599,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35644242,"name":"夏至未至 影视原声带","picUrl":"http://p1.music.126.net/ZZAQGWl9mR7g5xCyWWH3Pw==/19149094509535913.jpg","tns":[],"pic_str":"19149094509535913","pic":19149094509535913},"artists":[{"id":7409,"name":"岑宁儿","tns":[],"alias":[]}],"alias":["电视剧《夏至未至》插曲"],"score":100.0,"copyrightId":414012,"mvid":5563801,"transNames":null,"commentThreadId":"R_SO_4_483671599","ftype":0,"publishTime":1497283200007,"no":5,"fee":0,"type":0,"duration":235833,"status":0,"name":"追光者","id":483671599,"lastRank":12},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":492145159,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35798161,"name":"Superstar","picUrl":"http://p1.music.126.net/kM-9kKS4YHdO3Vf4rWKS1w==/18195817928623495.jpg","tns":[],"pic_str":"18195817928623495","pic":18195817928623495},"artists":[{"id":12322300,"name":"Beatrich","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7002,"mvid":5604201,"transNames":null,"commentThreadId":"R_SO_4_492145159","ftype":0,"publishTime":1500566400007,"no":1,"fee":8,"type":0,"duration":217077,"status":0,"name":"Superstar","id":492145159,"lastRank":17},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":536624791,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":37579166,"name":"玻璃糖","picUrl":"http://p1.music.126.net/VHGblQlvySdEiV2KTfZvKg==/109951163163289537.jpg","tns":[],"pic_str":"109951163163289537","pic":109951163163289537},"artists":[{"id":1142042,"name":"徐梦圆","tns":[],"alias":[]},{"id":12107534,"name":"冯提莫","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":462012,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_536624791","ftype":0,"publishTime":1519660800007,"no":0,"fee":8,"type":0,"duration":225646,"status":0,"name":"玻璃糖","id":536624791},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":108478,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":10770,"name":"JJ陆","picUrl":"http://p1.music.126.net/s6zFxvXe5kOxub4_x4rZhQ==/109951163052847567.jpg","tns":[],"pic_str":"109951163052847567","pic":109951163052847567},"artists":[{"id":3684,"name":"林俊杰","tns":[],"alias":[]}],"alias":["网游《赤壁Online》主题曲"],"score":100.0,"copyrightId":14026,"mvid":522352,"transNames":null,"commentThreadId":"R_SO_4_108478","ftype":0,"publishTime":1224259200000,"no":5,"fee":0,"type":0,"duration":281533,"status":0,"name":"醉赤壁","id":108478,"lastRank":13},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":451703096,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35114127,"name":"Shape Of You","picUrl":"http://p1.music.126.net/5Zs51JS6cQzvQclW5u_J1g==/18832435162240436.jpg","tns":[],"pic_str":"18832435162240436","pic":18832435162240436},"artists":[{"id":33184,"name":"Ed Sheeran","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7002,"mvid":5439044,"transNames":null,"commentThreadId":"R_SO_4_451703096","ftype":0,"publishTime":1483632000007,"no":1,"fee":8,"type":0,"duration":231037,"status":0,"name":"Shape of You","id":451703096,"lastRank":15},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":440208643,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":34985203,"name":"Psycho (Pt. 2)","picUrl":"http://p1.music.126.net/tVjr7jfmmDfsIkrqag3Bkw==/2946691242838284.jpg","tns":[],"pic":2946691242838284},"artists":[{"id":241588,"name":"Russ","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":5400021,"transNames":null,"commentThreadId":"R_SO_4_440208643","ftype":0,"publishTime":1478620800007,"no":1,"fee":0,"type":0,"duration":162168,"status":0,"name":"Psycho (Pt. 2)","id":440208643,"lastRank":16},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":472361096,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35338908,"name":"Despacito (Remix)","picUrl":"http://p1.music.126.net/vA4UF75gS1Qpyx07B0acrw==/18521273371761277.jpg","tns":[],"pic_str":"18521273371761277","pic":18521273371761277},"artists":[{"id":38154,"name":"Luis Fonsi","tns":[],"alias":[]},{"id":31297,"name":"Daddy Yankee","tns":[],"alias":[]},{"id":35531,"name":"Justin Bieber","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7003,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_472361096","ftype":0,"publishTime":1492358400007,"no":1,"fee":8,"type":0,"duration":228826,"status":0,"name":"Despacito (Remix)","id":472361096,"lastRank":19},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":494865824,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35829532,"name":"Havana","picUrl":"http://p1.music.126.net/zUp6BqKPn1lmZINHsVDoew==/18425615858527510.jpg","tns":[],"pic_str":"18425615858527510","pic":18425615858527510},"artists":[{"id":12136039,"name":"Camila Cabello","tns":[],"alias":[]},{"id":287014,"name":"Young Thug","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7001,"mvid":5688056,"transNames":null,"commentThreadId":"R_SO_4_494865824","ftype":0,"publishTime":1501718400000,"no":1,"fee":8,"type":0,"duration":216896,"status":0,"name":"Havana","id":494865824,"lastRank":23},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":480580003,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35559257,"name":"再也没有","picUrl":"http://p1.music.126.net/B7MRU9cieODaInnwzyLwYQ==/18771962022944662.jpg","tns":[],"pic_str":"18771962022944662","pic":18771962022944662},"artists":[{"id":12448205,"name":"Ryan.B","tns":[],"alias":[]},{"id":12258420,"name":"AY楊佬叁","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":502010,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_480580003","ftype":0,"publishTime":1496160000007,"no":0,"fee":0,"type":0,"duration":212540,"status":0,"name":"再也没有","id":480580003,"lastRank":24},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":192000,"id":37653063,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":3415755,"name":"Please Don't Go","picUrl":"http://p1.music.126.net/MTG-nrAtrbaV_0k6gTn40A==/3397490932848120.jpg","tns":[],"pic":3397490932848120},"artists":[{"id":1188100,"name":"Joel Adams","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":5260094,"transNames":null,"commentThreadId":"R_SO_4_37653063","ftype":0,"publishTime":1446393600007,"no":1,"fee":0,"type":0,"duration":210677,"status":0,"name":"Please Don't Go","id":37653063,"lastRank":18},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":465920905,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35287218,"name":"全部都是你","picUrl":"http://p1.music.126.net/H4VucaH8T_vEtHcPEtNeAg==/19146895486122470.jpg","tns":[],"pic_str":"19146895486122470","pic":19146895486122470},"artists":[{"id":12333145,"name":"Dragon Pig","tns":[],"alias":[]},{"id":12191014,"name":"CNBALLER","tns":[],"alias":[]},{"id":12131566,"name":"CLOUD WANG","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":414012,"mvid":5556833,"transNames":null,"commentThreadId":"R_SO_4_465920905","ftype":0,"publishTime":1489593600007,"no":0,"fee":0,"type":0,"duration":203625,"status":0,"name":"全部都是你","id":465920905,"lastRank":20},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":33035611,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":3178106,"name":"Time","picUrl":"http://p1.music.126.net/c7vJlx2v-J4gIk67zs2ZDw==/7941772488435204.jpg","tns":[],"pic":7941772488435204},"artists":[{"id":469200,"name":"MKJ","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_33035611","ftype":0,"publishTime":1429891200007,"no":1,"fee":0,"type":0,"duration":236016,"status":0,"name":"Time","id":33035611,"lastRank":22},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":496870798,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35909419,"name":"带你去旅行","picUrl":"http://p1.music.126.net/Y1M_jMalH6bWa6OydUeU2A==/18555358232355277.jpg","tns":[],"pic_str":"18555358232355277","pic":18555358232355277},"artists":[{"id":12371384,"name":"校长","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":30002,"mvid":5808147,"transNames":null,"commentThreadId":"R_SO_4_496870798","ftype":0,"publishTime":1502294400007,"no":1,"fee":0,"type":0,"duration":225789,"status":0,"name":"带你去旅行","id":496870798,"lastRank":21},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":432506345,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":34898300,"name":"童话镇","picUrl":"http://p1.music.126.net/tfa811GLreJI_S0h9epqRA==/3394192426154346.jpg","tns":[],"pic":3394192426154346},"artists":[{"id":1137098,"name":"陈一发儿","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_432506345","ftype":0,"publishTime":1474992000007,"no":0,"fee":0,"type":0,"duration":257914,"status":0,"name":"童话镇","id":432506345,"lastRank":28},{"privilege":{"st":0,"flag":2,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":448393515,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35071086,"name":"音阙诗听","picUrl":"http://p1.music.126.net/9M9JqljFAszZL9fPmT5qCg==/109951162827092297.jpg","tns":[],"pic_str":"109951162827092297","pic":109951162827092297},"artists":[{"id":12023202,"name":"赵方婧","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":5478231,"transNames":null,"commentThreadId":"R_SO_4_448393515","ftype":0,"publishTime":1482249600000,"no":1,"fee":8,"type":0,"duration":256935,"status":0,"name":"尽头","id":448393515,"lastRank":26},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":29004400,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":2975208,"name":"烟火里的尘埃","picUrl":"http://p1.music.126.net/_49Xz_x9kTTdEgmYYk6w2w==/6672936069046297.jpg","tns":[],"pic":6672936069046297},"artists":[{"id":861777,"name":"华晨宇","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":636011,"mvid":365701,"transNames":null,"commentThreadId":"R_SO_4_29004400","ftype":0,"publishTime":1408982400007,"no":1,"fee":8,"type":0,"duration":321750,"status":0,"name":"烟火里的尘埃","id":29004400,"lastRank":70},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":482988834,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35590576,"name":"我想和你唱 第二季 第7期","picUrl":"http://p1.music.126.net/QFXbRb-OOk-ThxtDyg8fjQ==/18618030395080088.jpg","tns":[],"pic_str":"18618030395080088","pic":18618030395080088},"artists":[{"id":166010,"name":"梁博","tns":[],"alias":[]},{"id":12492058,"name":"陶孟童","tns":[],"alias":[]},{"id":12463279,"name":"肖和东","tns":[],"alias":[]},{"id":12463280,"name":"高誉容","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":404023,"mvid":5559952,"transNames":null,"commentThreadId":"R_SO_4_482988834","ftype":0,"publishTime":1497024000007,"no":2,"fee":8,"type":0,"duration":239985,"status":0,"name":"男孩","id":482988834,"lastRank":32},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":507116418,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36225293,"name":"那个人","picUrl":"http://p1.music.126.net/IW4YCtvCnUDHIMxoAHbt_w==/109951163027859952.jpg","tns":[],"pic_str":"109951163027859952","pic":109951163027859952},"artists":[{"id":12071014,"name":"周延英（英子-effie）","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":5678439,"transNames":null,"commentThreadId":"R_SO_4_507116418","ftype":0,"publishTime":1505404800007,"no":0,"fee":0,"type":0,"duration":278986,"status":0,"name":"那个人","id":507116418,"lastRank":38},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":479574796,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35513867,"name":"文爱","picUrl":"http://p1.music.126.net/wywyrqpjc8ZuYsdFByTO9A==/109951162930421154.jpg","tns":[],"pic_str":"109951162930421154","pic":109951162930421154},"artists":[{"id":12118566,"name":"CG","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_479574796","ftype":0,"publishTime":1495028207585,"no":1,"fee":0,"type":0,"duration":200021,"status":0,"name":"文爱","id":479574796,"lastRank":27},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":529823971,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":37256285,"name":"偶像练习生","picUrl":"http://p1.music.126.net/iutMqAr58qq8HYKPCrv9sg==/109951163110826700.jpg","tns":[],"pic_str":"109951163110826700","pic":109951163110826700},"artists":[{"id":13059577,"name":"偶像练习生","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":5819118,"transNames":null,"commentThreadId":"R_SO_4_529823971","ftype":0,"publishTime":1516118400007,"no":1,"fee":0,"type":0,"duration":226893,"status":0,"name":"Ei Ei","id":529823971,"lastRank":33},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":518076124,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36785030,"name":"差一步","picUrl":"http://p1.music.126.net/b4MrcWDaX7MmdLlfoT-UcQ==/109951163061728442.jpg","tns":[],"pic_str":"109951163061728442","pic":109951163061728442},"artists":[{"id":12146142,"name":"大壮","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":30012,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_518076124","ftype":0,"publishTime":1510502400007,"no":1,"fee":0,"type":0,"duration":245625,"status":0,"name":"差一步","id":518076124,"lastRank":30},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":418602088,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":34750015,"name":"Nevada","picUrl":"http://p1.music.126.net/8uFCXr2mUoXNAK1EJgVBhw==/18517974835045498.jpg","tns":[],"pic_str":"18517974835045498","pic":18517974835045498},"artists":[{"id":747030,"name":"Vicetone","tns":[],"alias":[]},{"id":1097153,"name":"Cozi Zuehlsdorff","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":5343058,"transNames":null,"commentThreadId":"R_SO_4_418602088","ftype":0,"publishTime":1466697600007,"no":1,"fee":0,"type":0,"duration":208561,"status":0,"name":"Nevada","id":418602088,"lastRank":29},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":34229976,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":3279108,"name":"Panama","picUrl":"http://p1.music.126.net/Fq1Ypau-g86ZtotF4wPEKw==/7867005697927440.jpg","tns":[],"pic":7867005697927440},"artists":[{"id":743068,"name":"Matteo","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":655010,"mvid":5647401,"transNames":null,"commentThreadId":"R_SO_4_34229976","ftype":0,"publishTime":1380643200000,"no":1,"fee":8,"type":0,"duration":200751,"status":0,"name":"Panama","id":34229976,"lastRank":25},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":436514312,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":34930257,"name":"成都","picUrl":"http://p1.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg","tns":[],"pic":2946691234868155},"artists":[{"id":6731,"name":"赵雷","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":36016,"mvid":5619601,"transNames":null,"commentThreadId":"R_SO_4_436514312","ftype":0,"publishTime":1477238400007,"no":1,"fee":0,"type":0,"duration":328155,"status":0,"name":"成都","id":436514312,"lastRank":37},{"privilege":{"st":0,"flag":18,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":445665094,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35040037,"name":"过客","picUrl":"http://p1.music.126.net/ai-tIcR1c69_tXCoDy8hyA==/18770862510931326.jpg","tns":[],"pic_str":"18770862510931326","pic":18770862510931326},"artists":[{"id":12292708,"name":"是阿涵阿","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":672012,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_445665094","ftype":0,"publishTime":1481126400007,"no":1,"fee":8,"type":0,"duration":270000,"status":0,"name":"过客","id":445665094,"lastRank":41},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":33887645,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":3263821,"name":"回忆总想哭","picUrl":"http://p1.music.126.net/qYtVm6Ysj847Y9zmAblTYA==/7960464186896693.jpg","tns":[],"pic":7960464186896693},"artists":[{"id":3459,"name":"姜玉阳","tns":[],"alias":[]},{"id":4678,"name":"南宫嘉骏","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_33887645","ftype":0,"publishTime":1436716800007,"no":1,"fee":8,"type":0,"duration":292659,"status":0,"name":"回忆总想哭","id":33887645,"lastRank":44},{"privilege":{"st":0,"flag":2,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":192000,"id":28285910,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":2767540,"name":"金玟岐作品集","picUrl":"http://p1.music.126.net/54wdQi_3rpjreY2oo2jb7w==/5998935441219557.jpg","tns":[],"pic":5998935441219557},"artists":[{"id":893259,"name":"金玟岐","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_28285910","ftype":0,"publishTime":1393776000007,"no":2,"fee":0,"type":0,"duration":162072,"status":0,"name":"岁月神偷","id":28285910,"lastRank":47},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":529668356,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":37391092,"name":"覅忒好","picUrl":"http://p1.music.126.net/9uUWLnRsv4c0F0wu9dlttA==/109951163118372627.jpg","tns":[],"pic_str":"109951163118372627","pic":109951163118372627},"artists":[{"id":3066,"name":"胡彦斌","tns":[],"alias":[]}],"alias":["Take Everything You Want"],"score":100.0,"copyrightId":22036,"mvid":5779938,"transNames":null,"commentThreadId":"R_SO_4_529668356","ftype":0,"publishTime":1515513600000,"no":3,"fee":0,"type":0,"duration":299333,"status":0,"name":"你要的全拿走","id":529668356,"lastRank":31},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":515143305,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36525683,"name":"9420","picUrl":"http://p1.music.126.net/tyOXJ8U9TisNRfcorQ-4og==/109951163050074297.jpg","tns":[],"pic_str":"109951163050074297","pic":109951163050074297},"artists":[{"id":12288688,"name":"麦小兜","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":469014,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_515143305","ftype":0,"publishTime":1508774400000,"no":1,"fee":0,"type":0,"duration":229156,"status":0,"name":"9420","id":515143305,"lastRank":36},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":468513829,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35313453,"name":"说散就散","picUrl":"http://p1.music.126.net/LSBrAS5oxxQHouvqLDR4lA==/19095218439644352.jpg","tns":[],"pic_str":"19095218439644352","pic":19095218439644352},"artists":[{"id":12347360,"name":"JC","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":563013,"mvid":5540146,"transNames":null,"commentThreadId":"R_SO_4_468513829","ftype":0,"publishTime":1465833600007,"no":1,"fee":8,"type":0,"duration":230608,"status":0,"name":"说散就散","id":468513829,"lastRank":40},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":474567580,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35450132,"name":"Hello 1","picUrl":"http://p1.music.126.net/elfqBKIdad0KYCCeKQpDSA==/18700493767108166.jpg","tns":[],"pic_str":"18700493767108166","pic":18700493767108166},"artists":[{"id":166014,"name":"金志文","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":490012,"mvid":5500070,"transNames":null,"commentThreadId":"R_SO_4_474567580","ftype":0,"publishTime":1492963200007,"no":1,"fee":8,"type":0,"duration":241951,"status":0,"name":"远走高飞","id":474567580,"lastRank":34},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":501220770,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36030485,"name":"Wannabe","picUrl":"http://p1.music.126.net/SmVvG7YSr__PaFtCZhIWxw==/109951163013515778.jpg","tns":[],"pic_str":"109951163013515778","pic":109951163013515778},"artists":[{"id":860945,"name":"Unlike Pluto","tns":[],"alias":[]},{"id":0,"name":"why mona","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_501220770","ftype":0,"publishTime":1503590400007,"no":1,"fee":0,"type":0,"duration":218621,"status":0,"name":"Wannabe (Spice Girls Cover)","id":501220770,"lastRank":42},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":421423806,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":34780579,"name":"小梦大半","picUrl":"http://p1.music.126.net/HQxTggMCB7AHUXN-ZFEtmA==/1371091013186741.jpg","tns":[],"pic":1371091013186741},"artists":[{"id":1007170,"name":"陈粒","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":463010,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_421423806","ftype":0,"publishTime":1469462400007,"no":3,"fee":8,"type":0,"duration":297240,"status":0,"name":"小半","id":421423806,"lastRank":53},{"privilege":{"st":0,"flag":0,"subp":0,"fl":0,"fee":4,"dl":0,"cp":0,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":29561031,"pl":0,"sp":0,"payed":0},"djid":0,"album":{"id":3029801,"name":"1989","picUrl":"http://p1.music.126.net/3KDqQ9XW2Khj5Ia4tRqAAw==/18771962022688349.jpg","tns":[],"pic_str":"18771962022688349","pic":18771962022688349},"artists":[{"id":44266,"name":"Taylor Swift","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7003,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_29561031","ftype":0,"publishTime":1414339200007,"no":1,"fee":4,"type":0,"duration":212600,"status":0,"name":"Welcome To New York","id":29561031},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":26092806,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":2386097,"name":"WONDER Tourism","picUrl":"http://p1.music.126.net/w0u1VOUDAEqnTFu4t8EnjQ==/2384840720669358.jpg","tns":[],"pic":2384840720669358},"artists":[{"id":13953,"name":"DAISHI DANCE","tns":[],"alias":[]},{"id":51012,"name":"Cecile Corbel","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":663018,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_26092806","ftype":0,"publishTime":1352822400007,"no":4,"fee":0,"type":0,"duration":259973,"status":0,"name":"Take me hand","id":26092806,"lastRank":39},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":38592976,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":3426477,"name":"Dream It Possible","picUrl":"http://p1.music.126.net/Gfq_eVuq7lgilBf0w1g5dg==/109951163088676710.jpg","tns":[],"pic_str":"109951163088676710","pic":109951163088676710},"artists":[{"id":489045,"name":"Delacey","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":5439243,"transNames":null,"commentThreadId":"R_SO_4_38592976","ftype":0,"publishTime":1449742259691,"no":1,"fee":0,"type":0,"duration":204042,"status":0,"name":"Dream It Possible","id":38592976,"lastRank":46},{"privilege":{"st":0,"flag":18,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":489506275,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35695884,"name":"非酋","picUrl":"http://p1.music.126.net/gtPsmgldw_UEsCT2k9eocQ==/19067730649109671.jpg","tns":[],"pic_str":"19067730649109671","pic":19067730649109671},"artists":[{"id":12408182,"name":"薛明媛","tns":[],"alias":[]},{"id":1146108,"name":"朱贺","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":650011,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_489506275","ftype":0,"publishTime":1499616000007,"no":1,"fee":8,"type":0,"duration":172200,"status":0,"name":"非酋","id":489506275,"lastRank":48},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":470795480,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35338342,"name":"Something Just Like This","picUrl":"http://p1.music.126.net/20g0Kj2jVbV417M-QzcY7w==/18789554208920076.jpg","tns":[],"pic_str":"18789554208920076","pic":18789554208920076},"artists":[{"id":28690,"name":"Alex Goot","tns":[],"alias":[]},{"id":69270,"name":"Madilyn Bailey","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":5478291,"transNames":null,"commentThreadId":"R_SO_4_470795480","ftype":0,"publishTime":1491494400007,"no":1,"fee":0,"type":0,"duration":179049,"status":0,"name":"Something Just Like This","id":470795480,"lastRank":45},{"privilege":{"st":0,"flag":2,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":486111543,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35667164,"name":"7538(Me U-Remix)","picUrl":"http://p1.music.126.net/YVMrP5pnncRlrfAm1IUwtQ==/109951162955328024.jpg","tns":[],"pic_str":"109951162955328024","pic":109951162955328024},"artists":[{"id":12194650,"name":"KT","tns":[],"alias":[]},{"id":12039082,"name":"长气制作","tns":[],"alias":[]},{"id":0,"name":"Chiu Chiu","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_486111543","ftype":0,"publishTime":1498175637482,"no":1,"fee":0,"type":0,"duration":210000,"status":0,"name":"7538(Me U-Remix)","id":486111543,"lastRank":49},{"privilege":{"st":0,"flag":2,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":128000,"id":29759733,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":3056891,"name":"赵浴辰原创demo精选","picUrl":"http://p1.music.126.net/qOfVT6izV4mBe4IyQn489Q==/18190320370401891.jpg","tns":[],"pic_str":"18190320370401891","pic":18190320370401891},"artists":[{"id":1038040,"name":"赵紫骅","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_29759733","ftype":0,"publishTime":1399219200000,"no":1,"fee":0,"type":0,"duration":345418,"status":0,"name":"可乐","id":29759733,"lastRank":57},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":418603077,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":34720827,"name":"周杰伦的床边故事","picUrl":"http://p1.music.126.net/cUTk0ewrQtYGP2YpPZoUng==/3265549553028224.jpg","tns":[],"pic":3265549553028224},"artists":[{"id":6452,"name":"周杰伦","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":1007,"mvid":5382080,"transNames":null,"commentThreadId":"R_SO_4_418603077","ftype":0,"publishTime":1466697544301,"no":8,"fee":8,"type":0,"duration":215146,"status":0,"name":"告白气球","id":418603077,"lastRank":35},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":35270898,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":3308855,"name":"少林英雄","picUrl":"http://p1.music.126.net/CnNp51sUpcYED7TuJwIjBw==/3413983604265143.jpg","tns":[],"pic":3413983604265143},"artists":[{"id":1156283,"name":"于荣光","tns":[],"alias":[]}],"alias":["功夫真人秀《少林英雄》主题曲"],"score":100.0,"copyrightId":0,"mvid":480401,"transNames":null,"commentThreadId":"R_SO_4_35270898","ftype":0,"publishTime":1443542400007,"no":1,"fee":0,"type":0,"duration":175632,"status":0,"name":"少林英雄","id":35270898,"lastRank":43},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":518094151,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":36785062,"name":"Зая","picUrl":"http://p1.music.126.net/pnuUvV_uCKpc4FJeysRZPg==/18228803277463783.jpg","tns":[],"pic_str":"18228803277463783","pic":18228803277463783},"artists":[{"id":12862084,"name":"Бамбинтон","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":405025,"mvid":5778032,"transNames":null,"commentThreadId":"R_SO_4_518094151","ftype":0,"publishTime":1487289600000,"no":1,"fee":8,"type":0,"duration":220169,"status":0,"name":"Зая","id":518094151,"lastRank":50},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":488876810,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35714571,"name":"Welcome to New York","picUrl":"http://p1.music.126.net/aw90yskYzfcy3lNkpfmbng==/18446506579453918.jpg","tns":[],"pic_str":"18446506579453918","pic":18446506579453918},"artists":[{"id":12598485,"name":"A.M.7.","tns":[],"alias":[]},{"id":42602,"name":"Ryan Tedder","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":405025,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_488876810","ftype":0,"publishTime":1417622400007,"no":1,"fee":8,"type":0,"duration":212600,"status":0,"name":"Welcome to New York","id":488876810,"lastRank":145},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":539941039,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":37692064,"name":"佛系少女","picUrl":"http://p1.music.126.net/MdSa3oZgGXPPry9nthntEQ==/109951163156209240.jpg","tns":[],"pic_str":"109951163156209240","pic":109951163156209240},"artists":[{"id":12107534,"name":"冯提莫","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_539941039","ftype":0,"publishTime":1519142400000,"no":1,"fee":0,"type":0,"duration":194998,"status":0,"name":"佛系少女","id":539941039,"lastRank":81},{"privilege":{"st":0,"flag":2,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":139774,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":13934,"name":"The truth that you leave","picUrl":"http://p1.music.126.net/9idkdzbel_-lYBP7Dv_dVQ==/102254581395289.jpg","tns":[],"pic":102254581395289},"artists":[{"id":4726,"name":"Pianoboy高至豪","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":5337006,"transNames":["你离开的事实"],"commentThreadId":"R_SO_4_139774","ftype":0,"publishTime":1126108800000,"no":1,"fee":0,"type":0,"duration":223000,"status":0,"name":"The truth that you leave","id":139774,"lastRank":60},{"privilege":{"st":0,"flag":2,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":31445772,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":3116882,"name":"浓烟下的诗歌电台","picUrl":"http://p1.music.126.net/cqTTEPAaxXG3cOwaE4E_-g==/109951163104103366.jpg","tns":[],"pic_str":"109951163104103366","pic":109951163104103366},"artists":[{"id":1058228,"name":"陈鸿宇","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":456010,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_31445772","ftype":0,"publishTime":1451491200000,"no":5,"fee":8,"type":0,"duration":210814,"status":0,"name":"理想三旬","id":31445772,"lastRank":62},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":440353010,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":34987109,"name":"#Lov3 #Ngẫu Hứng","picUrl":"http://p1.music.126.net/znZQMUXniXqwjJrXMJO_Qg==/109951163100026676.jpg","tns":[],"pic_str":"109951163100026676","pic":109951163100026676},"artists":[{"id":1177234,"name":"Hoaprox","tns":[],"alias":[]}],"alias":["PDD洪荒之力"],"score":100.0,"copyrightId":654015,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_440353010","ftype":0,"publishTime":1442592000007,"no":1,"fee":8,"type":0,"duration":75697,"status":0,"name":"#Lov3 #Ngẫu Hứng","id":440353010,"lastRank":51},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":536622918,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":37577194,"name":"Type-3","picUrl":"http://p1.music.126.net/IJ6knfb-NsIRYZJjGRDecA==/109951163165736088.jpg","tns":[],"pic_str":"109951163165736088","pic":109951163165736088},"artists":[{"id":12002201,"name":"Higher Brothers","tns":[],"alias":[]},{"id":12200029,"name":"HARIKIRI","tns":[],"alias":[]}],"alias":["Storm"],"score":100.0,"copyrightId":36016,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_536622918","ftype":0,"publishTime":1519660800007,"no":3,"fee":8,"type":0,"duration":158785,"status":0,"name":"暴风雨","id":536622918},{"privilege":{"st":0,"flag":2,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":471871012,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35360321,"name":"TO BE A GOOD GUY","picUrl":"http://p1.music.126.net/lbfqKdLUnmVGgAZptFNlFQ==/109951162901564862.jpg","tns":[],"pic_str":"109951162901564862","pic":109951162901564862},"artists":[{"id":12059094,"name":"JAEFOREAL","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_471871012","ftype":0,"publishTime":1492010776420,"no":1,"fee":0,"type":0,"duration":205775,"status":0,"name":"是个好人","id":471871012,"lastRank":78},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":439915614,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":34976465,"name":"刚好遇见你","picUrl":"http://p1.music.126.net/lDyytkTaPYVTb1Vpide6AA==/18591642115187138.jpg","tns":[],"pic_str":"18591642115187138","pic":18591642115187138},"artists":[{"id":4130,"name":"李玉刚","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":22025,"mvid":5441256,"transNames":null,"commentThreadId":"R_SO_4_439915614","ftype":0,"publishTime":1479052800007,"no":1,"fee":0,"type":0,"duration":200000,"status":0,"name":"刚好遇见你","id":439915614,"lastRank":54},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":534530792,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":37440306,"name":"病变(女声版)","picUrl":"http://p1.music.126.net/QnWnsU-2oXBbyeMINQabiw==/109951163126109258.jpg","tns":[],"pic_str":"109951163126109258","pic":109951163126109258},"artists":[{"id":12499312,"name":"曹小聪","tns":[],"alias":[]},{"id":0,"name":"于嘉贝","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_534530792","ftype":0,"publishTime":1517392871164,"no":1,"fee":0,"type":0,"duration":241998,"status":0,"name":"病变remix(女声版)","id":534530792,"lastRank":66},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":401249910,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":3270972,"name":"Nine Track Mind","picUrl":"http://p1.music.126.net/OVHar05vedbWFEWHuArbGA==/3295236348738229.jpg","tns":[],"pic":3295236348738229},"artists":[{"id":90331,"name":"Charlie Puth","tns":[],"alias":[]},{"id":140196,"name":"Selena Gomez","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7002,"mvid":5349011,"transNames":null,"commentThreadId":"R_SO_4_401249910","ftype":0,"publishTime":1453996800007,"no":5,"fee":8,"type":0,"duration":217779,"status":0,"name":"We Don't Talk Anymore","id":401249910,"lastRank":55},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":2919622,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":294835,"name":"I Am You","picUrl":"http://p1.music.126.net/cCw5Kr5C52bYbV-AOp6IUA==/109951163073357482.jpg","tns":[],"pic_str":"109951163073357482","pic":109951163073357482},"artists":[{"id":63943,"name":"Kim Taylor","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":628014,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_2919622","ftype":0,"publishTime":1235836800007,"no":1,"fee":8,"type":0,"duration":274186,"status":0,"name":"I Am You","id":2919622,"lastRank":59},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":27759600,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":2672349,"name":"Inside Llewyn Davis","picUrl":"http://p1.music.126.net/4BTe96FPQ_kW1pmNnlNvHg==/2536573326765583.jpg","tns":["醉乡民谣"],"pic":2536573326765583},"artists":[{"id":35331,"name":"Justin Timberlake","tns":[],"alias":[]},{"id":0,"name":"Carey Mulligan","tns":[],"alias":[]},{"id":0,"name":"Stark Sands","tns":[],"alias":[]}],"alias":["《醉乡民谣》插曲"],"score":100.0,"copyrightId":7002,"mvid":5587174,"transNames":["500英里"],"commentThreadId":"R_SO_4_27759600","ftype":0,"publishTime":1379347200007,"no":4,"fee":8,"type":0,"duration":206466,"status":0,"name":"Five Hundred Miles","id":27759600,"lastRank":67},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":509313150,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":3271560,"name":"最新热歌慢摇110","picUrl":"http://p1.music.126.net/qUliwrBDR_QBjNIyipbIRQ==/3296335861579907.jpg","tns":[],"pic":3296335861579907},"artists":[{"id":0,"name":"Nigel Silin","tns":[],"alias":[]}],"alias":["櫻花淚"],"score":100.0,"copyrightId":663018,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_509313150","ftype":0,"publishTime":1388505600004,"no":1,"fee":0,"type":0,"duration":184163,"status":0,"name":"Sakura Tears","id":509313150,"lastRank":56},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":466794339,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35292310,"name":"Something Just Like This","picUrl":"http://p1.music.126.net/aMZLDXAV6h87T_PkcbEEVw==/19017153114046721.jpg","tns":[],"pic_str":"19017153114046721","pic":19017153114046721},"artists":[{"id":12203139,"name":"Anthony Keyrouz","tns":[],"alias":[]},{"id":12279206,"name":"Romy Wave","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":5564212,"transNames":null,"commentThreadId":"R_SO_4_466794339","ftype":0,"publishTime":1489939200007,"no":1,"fee":0,"type":0,"duration":228101,"status":0,"name":"Something Just Like This","id":466794339,"lastRank":71},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":27646205,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":2646285,"name":"安和桥北","picUrl":"http://p1.music.126.net/mPlr0GoQU2Wl_aZzIgIJ6A==/1984618488161733.jpg","tns":[],"pic":1984618488161733},"artists":[{"id":5073,"name":"宋冬野","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":22020,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_27646205","ftype":0,"publishTime":1377446400007,"no":11,"fee":0,"type":0,"duration":251000,"status":0,"name":"安和桥","id":27646205,"lastRank":74},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":36990266,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":3406843,"name":"Faded","picUrl":"http://p1.music.126.net/8dzD62VK8jLDbhEqkmpIAg==/18277181788626198.jpg","tns":[],"pic_str":"18277181788626198","pic":18277181788626198},"artists":[{"id":1045123,"name":"Alan Walker","tns":[],"alias":[]},{"id":1078390,"name":"Iselin Solheim","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7001,"mvid":524116,"transNames":null,"commentThreadId":"R_SO_4_36990266","ftype":0,"publishTime":1448380800007,"no":1,"fee":8,"type":0,"duration":212626,"status":0,"name":"Faded","id":36990266,"lastRank":58},{"privilege":{"st":0,"flag":0,"subp":0,"fl":0,"fee":1,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":33337002,"pl":0,"sp":0,"payed":0},"djid":0,"album":{"id":3199003,"name":"Taylor Swift Karaoke: 1989 (Deluxe Edition)","picUrl":"http://p1.music.126.net/JI13dWBRcSzXDQEJeOLunA==/7804333535025554.jpg","tns":[],"pic":7804333535025554},"artists":[{"id":44266,"name":"Taylor Swift","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7003,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_33337002","ftype":0,"publishTime":1425312000007,"no":1,"fee":1,"type":0,"duration":212584,"status":0,"name":"Welcome To New York (Karaoke Version)","id":33337002},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":482395261,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35579387,"name":"我们不一样","picUrl":"http://p1.music.126.net/e8rrwkOED4RbeaKuaVOcJA==/18997361904874206.jpg","tns":[],"pic_str":"18997361904874206","pic":18997361904874206},"artists":[{"id":12146142,"name":"大壮","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":30012,"mvid":5678262,"transNames":null,"commentThreadId":"R_SO_4_482395261","ftype":0,"publishTime":1496678400007,"no":1,"fee":0,"type":0,"duration":270857,"status":0,"name":"我们不一样","id":482395261,"lastRank":52},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":520581566,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36834943,"name":"体面","picUrl":"http://p1.music.126.net/S2fctM4-XW8Tv06ASOZvzw==/109951163069166142.jpg","tns":[],"pic_str":"109951163069166142","pic":109951163069166142},"artists":[{"id":12601436,"name":"迟青","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_520581566","ftype":0,"publishTime":1511495541393,"no":1,"fee":0,"type":0,"duration":326976,"status":0,"name":"体面","id":520581566,"lastRank":65},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":534541484,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":37464083,"name":"谈判官 电视原声带","picUrl":"http://p1.music.126.net/eIwn9dPflwdAwhVz0vJsng==/109951163133237974.jpg","tns":[],"pic_str":"109951163133237974","pic":109951163133237974},"artists":[{"id":6066,"name":"杨宗纬","tns":[],"alias":[]}],"alias":["电视剧《谈判官》主题曲"],"score":100.0,"copyrightId":514011,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_534541484","ftype":0,"publishTime":1519401600007,"no":2,"fee":8,"type":0,"duration":237618,"status":0,"name":"爱不得","id":534541484,"lastRank":61},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":523251474,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36950166,"name":"说散就散","picUrl":"http://p1.music.126.net/JCxBPpX43h8yv32jUs5CNw==/109951163083330826.jpg","tns":[],"pic_str":"109951163083330826","pic":109951163083330826},"artists":[{"id":12127564,"name":"艾福杰尼","tns":[],"alias":[]},{"id":12065096,"name":"BooM黄旭","tns":[],"alias":[]},{"id":12931942,"name":"田羽生","tns":[],"alias":[]}],"alias":["电影《前任3：再见前任》主题曲"],"score":100.0,"copyrightId":417014,"mvid":5741567,"transNames":null,"commentThreadId":"R_SO_4_523251474","ftype":0,"publishTime":1513180800007,"no":1,"fee":0,"type":0,"duration":231857,"status":0,"name":"说散就散","id":523251474,"lastRank":63},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":509728806,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":36451336,"name":"How Long","picUrl":"http://p1.music.126.net/quPVbyAS9qaBz1LCkAqkag==/109951163037746910.jpg","tns":[],"pic_str":"109951163037746910","pic":109951163037746910},"artists":[{"id":90331,"name":"Charlie Puth","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7002,"mvid":5687017,"transNames":null,"commentThreadId":"R_SO_4_509728806","ftype":0,"publishTime":1507248000000,"no":1,"fee":8,"type":0,"duration":197880,"status":0,"name":"How Long","id":509728806,"lastRank":64},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":516657051,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36855053,"name":"渡","picUrl":"http://p1.music.126.net/fNbj5uDwltSDLbETdnEYYQ==/109951163069265719.jpg","tns":[],"pic_str":"109951163069265719","pic":109951163069265719},"artists":[{"id":5781,"name":"薛之谦","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":22036,"mvid":5780008,"transNames":null,"commentThreadId":"R_SO_4_516657051","ftype":0,"publishTime":1509638400007,"no":3,"fee":0,"type":0,"duration":255111,"status":0,"name":"像风一样","id":516657051,"lastRank":80},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":28193075,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":2744120,"name":"长安夜","picUrl":"http://p1.music.126.net/OZUCPKlxFtzrbbpw201aOA==/5887884766862281.jpg","tns":[],"pic":5887884766862281},"artists":[{"id":5438,"name":"王建房","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":456010,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_28193075","ftype":0,"publishTime":1389542400007,"no":3,"fee":0,"type":0,"duration":234240,"status":0,"name":"在人间","id":28193075,"lastRank":73},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":514765154,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36632160,"name":"世界上的另一个我","picUrl":"http://p1.music.126.net/LH4-Qie1SUunLQ-WfI21Zg==/109951163048848611.jpg","tns":[],"pic_str":"109951163048848611","pic":109951163048848611},"artists":[{"id":7122,"name":"阿肆","tns":[],"alias":[]},{"id":7762,"name":"郭采洁","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":22036,"mvid":5678865,"transNames":null,"commentThreadId":"R_SO_4_514765154","ftype":0,"publishTime":1508774400007,"no":0,"fee":0,"type":0,"duration":238000,"status":0,"name":"世界上的另一个我","id":514765154,"lastRank":72},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":32019002,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":3119381,"name":"True Colors","picUrl":"http://p1.music.126.net/XhCBGqLJhgpNGQwqtNdvWg==/2913705813975955.jpg","tns":[],"pic":2913705813975955},"artists":[{"id":46376,"name":"Zedd","tns":[],"alias":[]},{"id":860113,"name":"Jon Bellion","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7003,"mvid":420471,"transNames":null,"commentThreadId":"R_SO_4_32019002","ftype":0,"publishTime":1431964800007,"no":3,"fee":8,"type":0,"duration":218293,"status":0,"name":"Beautiful Now","id":32019002,"lastRank":77},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":515453363,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":36682047,"name":"All Falls Down","picUrl":"http://p1.music.126.net/rTb28CZeLWxIRuSlJWkPLQ==/18850027346628137.jpg","tns":[],"pic_str":"18850027346628137","pic":18850027346628137},"artists":[{"id":1045123,"name":"Alan Walker","tns":[],"alias":[]},{"id":12175271,"name":"Noah Cyrus","tns":[],"alias":[]},{"id":840929,"name":"Digital Farm Animals","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7001,"mvid":5694021,"transNames":null,"commentThreadId":"R_SO_4_515453363","ftype":0,"publishTime":1509062400000,"no":1,"fee":8,"type":0,"duration":199111,"status":0,"name":"All Falls Down","id":515453363,"lastRank":68},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":190499,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":19247,"name":"雨一直下","picUrl":"http://p1.music.126.net/otCQ-2wUgLaEN2_W8Nf_DA==/57174604656249.jpg","tns":[],"pic":57174604656249},"artists":[{"id":6469,"name":"张宇","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":13009,"mvid":5570210,"transNames":null,"commentThreadId":"R_SO_4_190499","ftype":0,"publishTime":936115200000,"no":4,"fee":8,"type":0,"duration":288157,"status":0,"name":"给你们","id":190499,"lastRank":125},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":488256319,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35696322,"name":"九张机","picUrl":"http://p1.music.126.net/LioLn6LDJXuBoYL0VK5c1g==/19091919904944388.jpg","tns":[],"pic_str":"19091919904944388","pic":19091919904944388},"artists":[{"id":12186038,"name":"叶炫清","tns":[],"alias":[]}],"alias":["网络剧《双世宠妃》主题曲"],"score":100.0,"copyrightId":433011,"mvid":5581665,"transNames":null,"commentThreadId":"R_SO_4_488256319","ftype":0,"publishTime":1499097600007,"no":0,"fee":0,"type":0,"duration":220151,"status":0,"name":"九张机","id":488256319,"lastRank":86},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":525278524,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":36997221,"name":"无问","picUrl":"http://p1.music.126.net/SJLDel776uY6MEKEU5GbjA==/109951163099854364.jpg","tns":[],"pic_str":"109951163099854364","pic":109951163099854364},"artists":[{"id":12138269,"name":"毛不易","tns":[],"alias":[]}],"alias":["电影《无问西东》宣传曲"],"score":100.0,"copyrightId":653015,"mvid":5795026,"transNames":null,"commentThreadId":"R_SO_4_525278524","ftype":0,"publishTime":1514160000000,"no":1,"fee":8,"type":0,"duration":258976,"status":0,"name":"无问","id":525278524,"lastRank":87},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":28694864,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":2880330,"name":"Wicked Wonderland","picUrl":"http://p1.music.126.net/z2yEJ88-vaNgqPk3lI8mpA==/17663654300641736.jpg","tns":[],"pic_str":"17663654300641736","pic":17663654300641736},"artists":[{"id":962293,"name":"Martin Tungevaag","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":456010,"mvid":339617,"transNames":null,"commentThreadId":"R_SO_4_28694864","ftype":0,"publishTime":1406160000000,"no":1,"fee":0,"type":0,"duration":217270,"status":0,"name":"Wicked Wonderland","id":28694864,"lastRank":83},{"privilege":{"st":0,"flag":16,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":513357140,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":36579035,"name":"Heartbeat (Nightcore) [PØRPEL Remix]","picUrl":"http://p1.music.126.net/I_UDbIsryVrLsLfhgE85PA==/109951163044960154.jpg","tns":[],"pic_str":"109951163044960154","pic":109951163044960154},"artists":[{"id":12764118,"name":"PØRPEL","tns":[],"alias":[]},{"id":1132109,"name":"Marcus & Martinus","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":655010,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_513357140","ftype":0,"publishTime":1465056000007,"no":1,"fee":8,"type":0,"duration":166739,"status":0,"name":"Heartbeat (Nightcore) [PØRPEL Remix]","id":513357140,"lastRank":82},{"privilege":{"st":0,"flag":2,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":522510615,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":36913155,"name":"千禧","picUrl":"http://p1.music.126.net/_sblL2ZjBOtwLAL-3i01Fw==/109951163078474921.jpg","tns":[],"pic_str":"109951163078474921","pic":109951163078474921},"artists":[{"id":1197168,"name":"徐秉龙","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_522510615","ftype":0,"publishTime":1512748800007,"no":1,"fee":8,"type":0,"duration":199044,"status":0,"name":"千禧","id":522510615,"lastRank":107},{"privilege":{"st":0,"flag":2,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":521602388,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36867692,"name":"缺氧","picUrl":"http://p1.music.126.net/mJg8wJbIoM8d8xQ72eR2qw==/109951163073289601.jpg","tns":[],"pic_str":"109951163073289601","pic":109951163073289601},"artists":[{"id":12132566,"name":"安苏羽","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_521602388","ftype":0,"publishTime":1512022456852,"no":1,"fee":0,"type":0,"duration":271424,"status":0,"name":"缺氧","id":521602388,"lastRank":75},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":31445554,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":3116800,"name":"七月上","picUrl":"http://p1.music.126.net/9kZl6NRj3HxmQQ8DqTjZ4Q==/17729624997966923.jpg","tns":[],"pic_str":"17729624997966923","pic":17729624997966923},"artists":[{"id":1071031,"name":"Jam","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_31445554","ftype":0,"publishTime":1429200000000,"no":0,"fee":0,"type":0,"duration":190122,"status":0,"name":"七月上","id":31445554,"lastRank":104},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":423228325,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":34796273,"name":"Closer","picUrl":"http://p1.music.126.net/nC7UtVKkQNmfb8oPG1qQFw==/3310629516306722.jpg","tns":[],"pic":3310629516306722},"artists":[{"id":893484,"name":"The Chainsmokers","tns":[],"alias":[]},{"id":964321,"name":"Halsey","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7001,"mvid":5381012,"transNames":null,"commentThreadId":"R_SO_4_423228325","ftype":0,"publishTime":1469721600007,"no":1,"fee":8,"type":0,"duration":244960,"status":0,"name":"Closer","id":423228325,"lastRank":79},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":441491080,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":34928617,"name":"Glory Days (Deluxe Concert Film Edition)","picUrl":"http://p1.music.126.net/O_gHnR3Qwu0vcNAY2DTuyQ==/2946691240466931.jpg","tns":[],"pic":2946691240466931},"artists":[{"id":96072,"name":"Little Mix","tns":[],"alias":[]},{"id":90331,"name":"Charlie Puth","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7001,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_441491080","ftype":0,"publishTime":1479398400007,"no":4,"fee":8,"type":0,"duration":204760,"status":0,"name":"Oops","id":441491080,"lastRank":90},{"privilege":{"st":0,"flag":2,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":469699266,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35326717,"name":"最美情侣","picUrl":"http://p1.music.126.net/E1OLdBDVpfd70Z1mI-1odg==/18940187300130282.jpg","tns":[],"pic_str":"18940187300130282","pic":18940187300130282},"artists":[{"id":12356407,"name":"白小白","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":445010,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_469699266","ftype":0,"publishTime":1491235200007,"no":1,"fee":0,"type":0,"duration":241600,"status":0,"name":"最美情侣","id":469699266,"lastRank":89},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":511678913,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":36320990,"name":"Sucker for You","picUrl":"http://p1.music.126.net/q7nbE35cIJC5pEo4gSQSdw==/18334356393745926.jpg","tns":[],"pic_str":"18334356393745926","pic":18334356393745926},"artists":[{"id":12214141,"name":"Matt Terry","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7001,"mvid":5809015,"transNames":null,"commentThreadId":"R_SO_4_511678913","ftype":0,"publishTime":1507824000007,"no":1,"fee":8,"type":0,"duration":203728,"status":0,"name":"Sucker for You","id":511678913},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":491943068,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35792324,"name":"流浪","picUrl":"http://p1.music.126.net/baaLZ8t6Y_9kNB31z_2PgQ==/19196373509589905.jpg","tns":[],"pic_str":"19196373509589905","pic":19196373509589905},"artists":[{"id":12523349,"name":"卢焱","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":32002,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_491943068","ftype":0,"publishTime":1500393600007,"no":1,"fee":0,"type":0,"duration":200657,"status":0,"name":"流浪","id":491943068,"lastRank":142},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":496869422,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35864443,"name":"打上花火","picUrl":"http://p1.music.126.net/ZUCE_1Tl_hkbtamKmSNXEg==/109951163009282836.jpg","tns":[],"pic_str":"109951163009282836","pic":109951163009282836},"artists":[{"id":855508,"name":"DAOKO","tns":[],"alias":[]},{"id":159300,"name":"米津玄師","tns":[],"alias":[]}],"alias":["动画电影《升空的焰火，从下面看还是从侧面看?》主题曲"],"score":100.0,"copyrightId":663018,"mvid":5622072,"transNames":null,"commentThreadId":"R_SO_4_496869422","ftype":0,"publishTime":1502812800007,"no":1,"fee":0,"type":0,"duration":289334,"status":0,"name":"打上花火","id":496869422,"lastRank":76},{"privilege":{"st":0,"flag":2,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":38576323,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":34976129,"name":"所有的酒，都不如你","picUrl":"http://p1.music.126.net/vOrGCPP-ozONI4IdlCgdfA==/18555358231321070.jpg","tns":[],"pic_str":"18555358231321070","pic":18555358231321070},"artists":[{"id":1195028,"name":"鹿先森乐队","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_38576323","ftype":0,"publishTime":1478620800007,"no":2,"fee":8,"type":0,"duration":375928,"status":0,"name":"春风十里","id":38576323,"lastRank":99},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":30394891,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":3098613,"name":"Seve","picUrl":"http://p1.music.126.net/bv58miRmMR0JL4lHy5rTTg==/7853811557348624.jpg","tns":[],"pic":7853811557348624},"artists":[{"id":488571,"name":"Tez Cadey","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7001,"mvid":477151,"transNames":null,"commentThreadId":"R_SO_4_30394891","ftype":0,"publishTime":1422201600007,"no":1,"fee":8,"type":0,"duration":210050,"status":0,"name":"Seve","id":30394891,"lastRank":84},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":479598964,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35533615,"name":"椿","picUrl":"http://p1.music.126.net/CpwIPy2YUWC6ksF88eGNyw==/109951162931819035.jpg","tns":[],"pic_str":"109951162931819035","pic":109951162931819035},"artists":[{"id":12002248,"name":"沈以诚","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_479598964","ftype":0,"publishTime":1495263051414,"no":1,"fee":0,"type":0,"duration":217584,"status":0,"name":"椿","id":479598964,"lastRank":101},{"privilege":{"st":0,"flag":2,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":533259686,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":37358928,"name":"BINGBIAN病变（原始版）","picUrl":"http://p1.music.126.net/OVBzkUhphxfWfkji9Owhkw==/109951163118002763.jpg","tns":[],"pic_str":"109951163118002763","pic":109951163118002763},"artists":[{"id":12276430,"name":"Cubi","tns":[],"alias":[]},{"id":12052056,"name":"Fi9江澈","tns":[],"alias":[]},{"id":13040585,"name":"Younglife","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_533259686","ftype":0,"publishTime":1498147200000,"no":1,"fee":0,"type":0,"duration":242024,"status":0,"name":"BINGBIAN病变（原版）","id":533259686,"lastRank":93},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":536622304,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":37575103,"name":"Lemon","picUrl":"http://p1.music.126.net/r0TgUXBEEmMG48KSsEa_mg==/109951163143657970.jpg","tns":["柠檬"],"pic_str":"109951163143657970","pic":109951163143657970},"artists":[{"id":159300,"name":"米津玄師","tns":[],"alias":[]}],"alias":["电视剧《非自然死亡》主题曲 / ドラマ「アンナチュラル」主題歌"],"score":100.0,"copyrightId":663018,"mvid":5841179,"transNames":null,"commentThreadId":"R_SO_4_536622304","ftype":0,"publishTime":1518364800007,"no":1,"fee":0,"type":0,"duration":255510,"status":0,"name":"Lemon","id":536622304,"lastRank":133},{"privilege":{"st":0,"flag":2,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":509508063,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36436162,"name":"退","picUrl":"http://p1.music.126.net/eatkYbLTaT4C2Eaef1ca3A==/109951163032634432.jpg","tns":[],"pic_str":"109951163032634432","pic":109951163032634432},"artists":[{"id":188694,"name":"蒋蒋","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":30002,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_509508063","ftype":0,"publishTime":1506528000007,"no":1,"fee":0,"type":0,"duration":241915,"status":0,"name":"退","id":509508063,"lastRank":109},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":517565282,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36750081,"name":"多想留在你身边","picUrl":"http://p1.music.126.net/vZT0bRACYjcadB9lPUjlmg==/109951163058505594.jpg","tns":[],"pic_str":"109951163058505594","pic":109951163058505594},"artists":[{"id":12176360,"name":"刘增瞳","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":17003,"mvid":5810778,"transNames":null,"commentThreadId":"R_SO_4_517565282","ftype":0,"publishTime":1510070400007,"no":1,"fee":0,"type":0,"duration":212713,"status":0,"name":"多想留在你身边","id":517565282,"lastRank":124},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":499308706,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35967091,"name":"短发（The Girl With Short Hair）","picUrl":"http://p1.music.126.net/okR7x2fr0pxUpOACcNni1Q==/109951163078931419.jpg","tns":[],"pic_str":"109951163078931419","pic":109951163078931419},"artists":[{"id":12349677,"name":"LAMPHO","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":36031,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_499308706","ftype":0,"publishTime":1512576000007,"no":1,"fee":8,"type":0,"duration":192071,"status":0,"name":"短发","id":499308706,"lastRank":88},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":208902,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":21252,"name":"若你碰到他","picUrl":"http://p1.music.126.net/2toWuH2oD6c0dM6QLdThzg==/109951163165824418.jpg","tns":[],"pic_str":"109951163165824418","pic":109951163165824418},"artists":[{"id":7214,"name":"蔡健雅","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":14014,"mvid":5496541,"transNames":null,"commentThreadId":"R_SO_4_208902","ftype":0,"publishTime":1250611200000,"no":4,"fee":0,"type":0,"duration":206000,"status":0,"name":"红色高跟鞋","id":208902,"lastRank":98},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":534064010,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":37441010,"name":"不必说抱歉","picUrl":"http://p1.music.126.net/XJLlIo_yUApqf4r9DUKteQ==/109951163123180281.jpg","tns":[],"pic_str":"109951163123180281","pic":109951163123180281},"artists":[{"id":12947071,"name":"胡66","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":22023,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_534064010","ftype":0,"publishTime":1516809600007,"no":1,"fee":0,"type":0,"duration":243202,"status":0,"name":"不必说抱歉","id":534064010,"lastRank":97},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":132975,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":12965,"name":"爱的就是你","picUrl":"http://p1.music.126.net/p7r5eg5x_M7sxRY7ZOUNuw==/45079976751922.jpg","tns":[],"pic":45079976751922},"artists":[{"id":4188,"name":"刘佳","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":490012,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_132975","ftype":0,"publishTime":1319385600000,"no":1,"fee":8,"type":0,"duration":273711,"status":0,"name":"爱的就是你","id":132975,"lastRank":92},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":536097172,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":37544046,"name":"盲目自信","picUrl":"http://p1.music.126.net/bD47R1GC5wj5vY72LIaiiw==/109951163138581738.jpg","tns":[],"pic_str":"109951163138581738","pic":109951163138581738},"artists":[{"id":10200,"name":"郁可唯","tns":[],"alias":[]}],"alias":["电视剧《谈判官》情感插曲"],"score":100.0,"copyrightId":514011,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_536097172","ftype":0,"publishTime":1518105600007,"no":0,"fee":8,"type":0,"duration":226624,"status":0,"name":"盲目自信","id":536097172},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":420125990,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":34768572,"name":"十三亿分贝 第一期","picUrl":"http://p1.music.126.net/nJcf8Mj8qoluct_KjuJkbg==/3445869446819923.jpg","tns":[],"pic":3445869446819923},"artists":[{"id":842003,"name":"范炜与程渤智","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":380010,"mvid":5344334,"transNames":null,"commentThreadId":"R_SO_4_420125990","ftype":0,"publishTime":1467907200007,"no":1,"fee":0,"type":0,"duration":188842,"status":0,"name":"西安人的歌","id":420125990},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":186016,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":18905,"name":"叶惠美","picUrl":"http://p1.music.126.net/yjVbsgfNeF2h7fIvnxuZDQ==/18894007811887644.jpg","tns":[],"pic_str":"18894007811887644","pic":18894007811887644},"artists":[{"id":6452,"name":"周杰伦","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":1007,"mvid":504177,"transNames":null,"commentThreadId":"R_SO_4_186016","ftype":0,"publishTime":1059580800000,"no":3,"fee":8,"type":0,"duration":269000,"status":0,"name":"晴天","id":186016,"lastRank":102},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":501467216,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36037281,"name":"Papillon","picUrl":"http://p1.music.126.net/RdkFwjv73ATKNE2ajwxyog==/109951163013685863.jpg","tns":[],"pic_str":"109951163013685863","pic":109951163013685863},"artists":[{"id":1083118,"name":"王嘉尔","tns":[],"alias":[]}],"alias":["巴比龙"],"score":100.0,"copyrightId":456010,"mvid":5619326,"transNames":null,"commentThreadId":"R_SO_4_501467216","ftype":0,"publishTime":1503676800000,"no":1,"fee":0,"type":0,"duration":195036,"status":0,"name":"Papillon","id":501467216},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":150430,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":15185,"name":"太平盛世","picUrl":"http://p1.music.126.net/dHuz3zATD07OXzQTKQZu4Q==/113249697661825.jpg","tns":[],"pic":113249697661825},"artists":[{"id":5196,"name":"陶喆","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":13009,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_150430","ftype":0,"publishTime":1104508800000,"no":4,"fee":8,"type":0,"duration":261906,"status":0,"name":"就是爱你","id":150430,"lastRank":118},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":31654455,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":3131119,"name":"Battlecry","picUrl":"http://p1.music.126.net/nJROWeZiEp1TUv27amRguQ==/18195817928618786.jpg","tns":[],"pic_str":"18195817928618786","pic":18195817928618786},"artists":[{"id":102714,"name":"Two Steps From Hell","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":456010,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_31654455","ftype":0,"publishTime":1430150400007,"no":3,"fee":0,"type":0,"duration":320467,"status":0,"name":"Victory","id":31654455,"lastRank":108},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":192000,"id":465675773,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35282197,"name":"Don't Wanna Know/We Don't Talk Anymore","picUrl":"http://p1.music.126.net/p_7aXCMoy77cdIbvwPVaAQ==/19100715997756928.jpg","tns":[],"pic_str":"19100715997756928","pic":19100715997756928},"artists":[{"id":43722,"name":"Sam Tsui","tns":[],"alias":[]},{"id":48409,"name":"Alex G","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":5381120,"transNames":null,"commentThreadId":"R_SO_4_465675773","ftype":0,"publishTime":1476547200007,"no":1,"fee":0,"type":0,"duration":211696,"status":0,"name":"Don't Wanna Know/We Don't Talk Anymore","id":465675773,"lastRank":100},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":480426313,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35554106,"name":"There For You","picUrl":"http://p1.music.126.net/E_ffmvXrVZoTugVf_Zf4Cg==/18520173860179248.jpg","tns":[],"pic_str":"18520173860179248","pic":18520173860179248},"artists":[{"id":780003,"name":"Martin Garrix","tns":[],"alias":[]},{"id":45129,"name":"Troye Sivan","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7001,"mvid":5547010,"transNames":null,"commentThreadId":"R_SO_4_480426313","ftype":0,"publishTime":1495728000007,"no":1,"fee":8,"type":0,"duration":221019,"status":0,"name":"There For You","id":480426313,"lastRank":94},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":26429346,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":2499063,"name":"We Can't Stop - Single","picUrl":"http://p1.music.126.net/lrlXAvlod8XF62-ENxK_HQ==/109951163168819865.jpg","tns":[],"pic_str":"109951163168819865","pic":109951163168819865},"artists":[{"id":66361,"name":"Miley Cyrus","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7001,"mvid":148016,"transNames":null,"commentThreadId":"R_SO_4_26429346","ftype":0,"publishTime":1370275200007,"no":1,"fee":8,"type":0,"duration":232490,"status":0,"name":"We Can't Stop","id":26429346,"lastRank":120},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":133998,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":13140,"name":"小黄","picUrl":"http://p1.music.126.net/fZFrplIVrHMx4lvgdqiIHQ==/42880953496261.jpg","tns":[],"pic":42880953496261},"artists":[{"id":4292,"name":"李荣浩","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_133998","ftype":0,"publishTime":1283961600000,"no":1,"fee":0,"type":0,"duration":318824,"status":0,"name":"老街","id":133998,"lastRank":131},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":287063,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":28520,"name":"逆光","picUrl":"http://p1.music.126.net/PehnaQ-BaAXeQg1d5s7leA==/6635552673699715.jpg","tns":[],"pic":6635552673699715},"artists":[{"id":9272,"name":"孙燕姿","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":13009,"mvid":5297280,"transNames":null,"commentThreadId":"R_SO_4_287063","ftype":0,"publishTime":1174492800007,"no":5,"fee":8,"type":0,"duration":289385,"status":0,"name":"我怀念的","id":287063},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":479408220,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35543068,"name":"我想和你唱 第二季 第4期","picUrl":"http://p1.music.126.net/9FhJLS1BrJdXAUJ2qjyJSg==/19212866183896782.jpg","tns":[],"pic_str":"19212866183896782","pic":19212866183896782},"artists":[{"id":1024308,"name":"张碧晨","tns":[],"alias":[]},{"id":964450,"name":"陈奕夫","tns":[],"alias":[]},{"id":12441083,"name":"傲日其愣","tns":[],"alias":[]},{"id":12440107,"name":"唐倩","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":404023,"mvid":5539073,"transNames":null,"commentThreadId":"R_SO_4_479408220","ftype":0,"publishTime":1495209600007,"no":1,"fee":8,"type":0,"duration":274996,"status":0,"name":"凉凉","id":479408220,"lastRank":96},{"privilege":{"st":0,"flag":2,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":27867140,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":2685311,"name":"房间","picUrl":"http://p1.music.126.net/hOr_kcXuEDIsQ0JK1HOewQ==/5698768766875669.jpg","tns":[],"pic":5698768766875669},"artists":[{"id":840134,"name":"刘瑞琦","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":22002,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_27867140","ftype":0,"publishTime":1382025600007,"no":1,"fee":0,"type":0,"duration":265769,"status":0,"name":"房间","id":27867140,"lastRank":121},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":468882985,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35297700,"name":"Blossom","picUrl":"http://p1.music.126.net/hZ2ttGYOQbL9ei9yABpejQ==/109951163032775841.jpg","tns":[],"pic_str":"109951163032775841","pic":109951163032775841},"artists":[{"id":805090,"name":"J.Fla","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":560011,"mvid":5441958,"transNames":null,"commentThreadId":"R_SO_4_468882985","ftype":0,"publishTime":1489075200007,"no":5,"fee":8,"type":0,"duration":172881,"status":0,"name":"Shape of You","id":468882985,"lastRank":103},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":407677607,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":34588150,"name":"爱原创音乐合辑7","picUrl":"http://p1.music.126.net/ZoeTF3NwUxClaorMK_3b_w==/1387583678025114.jpg","tns":[],"pic":1387583678025114},"artists":[{"id":1087662,"name":"董昱昆","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":22027,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_407677607","ftype":0,"publishTime":1458883643419,"no":11,"fee":0,"type":0,"duration":198034,"status":0,"name":"我想","id":407677607},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":32507038,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":3154175,"name":"绅士","picUrl":"http://p1.music.126.net/qpvBqYIqkRhO9Ry2qOCdJQ==/2942293117852634.jpg","tns":[],"pic":2942293117852634},"artists":[{"id":5781,"name":"薛之谦","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":420144,"transNames":null,"commentThreadId":"R_SO_4_32507038","ftype":0,"publishTime":1433433600007,"no":1,"fee":0,"type":0,"duration":261249,"status":0,"name":"演员","id":32507038,"lastRank":111},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":519913462,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36814361,"name":"做我的猫","picUrl":"http://p1.music.126.net/m3223Pj4ZXrItuylsVL5hA==/18855524904843746.jpg","tns":[],"pic_str":"18855524904843746","pic":18855524904843746},"artists":[{"id":188141,"name":"满舒克","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":22036,"mvid":5739085,"transNames":null,"commentThreadId":"R_SO_4_519913462","ftype":0,"publishTime":1511308800000,"no":1,"fee":0,"type":0,"duration":241231,"status":0,"name":"做我的猫","id":519913462,"lastRank":127},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":28815250,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35444067,"name":"猎户星座","picUrl":"http://p1.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg","tns":[],"pic_str":"18885211718782327","pic":18885211718782327},"artists":[{"id":4721,"name":"朴树","tns":[],"alias":[]}],"alias":["电影《后会无期》主题曲"],"score":100.0,"copyrightId":502011,"mvid":290244,"transNames":null,"commentThreadId":"R_SO_4_28815250","ftype":0,"publishTime":1493481600007,"no":9,"fee":0,"type":0,"duration":302119,"status":0,"name":"平凡之路","id":28815250,"lastRank":123},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":29750825,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":3070634,"name":"Es rappelt im Karton","picUrl":"http://p1.music.126.net/0iZ3SxgLvKah7MhPYNJHpw==/6633353651501334.jpg","tns":[],"pic":6633353651501334},"artists":[{"id":1032313,"name":"Pixie Paris","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7001,"mvid":5336757,"transNames":null,"commentThreadId":"R_SO_4_29750825","ftype":0,"publishTime":1415030400007,"no":1,"fee":8,"type":0,"duration":204434,"status":0,"name":"Es rappelt im Karton","id":29750825,"lastRank":114},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":192000,"id":72408,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":7012,"name":"天后(台湾版)","picUrl":"http://p1.music.126.net/vK-oQF0N_HY8a38C-hixIg==/49478023262283.jpg","tns":[],"pic":49478023262283},"artists":[{"id":2201,"name":"陈势安","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7002,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_72408","ftype":0,"publishTime":1286467200000,"no":2,"fee":8,"type":0,"duration":285387,"status":0,"name":"天后","id":72408,"lastRank":128},{"privilege":{"st":0,"flag":1,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":409941242,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":34613413,"name":"태양의 후예 OST Special Vol.1","picUrl":"http://p1.music.126.net/VOzI8Ma3Fdlfk1CKOJeb2Q==/1390882216518292.jpg","tns":[],"pic":1390882216518292},"artists":[{"id":124367,"name":"Mad Clown","tns":[],"alias":[]},{"id":830036,"name":"金娜英","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":422010,"mvid":5332133,"transNames":["再次见到你"],"commentThreadId":"R_SO_4_409941242","ftype":0,"publishTime":1466352395163,"no":5,"fee":8,"type":0,"duration":235727,"status":0,"name":"다시 너를","id":409941242,"lastRank":134},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":471385043,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36855053,"name":"渡","picUrl":"http://p1.music.126.net/fNbj5uDwltSDLbETdnEYYQ==/109951163069265719.jpg","tns":[],"pic_str":"109951163069265719","pic":109951163069265719},"artists":[{"id":5781,"name":"薛之谦","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":14026,"mvid":5541567,"transNames":null,"commentThreadId":"R_SO_4_471385043","ftype":0,"publishTime":1491840000007,"no":2,"fee":0,"type":0,"duration":312214,"status":0,"name":"暧昧","id":471385043,"lastRank":117},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":33291435,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":3197250,"name":"Mujeres y Hombres y Viceversa: Los Hits del Verano 2015","picUrl":"http://p1.music.126.net/a1rmVWOUMnluR5ENm5GyTA==/7728467232709568.jpg","tns":[],"pic":7728467232709568},"artists":[{"id":1090022,"name":"Tungevaag & Raaban","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7001,"mvid":5830047,"transNames":null,"commentThreadId":"R_SO_4_33291435","ftype":0,"publishTime":1436457600007,"no":19,"fee":8,"type":0,"duration":212000,"status":0,"name":"Samsara","id":33291435,"lastRank":110},{"privilege":{"st":0,"flag":4,"subp":1,"fl":128000,"fee":8,"dl":128000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":474581010,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35433010,"name":"BOOM","picUrl":"http://p1.music.126.net/9Ciy8nTq4snpxdRiFC7gJQ==/17975915602766625.jpg","tns":[],"pic_str":"17975915602766625","pic":17975915602766625},"artists":[{"id":688047,"name":"Tiësto","tns":[],"alias":[]},{"id":0,"name":"Sevenn","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7003,"mvid":5805015,"transNames":null,"commentThreadId":"R_SO_4_474581010","ftype":0,"publishTime":1492963200007,"no":1,"fee":8,"type":0,"duration":154146,"status":0,"name":"BOOM","id":474581010,"lastRank":119},{"privilege":{"st":0,"flag":2,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":128000,"id":29850531,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":3086393,"name":"郭旭的Demo","picUrl":"http://p1.music.126.net/o25ptaSygDb2rVdTpIKexw==/17793396672429120.jpg","tns":[],"pic_str":"17793396672429120","pic":17793396672429120},"artists":[{"id":1044203,"name":"郭旭","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":30016,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_29850531","ftype":0,"publishTime":1417363200007,"no":1,"fee":0,"type":0,"duration":249129,"status":0,"name":"不找了","id":29850531,"lastRank":161},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":36492599,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":3395395,"name":"Trip","picUrl":"http://p1.music.126.net/b0Kgo4m-EnW-X20oYjEb_w==/3383197281284518.jpg","tns":[],"pic":3383197281284518},"artists":[{"id":1035020,"name":"Axero","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_36492599","ftype":0,"publishTime":1447084800007,"no":1,"fee":0,"type":0,"duration":188786,"status":0,"name":"Trip","id":36492599,"lastRank":126},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":506092035,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":36224021,"name":"The Spectre","picUrl":"http://p1.music.126.net/um3WrsNYjSLrsycBkB7urw==/109951163025213134.jpg","tns":[],"pic_str":"109951163025213134","pic":109951163025213134},"artists":[{"id":1045123,"name":"Alan Walker","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7001,"mvid":5666029,"transNames":null,"commentThreadId":"R_SO_4_506092035","ftype":0,"publishTime":1505404800007,"no":1,"fee":8,"type":0,"duration":193778,"status":0,"name":"The Spectre","id":506092035,"lastRank":116},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":529834699,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":37254213,"name":"大哥别杀我","picUrl":"http://p1.music.126.net/VF4yy6iFdeJNBXdGxNc-4w==/109951163109102849.jpg","tns":[],"pic_str":"109951163109102849","pic":109951163109102849},"artists":[{"id":13058582,"name":"跟风超人","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":414012,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_529834699","ftype":0,"publishTime":1516032000007,"no":0,"fee":0,"type":0,"duration":204800,"status":0,"name":"大哥别杀我","id":529834699,"lastRank":162},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":513357806,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36582135,"name":"再见","picUrl":"http://p1.music.126.net/GSh0V_FWzz1yDOq_9Hml7g==/109951163046095930.jpg","tns":[],"pic_str":"109951163046095930","pic":109951163046095930},"artists":[{"id":12766324,"name":"秦洋","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":14022,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_513357806","ftype":0,"publishTime":1508342400007,"no":1,"fee":0,"type":0,"duration":269538,"status":0,"name":"再见","id":513357806,"lastRank":143},{"privilege":{"st":0,"flag":2,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":451169473,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35103001,"name":"骗自己","picUrl":"http://p1.music.126.net/SULJBUGKfRb64pe0NaqZqA==/109951162874315087.jpg","tns":[],"pic_str":"109951162874315087","pic":109951162874315087},"artists":[{"id":12258420,"name":"AY楊佬叁","tns":[],"alias":[]},{"id":0,"name":"Noor-99","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_451169473","ftype":0,"publishTime":1483434862027,"no":1,"fee":0,"type":0,"duration":219187,"status":0,"name":"骗自己PT.2 (Remix-下酒菜)","id":451169473,"lastRank":130},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":534067514,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":37443166,"name":"粉红色的回忆","picUrl":"http://p1.music.126.net/b95I7Jhv7XTr0UZNEZT6ZQ==/109951163126092914.jpg","tns":[],"pic_str":"109951163126092914","pic":109951163126092914},"artists":[{"id":5418,"name":"王宝强","tns":[],"alias":[]},{"id":12204711,"name":"刘昊然","tns":[],"alias":[]},{"id":12250110,"name":"肖央","tns":[],"alias":[]},{"id":12054555,"name":"潘粤明","tns":[],"alias":[]},{"id":5793,"name":"小沈阳","tns":[],"alias":[]},{"id":1049463,"name":"张子枫","tns":[],"alias":[]}],"alias":["电影《唐人街探案2》拜年歌"],"score":100.0,"copyrightId":414012,"mvid":5810544,"transNames":null,"commentThreadId":"R_SO_4_534067514","ftype":0,"publishTime":1517414400007,"no":0,"fee":0,"type":0,"duration":157426,"status":0,"name":"粉红色的回忆","id":534067514},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":192000,"id":29787426,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":2774122,"name":"Freaks","picUrl":"http://p1.music.126.net/hNCqqFnRLQrNM76FS-Jvaw==/6012129580852985.jpg","tns":[],"pic":6012129580852985},"artists":[{"id":858362,"name":"Timmy Trumpet","tns":[],"alias":[]},{"id":74873,"name":"Savage","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7003,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_29787426","ftype":0,"publishTime":1394985600007,"no":2,"fee":8,"type":0,"duration":168829,"status":0,"name":"Freaks (Radio Edit)","id":29787426,"lastRank":132},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":534540498,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":37467185,"name":"藏","picUrl":"http://p1.music.126.net/EishE6pMjmRwiI2VYEMYjw==/109951163133254061.jpg","tns":[],"pic_str":"109951163133254061","pic":109951163133254061},"artists":[{"id":1142042,"name":"徐梦圆","tns":[],"alias":[]},{"id":12025552,"name":"双笙","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":462012,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_534540498","ftype":0,"publishTime":1517846400007,"no":0,"fee":8,"type":0,"duration":198893,"status":0,"name":"藏","id":534540498,"lastRank":122},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":515601126,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":36515785,"name":"Waves","picUrl":"http://p1.music.126.net/QBJowETo_minDXz_F2GSHw==/18224405230956541.jpg","tns":[],"pic_str":"18224405230956541","pic":18224405230956541},"artists":[{"id":74518,"name":"Rachel Platten","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7001,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_515601126","ftype":0,"publishTime":1509033600007,"no":6,"fee":8,"type":0,"duration":175386,"status":0,"name":"Shivers","id":515601126,"lastRank":106},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":30431376,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":3098832,"name":"如也","picUrl":"http://p1.music.126.net/VuJFMbXzpAProbJPoXLv7g==/7721870161993398.jpg","tns":[],"pic":7721870161993398},"artists":[{"id":1007170,"name":"陈粒","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":462581,"transNames":null,"commentThreadId":"R_SO_4_30431376","ftype":0,"publishTime":1422806400007,"no":8,"fee":8,"type":0,"duration":200348,"status":0,"name":"易燃易爆炸","id":30431376,"lastRank":174},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":410654865,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":34609808,"name":"GQ","picUrl":"http://p1.music.126.net/mpq8fua8Ud7567fWNe9Jiw==/1404076355991006.jpg","tns":[],"pic":1404076355991006},"artists":[{"id":12040030,"name":"Lola Coca","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_410654865","ftype":0,"publishTime":1461303766344,"no":1,"fee":0,"type":0,"duration":162980,"status":0,"name":"GQ","id":410654865,"lastRank":138},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":254285,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":25409,"name":"李宇春 同名专辑","picUrl":"http://p1.music.126.net/59GIf3bgpHPJoHYPIhqXkA==/72567767449565.jpg","tns":[],"pic":72567767449565},"artists":[{"id":8327,"name":"李宇春","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":28207,"transNames":null,"commentThreadId":"R_SO_4_254285","ftype":0,"publishTime":1261411200000,"no":2,"fee":0,"type":0,"duration":210678,"status":0,"name":"下个，路口，见","id":254285},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":25706282,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":2285010,"name":"世界","picUrl":"http://p1.music.126.net/d541jx7SqoDzVkenhmtg6g==/19193074974743620.jpg","tns":[],"pic_str":"19193074974743620","pic":19193074974743620},"artists":[{"id":12977,"name":"逃跑计划","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":5003,"mvid":382555,"transNames":null,"commentThreadId":"R_SO_4_25706282","ftype":0,"publishTime":1325347200007,"no":7,"fee":0,"type":0,"duration":252000,"status":0,"name":"夜空中最亮的星","id":25706282,"lastRank":144},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":526857315,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36993743,"name":"I Wanna Get Love.","picUrl":"http://p1.music.126.net/m1yN6D5f5_cglOTALj1Z0Q==/109951163155087195.jpg","tns":[],"pic_str":"109951163155087195","pic":109951163155087195},"artists":[{"id":12932368,"name":"蔡徐坤","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_526857315","ftype":0,"publishTime":1513570579321,"no":1,"fee":0,"type":0,"duration":194783,"status":0,"name":"I Wanna Get Love","id":526857315,"lastRank":156},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":462895657,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35196793,"name":"American Teen","picUrl":"http://p1.music.126.net/mQFA8ipQI7FmyBBkgGx3IA==/19160089625633184.jpg","tns":[],"pic_str":"19160089625633184","pic":19160089625633184},"artists":[{"id":301757,"name":"Khalid","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7001,"mvid":5614141,"transNames":null,"commentThreadId":"R_SO_4_462895657","ftype":0,"publishTime":1488470400007,"no":2,"fee":8,"type":0,"duration":202546,"status":0,"name":"Young Dumb & Broke","id":462895657,"lastRank":147},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":493705537,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35844332,"name":"Man Crush Monday","picUrl":"http://p1.music.126.net/SK6i19PXo2YYhU-aMvcREg==/18322261765515850.jpg","tns":[],"pic_str":"18322261765515850","pic":18322261765515850},"artists":[{"id":94779,"name":"Imagine Dragons","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7003,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_493705537","ftype":0,"publishTime":1500566400007,"no":2,"fee":8,"type":0,"duration":188238,"status":0,"name":"Thunder","id":493705537,"lastRank":176},{"privilege":{"st":0,"flag":2,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":408814900,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":34511959,"name":"算云烟","picUrl":"http://p1.music.126.net/Eg4cy0_HIF2nrX2gMCsWkQ==/17967119509636556.jpg","tns":[],"pic_str":"17967119509636556","pic":17967119509636556},"artists":[{"id":1039895,"name":"谢春花","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":5383219,"transNames":null,"commentThreadId":"R_SO_4_408814900","ftype":0,"publishTime":1466438400007,"no":2,"fee":8,"type":0,"duration":257265,"status":0,"name":"借我","id":408814900,"lastRank":159},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":308353,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":30614,"name":"3/8","picUrl":"http://p1.music.126.net/N1pCSE3EtocC7NowAAuEHQ==/74766790706391.jpg","tns":[],"pic":74766790706391},"artists":[{"id":9952,"name":"谢安琪","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7003,"mvid":5307789,"transNames":null,"commentThreadId":"R_SO_4_308353","ftype":0,"publishTime":1197302400000,"no":2,"fee":8,"type":0,"duration":277029,"status":0,"name":"钟无艳","id":308353,"lastRank":158},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":30953009,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":3104138,"name":"Furious 7 (Original Motion Picture Soundtrack)","picUrl":"http://p1.music.126.net/JIc9X91OSH-7fUZqVfQXAQ==/7731765766799133.jpg","tns":["《速度与激情7》原声带"],"pic":7731765766799133},"artists":[{"id":46006,"name":"Wiz Khalifa","tns":[],"alias":[]},{"id":90331,"name":"Charlie Puth","tns":[],"alias":[]}],"alias":["《速度与激情7》致敬保罗沃克插曲"],"score":100.0,"copyrightId":7002,"mvid":393006,"transNames":["有缘再见"],"commentThreadId":"R_SO_4_30953009","ftype":0,"publishTime":1426521600007,"no":7,"fee":8,"type":0,"duration":230520,"status":0,"name":"See You Again (feat. Charlie Puth)","id":30953009,"lastRank":136},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":27583305,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":2641180,"name":"Here With You","picUrl":"http://p1.music.126.net/qqj_ClyLVRbZ-EBlmkHZrQ==/2788361488086447.jpg","tns":[],"pic":2788361488086447},"artists":[{"id":28727,"name":"Asher Book","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":508081,"transNames":null,"commentThreadId":"R_SO_4_27583305","ftype":0,"publishTime":1346169600007,"no":1,"fee":0,"type":0,"duration":225541,"status":0,"name":"Here With You","id":27583305,"lastRank":137},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":68450,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":6665,"name":"6号出口 电影原声带","picUrl":"http://p1.music.126.net/1xeMkge8ZHrV9q5TWQ2fyg==/26388279078675.jpg","tns":[],"pic":26388279078675},"artists":[{"id":12707,"name":"苏打绿","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":11001,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_68450","ftype":0,"publishTime":1178812800000,"no":2,"fee":8,"type":0,"duration":274025,"status":0,"name":"小情歌","id":68450},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":460578140,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35178494,"name":"卧龙与酒","picUrl":"http://p1.music.126.net/iL36G-e6rm2zwCUmlL4pOw==/109951162859100521.jpg","tns":[],"pic_str":"109951162859100521","pic":109951162859100521},"artists":[{"id":12287118,"name":"Ayo97","tns":[],"alias":[]},{"id":12292708,"name":"是阿涵阿","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_460578140","ftype":0,"publishTime":1486853553686,"no":2,"fee":0,"type":0,"duration":236512,"status":0,"name":"感谢你曾来过","id":460578140,"lastRank":171},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":484365611,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35630260,"name":"2:00am in LA","picUrl":"http://p1.music.126.net/N9k6Np86XbLQC3kAhOAUQQ==/19108412579325816.jpg","tns":[],"pic_str":"19108412579325816","pic":19108412579325816},"artists":[{"id":776761,"name":"Jake Miller","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":5587166,"transNames":null,"commentThreadId":"R_SO_4_484365611","ftype":0,"publishTime":1497542400000,"no":3,"fee":0,"type":0,"duration":169923,"status":0,"name":"Parties","id":484365611,"lastRank":140},{"privilege":{"st":0,"flag":2,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":493784861,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35847269,"name":"走心小卖家","picUrl":"http://p1.music.126.net/qEz6FkiTEq-fV3S6DrOpZA==/109951162986902653.jpg","tns":[],"pic_str":"109951162986902653","pic":109951162986902653},"artists":[{"id":12138252,"name":"张雪飞","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":5810885,"transNames":null,"commentThreadId":"R_SO_4_493784861","ftype":0,"publishTime":1501256953085,"no":1,"fee":0,"type":0,"duration":220960,"status":0,"name":"走心小卖家","id":493784861,"lastRank":135},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":448184048,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35062876,"name":"翻唱","picUrl":"http://p1.music.126.net/8EkuWEylV23h2YJVtZ26VA==/109951162826296986.jpg","tns":[],"pic_str":"109951162826296986","pic":109951162826296986},"artists":[{"id":961358,"name":"不才","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_448184048","ftype":0,"publishTime":1482224607140,"no":1,"fee":0,"type":0,"duration":279534,"status":0,"name":"化身孤岛的鲸","id":448184048,"lastRank":167},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":128000,"id":423227267,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":34791400,"name":"Bomba (Remix Klass)","picUrl":"http://p1.music.126.net/VOOjccuwLPx8rf1lWUZQMA==/3400789473359154.jpg","tns":[],"pic":3400789473359154},"artists":[{"id":12080227,"name":"Jessy Matador","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_423227267","ftype":0,"publishTime":1289750400007,"no":2,"fee":0,"type":0,"duration":166460,"status":0,"name":"Bomba (Radio Edit) (Remix Klass)","id":423227267,"lastRank":181},{"privilege":{"st":0,"flag":2,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":410801653,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":34674179,"name":"啷个哩个啷","picUrl":"http://p1.music.126.net/ZnFe6Uj1Lmr_HrAjDbe02Q==/1394180751920871.jpg","tns":[],"pic":1394180751920871},"artists":[{"id":11974049,"name":"鹏泊","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":30016,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_410801653","ftype":0,"publishTime":1461513600007,"no":1,"fee":0,"type":0,"duration":187026,"status":0,"name":"啷个哩个啷","id":410801653},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":30352891,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":3098268,"name":"牵丝戏","picUrl":"http://p1.music.126.net/Nd86SOcyCxU5Qu7jdZn_MQ==/7725168696876736.jpg","tns":[],"pic":7725168696876736},"artists":[{"id":188565,"name":"银临","tns":[],"alias":[]},{"id":188558,"name":"Aki阿杰","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_30352891","ftype":0,"publishTime":1422288000007,"no":1,"fee":0,"type":0,"duration":239128,"status":0,"name":"牵丝戏","id":30352891,"lastRank":157},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":432506809,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":34940090,"name":"我愚蠢的理想主义","picUrl":"http://p1.music.126.net/bPoOwlDdL72AkXjYvj-3aQ==/18623527952064964.jpg","tns":[],"pic_str":"18623527952064964","pic":18623527952064964},"artists":[{"id":7122,"name":"阿肆","tns":[],"alias":[]},{"id":3685,"name":"林宥嘉","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":22020,"mvid":5362519,"transNames":null,"commentThreadId":"R_SO_4_432506809","ftype":0,"publishTime":1475078400007,"no":3,"fee":0,"type":0,"duration":246000,"status":0,"name":"致姗姗来迟的你 ","id":432506809,"lastRank":168},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":540253253,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":37667360,"name":"Like I Do","picUrl":"http://p1.music.126.net/saAVxJlfv9UahCzGf0RjHA==/109951163159358621.jpg","tns":[],"pic_str":"109951163159358621","pic":109951163159358621},"artists":[{"id":31211,"name":"David Guetta","tns":[],"alias":[]},{"id":780003,"name":"Martin Garrix","tns":[],"alias":[]},{"id":49308,"name":"Brooks","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7002,"mvid":5839138,"transNames":null,"commentThreadId":"R_SO_4_540253253","ftype":0,"publishTime":1519228800007,"no":1,"fee":8,"type":0,"duration":202500,"status":0,"name":"Like I Do","id":540253253},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":29019227,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":2980029,"name":"V","picUrl":"http://p1.music.126.net/RkbAVgGxk1Nr5fjuaR9dww==/19175482788569403.jpg","tns":[],"pic_str":"19175482788569403","pic":19175482788569403},"artists":[{"id":96266,"name":"Maroon 5","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7003,"mvid":378783,"transNames":null,"commentThreadId":"R_SO_4_29019227","ftype":0,"publishTime":1409587200007,"no":5,"fee":8,"type":0,"duration":235493,"status":0,"name":"Sugar","id":29019227,"lastRank":149},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":534542490,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":37464169,"name":"奴隶","picUrl":"http://p1.music.126.net/Koc4vxzegvKVuemqnF8PNg==/109951163133082824.jpg","tns":[],"pic_str":"109951163133082824","pic":109951163133082824},"artists":[{"id":784257,"name":"Jony J","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_534542490","ftype":0,"publishTime":1517932800007,"no":0,"fee":8,"type":0,"duration":191000,"status":0,"name":"奴隶","id":534542490,"lastRank":112},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":534065323,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":37444116,"name":"Sincerely (アニメ盤)","picUrl":"http://p1.music.126.net/qgTYq6aaykk4tWUY7EE7hw==/109951163124812552.jpg","tns":[],"pic_str":"109951163124812552","pic":109951163124812552},"artists":[{"id":896286,"name":"TRUE","tns":[],"alias":[]}],"alias":["TV动画《紫罗兰永恒花园》片头曲 / TVアニメ「ヴァイオレット・エヴァーガーデン」OPテーマ"],"score":100.0,"copyrightId":663018,"mvid":5829034,"transNames":null,"commentThreadId":"R_SO_4_534065323","ftype":0,"publishTime":1517328000007,"no":1,"fee":0,"type":0,"duration":275080,"status":0,"name":"Sincerely","id":534065323,"lastRank":148},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":25718007,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":2292012,"name":"Can’t Be Half","picUrl":"http://p1.music.126.net/LGSZ3rGT8Ux1pYxcwxnR-g==/2225411534621328.jpg","tns":[],"pic":2225411534621328},"artists":[{"id":2127,"name":"陈柏宇","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7001,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_25718007","ftype":0,"publishTime":1261065600007,"no":8,"fee":8,"type":0,"duration":239000,"status":0,"name":"你瞒我瞒","id":25718007,"lastRank":169},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":192000,"id":34383004,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":3280169,"name":"最新热歌慢摇111","picUrl":"http://p1.music.126.net/ZDPVQHdvJNKoqqWlpOT15Q==/3406287023809023.jpg","tns":[],"pic":3406287023809023},"artists":[{"id":139496,"name":"Sergio","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":472002,"transNames":null,"commentThreadId":"R_SO_4_34383004","ftype":0,"publishTime":1388505600004,"no":1,"fee":0,"type":0,"duration":223608,"status":0,"name":"Without U","id":34383004,"lastRank":153},{"privilege":{"st":0,"flag":2,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":519136840,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36789845,"name":"只只","picUrl":"http://p1.music.126.net/2pFqN1pyqF2DHdSt1hQ10Q==/109951163063456206.jpg","tns":[],"pic_str":"109951163063456206","pic":109951163063456206},"artists":[{"id":12270575,"name":"孟凡明","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_519136840","ftype":0,"publishTime":1510753404817,"no":1,"fee":0,"type":0,"duration":234545,"status":0,"name":"只只","id":519136840},{"privilege":{"st":0,"flag":2,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":536502758,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":37553227,"name":"离人愁","picUrl":"http://p1.music.126.net/kAErm2_Hj_p6DZ4jUAn5HQ==/109951163137056847.jpg","tns":[],"pic_str":"109951163137056847","pic":109951163137056847},"artists":[{"id":12420149,"name":"李袁杰","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_536502758","ftype":0,"publishTime":1518025747609,"no":1,"fee":0,"type":0,"duration":248875,"status":0,"name":"离人愁","id":536502758},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":520459701,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36855199,"name":"想把你留在这里","picUrl":"http://p1.music.126.net/_XRP0Yia_0uf17VefBqXfQ==/109951163071939783.jpg","tns":[],"pic_str":"109951163071939783","pic":109951163071939783},"artists":[{"id":1204010,"name":"Tizzy T","tns":[],"alias":[]},{"id":784257,"name":"Jony J","tns":[],"alias":[]}],"alias":["电影《芳华》推广曲"],"score":100.0,"copyrightId":22036,"mvid":5751045,"transNames":null,"commentThreadId":"R_SO_4_520459701","ftype":0,"publishTime":1511798400007,"no":1,"fee":0,"type":0,"duration":217947,"status":0,"name":"想把你留在这里","id":520459701,"lastRank":141},{"privilege":{"st":0,"flag":2,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":468517666,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35314420,"name":"失恋重修手册","picUrl":"http://p1.music.126.net/SIHenosscO7fs_bRmIkIHg==/19231557881482168.jpg","tns":[],"pic_str":"19231557881482168","pic":19231557881482168},"artists":[{"id":12122233,"name":"税子洺","tns":[],"alias":[]},{"id":1032247,"name":"赵钶","tns":[],"alias":[]},{"id":12050057,"name":"G.G(张思源）","tns":[],"alias":[]},{"id":5549,"name":"王睿","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_468517666","ftype":0,"publishTime":1490976000007,"no":0,"fee":0,"type":0,"duration":204485,"status":0,"name":"失恋重修手册","id":468517666,"lastRank":180},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":4386589,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":442695,"name":"Best I Never Had","picUrl":"http://p1.music.126.net/SbJn22gsq-Pv6WLm8PK98A==/564049465093755.jpg","tns":[],"pic":564049465093755},"artists":[{"id":103121,"name":"The Downtown Fiction","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7002,"mvid":5293276,"transNames":null,"commentThreadId":"R_SO_4_4386589","ftype":0,"publishTime":1237737600007,"no":3,"fee":8,"type":0,"duration":200000,"status":0,"name":"I Just Wanna Run","id":4386589,"lastRank":160},{"privilege":{"st":0,"flag":2,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":445546453,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35033703,"name":"浮生","picUrl":"http://p1.music.126.net/l-Ev4NbIeolk9QoJLtRzTQ==/109951162819579041.jpg","tns":[],"pic_str":"109951162819579041","pic":109951162819579041},"artists":[{"id":12205361,"name":"刘莱斯","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_445546453","ftype":0,"publishTime":1481184761032,"no":1,"fee":0,"type":0,"duration":329926,"status":0,"name":"浮生","id":445546453},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":437292675,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":34944235,"name":"我要你","picUrl":"http://p1.music.126.net/dDV995SIeG5-IN1eYq6FOg==/3300733912593978.jpg","tns":[],"pic":3300733912593978},"artists":[{"id":1054159,"name":"任素汐","tns":[],"alias":[]}],"alias":["电影《驴得水》主题曲"],"score":100.0,"copyrightId":442012,"mvid":5382141,"transNames":null,"commentThreadId":"R_SO_4_437292675","ftype":0,"publishTime":1477411200007,"no":0,"fee":0,"type":0,"duration":154230,"status":0,"name":"我要你","id":437292675,"lastRank":129},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":26060065,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":2302008,"name":"Native (Deluxe Version)","picUrl":"http://p1.music.126.net/b2nl6jsVbqj23IV8dVvJcg==/7766950139663735.jpg","tns":[],"pic":7766950139663735},"artists":[{"id":98105,"name":"OneRepublic","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7003,"mvid":148060,"transNames":null,"commentThreadId":"R_SO_4_26060065","ftype":0,"publishTime":1363881600007,"no":1,"fee":8,"type":0,"duration":257280,"status":0,"name":"Counting Stars","id":26060065,"lastRank":152},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":427142481,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":34840397,"name":"Clsr (Aash Mehta Flip)","picUrl":"http://p1.music.126.net/G55kQ5H7MQValAuI1_etcg==/3437073357923134.jpg","tns":[],"pic":3437073357923134},"artists":[{"id":1094364,"name":"Aash Mehta","tns":[],"alias":[]},{"id":893484,"name":"The Chainsmokers","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_427142481","ftype":0,"publishTime":1471276800007,"no":1,"fee":0,"type":0,"duration":281495,"status":0,"name":"Clsr (Aash Mehta Flip)","id":427142481,"lastRank":165},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":371362,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36826,"name":"我们爱音乐(首唱会赠送版)","picUrl":"http://p1.music.126.net/9xK60ID8ozN56lrjZqpAVQ==/105553116282321.jpg","tns":[],"pic":105553116282321},"artists":[{"id":12608,"name":"青蛙","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_371362","ftype":0,"publishTime":1267372800000,"no":9,"fee":0,"type":0,"duration":151066,"status":0,"name":"小跳蛙","id":371362,"lastRank":105},{"privilege":{"st":0,"flag":4,"subp":1,"fl":128000,"fee":8,"dl":128000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":540861947,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":37739757,"name":"尾站天国","picUrl":"http://p1.music.126.net/t-o6-piZIq_BiuOksV2HTw==/109951163164241653.jpg","tns":[],"pic_str":"109951163164241653","pic":109951163164241653},"artists":[{"id":7235,"name":"陈慧琳","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7003,"mvid":5842079,"transNames":null,"commentThreadId":"R_SO_4_540861947","ftype":0,"publishTime":1519574400007,"no":1,"fee":8,"type":0,"duration":249756,"status":0,"name":"尾站天国","id":540861947},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":474922552,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35437054,"name":"白山茶","picUrl":"http://p1.music.126.net/reaydxBvalZOzbDLoHbpyw==/109951162914346222.jpg","tns":[],"pic_str":"109951162914346222","pic":109951162914346222},"artists":[{"id":12382970,"name":"陈雪凝","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":36031,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_474922552","ftype":0,"publishTime":1493195439464,"no":1,"fee":8,"type":0,"duration":254593,"status":0,"name":"白山茶","id":474922552,"lastRank":173},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":473817398,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35424093,"name":"Attention","picUrl":"http://p1.music.126.net/v0JMvFMt1DWKeJHIfdKJ_w==/19133701346646507.jpg","tns":[],"pic_str":"19133701346646507","pic":19133701346646507},"artists":[{"id":90331,"name":"Charlie Puth","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7002,"mvid":5499051,"transNames":null,"commentThreadId":"R_SO_4_473817398","ftype":0,"publishTime":1492704000007,"no":1,"fee":8,"type":0,"duration":209381,"status":0,"name":"Attention","id":473817398,"lastRank":154},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":511391907,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36488098,"name":"PUMA","picUrl":"http://p1.music.126.net/0sFqX8_tVuXxBjlRq3xOLg==/109951163059441117.jpg","tns":[],"pic_str":"109951163059441117","pic":109951163059441117},"artists":[{"id":12276375,"name":"NINEONE","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_511391907","ftype":0,"publishTime":1507266569179,"no":1,"fee":0,"type":0,"duration":156378,"status":0,"name":"PUMA","id":511391907,"lastRank":150},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":461519272,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35211056,"name":"勉为其难","picUrl":"http://p1.music.126.net/yKOTZKNzLjSdDAUZ5oNGCg==/18786255673988164.jpg","tns":[],"pic_str":"18786255673988164","pic":18786255673988164},"artists":[{"id":12302029,"name":"王冕","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":36031,"mvid":5643262,"transNames":null,"commentThreadId":"R_SO_4_461519272","ftype":0,"publishTime":1487692800007,"no":1,"fee":8,"type":0,"duration":249677,"status":0,"name":"勉为其难","id":461519272,"lastRank":178},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":441491828,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35005583,"name":"飞行器的执行周期","picUrl":"http://p1.music.126.net/wSMfGvFzOAYRU_yVIfquAA==/2946691248081599.jpg","tns":[],"pic":2946691248081599},"artists":[{"id":2843,"name":"郭顶","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7003,"mvid":5404031,"transNames":null,"commentThreadId":"R_SO_4_441491828","ftype":0,"publishTime":1480003200007,"no":5,"fee":8,"type":0,"duration":325266,"status":0,"name":"水星记","id":441491828,"lastRank":183},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":128000,"id":31168303,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":3109627,"name":"热门华语262","picUrl":"http://p1.music.126.net/4Pu7M0q88fVVoo1ZFS_nmw==/3408486047237011.jpg","tns":[],"pic":3408486047237011},"artists":[{"id":188556,"name":"王宝","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_31168303","ftype":0,"publishTime":1420041600004,"no":1,"fee":0,"type":0,"duration":114000,"status":0,"name":"儿子，我是你爸爸","id":31168303,"lastRank":164},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":25906124,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":2339617,"name":"不想放手","picUrl":"http://p1.music.126.net/96L4ojVi9N3tdHk3r3GXjQ==/109951163066640079.jpg","tns":["Don't Want To Let Go"],"pic_str":"109951163066640079","pic":109951163066640079},"artists":[{"id":2116,"name":"陈奕迅","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7003,"mvid":303284,"transNames":null,"commentThreadId":"R_SO_4_25906124","ftype":0,"publishTime":1214755200007,"no":7,"fee":8,"type":0,"duration":285000,"status":0,"name":"不要说话","id":25906124,"lastRank":198},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":82486,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":8134,"name":"Soul Boy","picUrl":"http://p1.music.126.net/3pmKRpJV5tMyWzlsgFXq9w==/104453604650862.jpg","tns":[],"pic":104453604650862},"artists":[{"id":2738,"name":"方大同","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7002,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_82486","ftype":0,"publishTime":1130774400000,"no":3,"fee":8,"type":0,"duration":200620,"status":0,"name":"春风吹","id":82486},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":450853439,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35098128,"name":"2017（一）","picUrl":"http://p1.music.126.net/_d88fVvtP17B-hV7z1lWzg==/109951162835476747.jpg","tns":[],"pic_str":"109951162835476747","pic":109951162835476747},"artists":[{"id":8103,"name":"花粥","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_450853439","ftype":0,"publishTime":1483200000000,"no":1,"fee":0,"type":0,"duration":150824,"status":0,"name":"遥不可及的你","id":450853439,"lastRank":186},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":447925059,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35069014,"name":"无法长大","picUrl":"http://p1.music.126.net/BJgUd9aD9gpougZFASRTTw==/18548761162235571.jpg","tns":[],"pic_str":"18548761162235571","pic":18548761162235571},"artists":[{"id":6731,"name":"赵雷","tns":[],"alias":[]}],"alias":["Diao"],"score":100.0,"copyrightId":36016,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_447925059","ftype":0,"publishTime":1482249600007,"no":3,"fee":8,"type":0,"duration":374120,"status":0,"name":"阿刁","id":447925059},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":409916250,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":34610067,"name":"The Ocean","picUrl":"http://p1.music.126.net/rOyWF-Fb3I5dGYyKiTxWtQ==/17801093253909041.jpg","tns":[],"pic_str":"17801093253909041","pic":17801093253909041},"artists":[{"id":195021,"name":"Mike Perry","tns":[],"alias":[]},{"id":12354062,"name":"Shy Martin","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7001,"mvid":5347013,"transNames":null,"commentThreadId":"R_SO_4_409916250","ftype":0,"publishTime":1461033424219,"no":1,"fee":8,"type":0,"duration":183457,"status":0,"name":"The Ocean (Radio Edit)","id":409916250,"lastRank":175},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":525238797,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":37029277,"name":"REFRESH","picUrl":"http://p1.music.126.net/dvKjWx-eQKXhS5dG_okRlA==/109951163093174894.jpg","tns":[],"pic_str":"109951163093174894","pic":109951163093174894},"artists":[{"id":1132392,"name":"马思唯","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":36016,"mvid":5781073,"transNames":null,"commentThreadId":"R_SO_4_525238797","ftype":0,"publishTime":1514131200007,"no":0,"fee":0,"type":0,"duration":116571,"status":0,"name":"REFRESH","id":525238797,"lastRank":113},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":287035,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":28519,"name":"经典全纪录(主打精华版)","picUrl":"http://p1.music.126.net/ZpcOx5dbNTRK94vSIM20PQ==/768558627827568.jpg","tns":[],"pic":768558627827568},"artists":[{"id":9272,"name":"孙燕姿","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7002,"mvid":5293587,"transNames":null,"commentThreadId":"R_SO_4_287035","ftype":0,"publishTime":1172678400000,"no":29,"fee":8,"type":0,"duration":210000,"status":0,"name":"遇见","id":287035,"lastRank":151},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":515269424,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":36672203,"name":"Wolves","picUrl":"http://p1.music.126.net/-nQ2E-8ZjuwGtMipBTYzBw==/17902248323721194.jpg","tns":[],"pic_str":"17902248323721194","pic":17902248323721194},"artists":[{"id":140196,"name":"Selena Gomez","tns":[],"alias":[]},{"id":1060019,"name":"Marshmello","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7003,"mvid":5739060,"transNames":null,"commentThreadId":"R_SO_4_515269424","ftype":0,"publishTime":1508860800007,"no":1,"fee":8,"type":0,"duration":197993,"status":0,"name":"Wolves","id":515269424,"lastRank":163},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":28796621,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":2896110,"name":"Toca Toca (The Remixes)","picUrl":"http://p1.music.126.net/iR_u6YNOzfQ2g1FL_A6Msw==/5836207720467261.jpg","tns":[],"pic":5836207720467261},"artists":[{"id":92933,"name":"Fly Project","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":405025,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_28796621","ftype":0,"publishTime":1392220800007,"no":5,"fee":8,"type":0,"duration":165459,"status":0,"name":"Toca Toca (Radio Edit)","id":28796621,"lastRank":195},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":4341314,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":438387,"name":"xx","picUrl":"http://p1.music.126.net/Xik6a3wXoGPOLI1GNXGdFQ==/825733232504415.jpg","tns":[],"pic":825733232504415},"artists":[{"id":102035,"name":"The xx","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":390012,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_4341314","ftype":0,"publishTime":1250352000007,"no":1,"fee":0,"type":0,"duration":127920,"status":0,"name":"Intro","id":4341314,"lastRank":182},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":579954,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":54680,"name":"恋爱サーキュレーション","picUrl":"http://p1.music.126.net/hWrYLdhzF4waj4WL1dFPmg==/642114790633458.jpg","tns":[],"pic":642114790633458},"artists":[{"id":16456,"name":"花澤香菜","tns":[],"alias":[]}],"alias":["TV动画《化物语》OP4 / TVアニメ「化物語」OP4テーマ"],"score":100.0,"copyrightId":663018,"mvid":5682038,"transNames":["恋爱循环"],"commentThreadId":"R_SO_4_579954","ftype":0,"publishTime":1264521600000,"no":1,"fee":0,"type":0,"duration":253880,"status":0,"name":"恋爱サーキュレーション","id":579954,"lastRank":179},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":471403427,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35338449,"name":"我喜欢上你时的内心活动","picUrl":"http://p1.music.126.net/AyyxC4stCu-Pm5qa8gaqDQ==/18762066418246617.jpg","tns":[],"pic_str":"18762066418246617","pic":18762066418246617},"artists":[{"id":7217,"name":"陈绮贞","tns":[],"alias":[]}],"alias":["电影《喜欢你》主题曲"],"score":100.0,"copyrightId":504010,"mvid":5479022,"transNames":null,"commentThreadId":"R_SO_4_471403427","ftype":0,"publishTime":1491926400007,"no":1,"fee":0,"type":0,"duration":225761,"status":0,"name":"我喜欢上你时的内心活动","id":471403427},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":509518010,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":36784199,"name":"致我们单纯的小美好 电视原声带","picUrl":"http://p1.music.126.net/Z--3NoFqowsVF3L4a7yE_A==/109951163063300063.jpg","tns":[],"pic_str":"109951163063300063","pic":109951163063300063},"artists":[{"id":12647583,"name":"王俊琪","tns":[],"alias":[]}],"alias":["网剧《致我们单纯的小美好》推广曲"],"score":100.0,"copyrightId":660010,"mvid":5619766,"transNames":null,"commentThreadId":"R_SO_4_509518010","ftype":0,"publishTime":1506614400007,"no":1,"fee":8,"type":0,"duration":199679,"status":0,"name":"我多喜欢你，你会知道","id":509518010,"lastRank":172},{"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":355992,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":35139,"name":"追梦痴子心","picUrl":"http://p1.music.126.net/XDncptlBJ4_LN3hLBx-8aw==/19061133579343591.jpg","tns":[],"pic_str":"19061133579343591","pic":19061133579343591},"artists":[{"id":11679,"name":"GALA","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":677019,"mvid":90585,"transNames":null,"commentThreadId":"R_SO_4_355992","ftype":0,"publishTime":1300896000000,"no":10,"fee":0,"type":0,"duration":317400,"status":0,"name":"追梦赤子心","id":355992},{"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":25788001,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":2321001,"name":"初·爱","picUrl":"http://p1.music.126.net/LvDBXsBEuGK-ZNVs3XmRVg==/7926379325753599.jpg","tns":[],"pic":7926379325753599},"artists":[{"id":6066,"name":"杨宗纬","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":7003,"mvid":57003,"transNames":null,"commentThreadId":"R_SO_4_25788001","ftype":0,"publishTime":1364486400007,"no":1,"fee":8,"type":0,"duration":231000,"status":0,"name":"其实都没有","id":25788001},{"privilege":{"st":0,"flag":2,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":504624714,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":36152328,"name":"青柠","picUrl":"http://p1.music.126.net/CFWxtFlJK3qs-Fx-TUfMnQ==/109951163020971473.jpg","tns":[],"pic_str":"109951163020971473","pic":109951163020971473},"artists":[{"id":1197168,"name":"徐秉龙","tns":[],"alias":[]},{"id":12386867,"name":"桃十五","tns":[],"alias":[]}],"alias":[],"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_504624714","ftype":0,"publishTime":1504800000000,"no":1,"fee":8,"type":0,"duration":199999,"status":0,"name":"青柠","id":504624714}]</textarea>
</div>
<div class="n-cmt" id="comment-box" data-tid="A_PL_0_3778678" data-count="170170"></div>
</div>
</div>
</div>
</div>
<div class="g-ft ">
<div class="m-ft">
<div class="wrap f-cb">
<div class="copy">
<p>
<a href="//music.163.com/about" target="_blank" class="s-fc4">关于网易</a><span class="line">|</span>
<a href="//help.163.com/" target="_blank" class="s-fc4">客户服务</a><span class="line">|</span>
<a href="//music.163.com/html/web2/service.html" target="_blank" class="s-fc4">服务条款</a><span class="line">|</span>
<a href="//sitemap.163.com/" target="_blank" class="s-fc4">网站导航</a><span class="line">|</span>
<a id="g_feedback" href="#" class="s-fc4" onclick="nm.x.feedback();return false;" hidefocus="true">意见反馈</a>
</p>
<p class="s-fc3">
<span class="sep">网易公司版权所有©1997-2018</span>杭州乐读科技有限公司运营：<a href="http://p1.music.126.net/-DB9zs1FAJq8vg7HOb-yOQ==/3250156395654666.jpg" target="_blank" class="s-fc3">浙网文[2015] 0415-135号</a>
</p>
</div>
<ul class="enter f-fr">
<li>
<a class="logo logo-musician f-tid" href="//music.163.com/recruit" target="_blank">独立音乐人</a>
</li>
<li>
<a class="logo logo-topic f-tid" href="//music.163.com/topic/recruit" target="_blank">音乐专栏</a>
</li>
<li>
<a class="logo logo-midea f-tid" href="//music.163.com/topic/selfmedia" target="_blank">自媒体</a>
</li>
<li>
<a class="logo logo-reward f-tid" href="//music.163.com/web/reward" target="_blank">赞赏</a>
</li>
</ul>
</div>
</div>
</div>
<a title="回到顶部" class="m-back" href="#" id="g_backtop" hidefocus="true" style="display:none;">回到顶部</a>
<div id="template-box" style="display:none;"> <textarea name="ntp" id="m-wgt-selector" style="display:none;"><div class="u-slt f-pr"><span class="curr f-thide"></span><i class="btn"></i><ul></ul></div>
</textarea>
<textarea name="jst" id="m-wgt-selector-list" style="display:none;">{list data as x}<li class="f-thide"><a href="#" data-value="${x.v}" title="${x.t}">${x.t}</a></li>{/list}
</textarea>
<textarea name="ntp" id="m-wgt-create" style="display:none;"><div class="lyct m-crgd f-cb f-tc">
<p>歌单名：<input type="text" class="u-txt j-flag"></p>
<div class="u-err f-vhide j-flag"><i class="u-icn u-icn-25"></i>错误提示</div>
<p class="tip s-fc4">可通过“收藏”将音乐添加到新歌单中</p>
<div class="btn">
<a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w2 j-flag" hidefocus="true"><i>新 建</i></a>
<a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w2 j-flag" hidefocus="true"><i>取 消</i></a>
</div>
</div>
</textarea>
<textarea name="ntp" id="m-wgt-comment" style="display:none;"><div class="u-title u-title-1">
<h3><span class="f-ff2">评论</span></h3><span class="sub s-fc3">共<span class="j-flag">0</span>条评论</span>
</div>
<div class="m-cmmt">
<div class="iptarea">
<div class="head"><img src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50"></div>
<div class="j-flag"></div>
</div>
<div class="cmmts j-flag"></div>
<div class="j-flag"></div>
</div>
</textarea>
<textarea name="ntp" id="m-wgt-comment2" style="display:none;"><div class="m-dynamic">
<div class="dbox dbox-cmt">
<span class="darr"><i class="bd">◆</i><i class="bg">◆</i></span>
<div class="m-cmmt m-cmmt-s">
<div class="iptarea j-flag">
</div>
<div class="cmmts">
<div class="j-flag"></div>
<div class="dmore dmore-cmt f-cb">
<div class="dhas s-fc3">后面还有<span class="j-flag">0</span>条评论，<a data-type="viewmore" class="s-fc3 f-ff1" href="javascript:void(0)">查看更多&gt;</a></div>
<a data-type="cc" class="dtoggle" href="javascript:void(0)">收起<i data-type="cc" class="u-icn u-icn-61"></i></a>
</div>
</div>
</div>
</div>
</div>
</textarea>
<textarea name="ntp" id="m-wgt-comment3" style="display:none;"><div class="dcmt">
<p><span class="f-fw1">评论</span> (<span class="j-flag"></span>)</p>
<div class="m-cmmt m-cmmt-s">
<div class="iptarea j-flag">
</div>
<div class="cmmts j-flag">
</div>
<div class="j-flag">
</div>
</div>
</div>
</textarea>
<textarea name="jst" id="m-wgt-comment-item" style="display:none;"> {list beg..end as y}
{var x=xlist[y]}
{if !!x}
<div id="${x.commentId|seed}" class="itm" data-id="${x.commentId}">
<div class="head">
<a href="/user/home?id=${x.user.userId}"><img src="${x.user.avatarUrl}?param=50y50"></a>
</div>
<div class="cntwrap">
<div class="">
<div class="cnt f-brk">
<a href="/user/home?id=${x.user.userId}" class="s-fc7">${escape(x.user.nickname)}</a>
${getAuthIcon(x.user)}
{if !!x.beRepliedUser}
&nbsp;回复&nbsp;<a href="/user/home?id=${x.beRepliedUser.userId}" class="s-fc7">${escape(x.beRepliedUser.nickname)}</a>
${getAuthIcon(x.beRepliedUser)}
{/if}
：${getRichText(escape(x.content),'s-fc7')}
</div>
</div>
{if x.beReplied&&x.beReplied.length}
{var replied = x.beReplied[0]}
<div class="que f-brk f-pr s-fc3">
<span class="darr"><i class="bd">◆</i><i class="bg">◆</i></span>
{if replied&&replied.content&&replied.status!=-5}
<a class="s-fc7" href="/user/home?id=${replied.user.userId}">${replied.user.nickname}${getAuthIcon(replied.user)}</a>：${getRichText(escape(replied.content),'s-fc7')}
{else}
该评论已删除
{/if}
</div>
{/if}
<div class="rp">
<div class="time s-fc4">${timeformat(x.time)}</div>
{if x.topCommentId}<span class="top">音乐人置顶</span>{/if}
{if canTop()&&GUser&&GUser.userId&&(GUser.userId==x.user.userId)}
<span class="dlt">{if x.topCommentId}<a href="javascript:void(0)" class="s-fc3" data-id="${x.commentId}" data-tid="${x.topCommentId}" data-type="canceltop">解除置顶</a>{else}<a href="javascript:void(0)" class="s-fc3" data-id="${x.commentId}" data-type="gotop">置顶评论</a>{/if}<span class="sep">|</span></span>
{/if}
{if GUser&&GUser.userId&&(GUser.userId==x.user.userId||GUser.userId==resUserId)}
<span class="dlt"><a href="javascript:void(0)" class="s-fc3" data-id="${x.commentId}" {if x.topCommentId}data-tid="${x.topCommentId}" {/if}data-type="delete">删除</a><span class="sep">|</span></span>
{/if}
{if GAllowRejectComment}
{if hot||!x.isRemoveHotComment}
<span class="dlt"><a href="javascript:void(0)" class="s-fc3" data-id="${x.commentId}" data-type="reject">移除精彩评论</a><span class="sep">|</span></span>
{else}
<span class="s-fc3">已移除精彩评论</span><span class="sep">|</span>
{/if}
{/if}
{if !x.topCommentId}<a data-id="${x.commentId}" data-type="{if !x.liked}like{else}unlike{/if}" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-{if x.liked}13{else}12{/if}"></i>{if x.likedCount} (${getPlayCount(x.likedCount)}){/if}</a>
<span class="sep">|</span>{/if}
<a href="javascript:void(0)" class="s-fc3" data-id="${x.commentId}" data-type="reply">回复</a>
</div>
</div>
</div>
{/if}
{/list}
</textarea>
<textarea name="jst" id="m-wgt-comment-item-2" style="display:none;"> {list beg..end as y}
{var x=xlist[y]}
<div class="itm" data-id="${x.commentId}">
<div class="head">
<a href="/user/home?id=${x.user.userId}"><img src="${x.user.avatarUrl}?param=50y50"></a>
</div>
<div class="cntwrap">
<div class="cnt2 f-brk">
<a href="/user/home?id=${x.user.userId}" class="s-fc7">${escape(x.user.nickname)}</a>
${getAuthIcon(x.user)}
{if !!x.beRepliedUser}
&nbsp;回复&nbsp;<a href="/user/home?id=${x.beRepliedUser.userId}" class="s-fc7">${escape(x.beRepliedUser.nickname)}</a>
${getAuthIcon(x.beRepliedUser)}
{/if}
：${getRichText(escape(x.content),'s-fc7')}
</div>
{if x.beReplied&&x.beReplied.length}
{var replied = x.beReplied[0]}
<div class="que f-brk f-pr s-fc3">
<span class="darr"><i class="bd">◆</i><i class="bg">◆</i></span>
{if replied&&replied.content}
<a class="s-fc7" href="/user/home?id=${replied.user.userId}">${replied.user.nickname}${getAuthIcon(replied.user)}</a>：${getRichText(escape(replied.content),'s-fc7')}
{else}
该评论已删除
{/if}
</div>
{/if}
<div class="rp">
<div class="time s-fc4">${timeformat(x.time)}</div>
{if GUser&&GUser.userId&&(GUser.userId==x.user.userId||GUser.userId==resUserId)}
<span class="dlt">
<a href="javascript:void(0)" class="s-fc3" data-id="${x.commentId}" data-type="delete">删除</a><span class="sep">|</span>
</span>
{/if}
<a data-id="${x.commentId}" data-type="{if !x.liked}like{else}unlike{/if}" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-{if x.liked}13{else}12{/if}"></i>{if x.likedCount} (${getPlayCount(x.likedCount)}){/if}</a>
<span class="sep">|</span>
<a href="javascript:void(0)" class="s-fc3" data-id="${x.commentId}" data-type="reply">回复</a>
</div>
</div>
</div>
{/list}
</textarea>
<textarea name="jst" id="m-wgt-input-1" style="display:none;"> <div class="m-cmmtipt f-cb f-pr">
<div class="u-txtwrap holder-parent f-pr">
<textarea class="u-txt area j-flag" data-type="" placeholder="${placeholder}"><&#47;textarea>
</div>
<div class="btns f-cb f-pr">
<i class="icn u-icn u-icn-36 j-flag"></i><i class="icn u-icn u-icn-41 j-flag"></i>
<a href="javascript:void(0)" class="btn u-btn u-btn-1 j-flag">评论</a>
<span class="zs s-fc4 j-flag">110/120</span>
</div>
<div class="corr u-arr"><em class="arrline">◆</em><span class="arrclr">◆</span></div>
</div>
</textarea>
<textarea name="jst" id="m-wgt-input-2" style="display:none;"> <div class="rept m-quk m-quk-1 f-pr">
<div class="iner">
<div class="corr u-arr u-arr-1"><em class="arrline">◆</em><span class="arrclr">◆</span></div>
<div class="m-cmmtipt m-cmmtipt-1 f-cb f-pr">
<div class="u-txtwrap holder-parent f-pr j-wrap">
<textarea class="u-txt area j-flag" placeholder="${placeholder}"><&#47;textarea>
</div>
<div class="btns f-cb f-pr">
<i class="icn u-icn u-icn-36 j-flag"></i><i class="icn u-icn u-icn-41 j-flag"></i>
<a href="javascript:void(0)" class="btn u-btn u-btn-1 j-flag">回复</a>
<span class="zs s-fc4 j-flag">110/120</span>
</div>
</div>
</div>
</div>
</textarea>
<textarea name="jst" id="m-wgt-input-3" style="display:none;"> <div class="m-cmmtipt f-cb f-pr">
<div class="u-txtwrap holder-parent f-pr">
<textarea class="u-txt area j-flag" placeholder="${placeholder}"><&#47;textarea>
</div>
<div class="btns f-cb f-pr">
<i class="icn u-icn u-icn-36 j-flag"></i><i class="icn u-icn u-icn-41 j-flag"></i>
<a class="btn u-btn u-btn-1 j-flag" href="javascript:void(0)">回复</a>
<span class="zs s-fc4 j-flag">110/120</span>
</div>
</div>
</textarea>
<textarea name="jst" id="m-wgt-input-4" style="display:none;"> <div class="m-cmmtipt f-cb f-pr">
<div class="u-txtwrap f-pr">
<textarea class="u-txt area j-flag"><&#47;textarea>
</div>
<div class="btns f-cb f-pr">
<i class="icn u-icn u-icn-36 j-flag"></i><i class="icn u-icn u-icn-41 j-flag" style="display:none;"></i>
<a class="f-fr u-btn u-btn-1 j-flag" href="javascript:void(0)">发送</a><span class="zs s-fc4 j-flag">110/120</span>
</div>
</div>
</textarea>
<textarea name="jst" id="m-wgt-input-5" style="display:none;"> <div class="m-cmmtipt f-cb f-pr">
<div class="u-txtwrap holder-parent f-pr">
<textarea class="u-txt area j-flag" placeholder="${placeholder}"><&#47;textarea>
</div>
<div class="btns f-cb f-pr">
<i class="icn u-icn u-icn-36 j-flag"></i><i class="icn u-icn u-icn-41 j-flag"></i>
<a class="btn u-btn u-btn-1 j-flag" href="javascript:void(0)">评论</a>
<span class="zs s-fc4 j-flag">110/120</span>
</div>
</div>
</textarea>
<textarea name="jst" id="m-wgt-input-6" style="display:none;"> <div class="m-cmmtipt f-cb f-pr">
<div class="u-txtwrap holder-parent f-pr">
<textarea class="u-txt area j-flag" placeholder="${placeholder}"><&#47;textarea>
</div>
<div class="btns f-cb f-pr">
<i class="icn u-icn u-icn-36 j-flag"></i><i class="icn u-icn u-icn-41 j-flag"></i>
<a class="btn u-btn u-btn-1 j-flag" href="javascript:void(0)">发送</a>
<span class="zs s-fc4 j-flag">110/120</span>
</div>
</div>
</textarea>
<textarea name="ntp" id="m-wgt-subscribe" style="display:none;"><div class="lyct lyct-1 m-favgd f-cb">
<div class="tit j-flag"><i class="u-icn u-icn-33"></i>新歌单</div>
<div class="j-flag">
<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>
</div>
</div>
</textarea>
<textarea name="jst" id="m-wgt-subscribe-item" style="display:none;"><ul>
{list beg..end as y}
{var x=xlist[y]}
<li data-id="${x.id}" class="xtag {if x.trackCount+size>10000}dis{/if}">
<div class="item f-cb">
<div class="left">
<a href="javascript:void(0)" class="avatar" target="_blank">
<img alt="" src="${x.coverImgUrl}?param=40y40">
{if x.highQuality}<i class="u-jp u-icn2 u-icn2-jp5"></i>{/if}
</a>
</div>
<p class="name f-thide"><a class="s-fc0" href="javascript:void(0)" target="_blank">${escape(cutStr(x.name,40))}</a></p>
<p class="s-fc3">${x.trackCount}首</p>
{if x.trackCount+size>10000}<p class="limit">歌单已满</p>{/if}
</div>
</li>
{/list}
</ul>
</textarea>
<textarea name="ntp" id="m-wgt-forward" style="display:none;"><div class="lyct lyct-1 f-cb">
<div class="m-lyshare">
<div class="u-txtwrap f-pr">
<label style="display: block;" class="j-flag">说点什么</label>
<textarea class="u-txt area j-flag" text = ><&#47;textarea>
</div>
<div class="oper f-cb j-flag">
<div class="face f-fl f-pr">
<i class="u-icn u-icn-36 f-fl j-flag"></i>
<i class="u-icn u-icn-41 j-flag"></i>
</div>
<span class="zs f-fr s-fc3 j-flag">140</span>
</div>
<div class="btnwrap">
<a class="u-btn2 u-btn2-2 u-btn2-w2 j-flag" hidefocus="true" href="#"><i>转发</i></a>
<a class="u-btn2 u-btn2-1 u-btn2-w2 j-flag" hidefocus="true" href="#"><i>取消</i></a>
</div>
<div class="j-flag u-err"><i class="u-icn u-icn-25"></i><span></span></div>
</div>
</div>
</textarea>
<textarea name="ntp" id="m-import-ok" style="display:none;"><div class="lyct f-cb f-tc">
<p class="f-fs3 f-ff2"><i class="u-icn u-icn-76"></i>&nbsp;&nbsp;歌曲同步完成</p>
<div class="lybtn">
<a href="javascript:;" class="u-btn2 u-btn2-2 j-flag" hidefocus="true"><i>查看我的音乐</i></a>
</div>
</div>
</textarea>
<textarea name="jst" id="m-wgt-atlist" style="display:none;"> <div class="u-atlist">
{if suggests.length == 0}
<p>轻敲空格完成输入</p>
{else}
<p>选择最近@的人或直接输入</p>
{/if}
<div class="lst">
{list suggests as suggest}
<a href="javascript:;" data-index=${suggest_index} class="f-thide j-sgt">${suggest.nickname}</a>
{/list}
</div>
</div>
</textarea>
<textarea name="jst" id="m-wgt-receiverInput" style="display:none;"> <div class="ct f-pr">
<div class="u-txtwrap f-pr">
<div class="u-txt txtwrap j-flag">
{if receiver}
<div class="blk s-fc3 j-receiver">${receiver.nickname}<a href="#" class="cls" title="删除">&times;</a></div>
{/if}
<span class="holder-parent j-flag" style="float:left">
<input type="text" class="txt j-flag" />
<label class="holder j-flag">选择或输入好友昵称</label>
</span>
</div>
</div>
<ul class="full j-flag" style="_height:182px;display:none">
{list users as user}
<li class="j-item" data-userId=${user.userId} data-username=${user.nickname} data-index=${user_index}><a href="#"><img src=${user.avatarUrl}>${user.nickname}</a></li>
{/list}
</ul>
<div class="j-flag" style="position:absolute;left: -1000px;width:auto;"></div>
</div>
</textarea>
<textarea name="jst" id="m-wgt-receiverList" style="display:none;"> {list users as user}
<li class="j-item" data-userId=${user.userId} data-username=${user.nickname} data-index=${user_index}><a href="#"><img src=${user.avatarUrl}>${user.nickname}</a></li>
{/list}
</textarea>
<textarea name="ntp" id="m-wgt-sharewin" style="display:none;"><div class="lyct lyct-1 f-cb">
<div class="m-lyshare">
<ul class="m-tabs1 j-flag">
<li><a href="#"><em>分享给大家</em></a></li>
<li><a href="#"><em>私信分享</em></a></li>
</ul>
<div class="u-err j-flag" style="display:none">最多选择10位好友</div>
<div class="j-flag"></div>
<div class="j-slogan"></div>
<div class="u-txtwrap f-pr">
<textarea class="u-txt area j-flag" placeholder="说点什么吧" data-action="txt"><&#47;textarea>
<div class="info f-pr j-flag" data-action="search"></div>
</div>
<div class="oper f-cb">
<div class="face f-fl f-pr">
<i class="u-icn u-icn-36 f-fl j-flag" data-action="emot"></i>
<i class="u-icn u-icn-41 f-fl j-flag" data-action="at"></i>
<i class="u-icn u-icn-97 j-flag f-pr" data-action="upload" data-default></i>
</div>
<span class="f-fr s-fc4 j-flag">140/140</span>
</div>
<div class="f-cb j-flag"></div>
<div class="f-cb">
<div class="btnwrap f-fl">
<a class="u-btn2 u-btn2-2 u-btn2-w2 j-flag" hidefocus="true" href="javascript:;" data-action="share"><i>分享</i></a>
<a class="u-btn2 u-btn2-1 u-btn2-w2 j-flag" hidefocus="true" href="javascript:;" data-action="close"><i>取消</i></a>
</div>
<div class="f-cb j-flag f-fr">
<div class="share f-fr">
<span class="f-fl s-fc3">同时分享到：</span>
<ul class="u-logo u-logo-s f-cb">
<li><a class="u-slg u-slg-sn j-t" data-action="sns" data-type="2" hidefocus="true" href="//music.163.com/api/sns/authorize?snsType=2&clientType=web2&callbackType=Binding&forcelogin=true" title="新浪微博"></a></li>
<li><a class="u-slg u-slg-db j-t" data-action="sns" data-type="3" hidefocus="true" href="//music.163.com/api/sns/authorize?snsType=3&clientType=web2&callbackType=Binding&forcelogin=true" title="豆瓣网"></a></li>
</ul>
</div>
</div>
</div>
<div class="u-err j-flag"><i class="u-icn u-icn-25"></i><span></span></div>
</div>
</div>
</textarea>
<textarea name="jst" id="m-search-suggest" style="display:none;">{macro listArtists(artists)}
{list artists as art}
${art.name|mark}&nbsp;
{/list}
{/macro}
<div class="m-schlist">
<p class="note s-fc3"><a class="s-fc3 xtag" href="/search/#/?s=${keyword}&type=1002">搜“${keyword|cutStr}” 相关用户</a> &gt;</p>
<div class="rap">
{list result.order as index}
{var lst=result[index]}
{if !!lst&&!!lst.length}
<div class="itm f-cb">
{if index=="songs"}
<h3 class="hd"><i class="icn u-icn u-icn-26"></i><em class="f-fl">单曲</em></h3>
<ul class="{if index_index%2!=0}odd{/if} f-cb">
{list lst as song}
<li><a class="s-fc0 f-thide xtag" href="/song?id=${song.id}">${song.name|mark}-${listArtists(song.artists)}</a></li>
{/list}
</ul>
{elseif index=="artists"}
<h3 class="hd"><i class="icn u-icn u-icn-27"></i><em class="f-fl">歌手</em></h3>
<ul class="{if index_index%2!=0}odd{/if} f-cb">
{list lst as artist}
<li><a class="s-fc0 f-thide xtag" href="/artist?id=${artist.id}">${artist.name|mark}</a></li>
{/list}
</ul>
{elseif index=="albums"}
<h3 class="hd"><i class="icn u-icn u-icn-28"></i><em class="f-fl">专辑</em></h3>
<ul class="{if index_index%2!=0}odd{/if} f-cb">
{list lst as album}
<li><a class="s-fc0 f-thide xtag" href="/album?id=${album.id}">${album.name|mark}{if album.artist}-${album.artist.name|mark}{/if}</a></li>
{/list}
</ul>
{elseif index=="playlists"}
<h3 class="hd"><i class="icn u-icn u-icn-29"></i><em class="f-fl">歌单</em></h3>
<ul class="{if index_index%2!=0}odd{/if} f-cb">
{list lst as playlist}
<li><a class="s-fc0 f-thide xtag" href="/playlist?id=${playlist.id}">${playlist.name|mark}</a></li>
{/list}
</ul>
{elseif index=="mvs"}
<h3 class="hd"><i class="icn u-icn u-icn-96"></i><em class="f-fl">视频</em></h3>
<ul class="{if index_index%2!=0}odd{/if} f-cb">
{list lst as mv}
<li><a class="s-fc0 f-thide xtag" href="/mv?id=${mv.id}">MV:${mv.name|mark}{if mv.artistName}-${mv.artistName|mark}{/if}</a></li>
{/list}
</ul>
{/if}
</div>
{/if}
{/list}
</div>
</div>
</textarea>
<textarea name="jst" id="m-xwgt-share-infobar" style="display:none;"><i class="highlight"></i><div class="text f-fl f-fs1"><p class="f-thide">${info|escape}</p></div>
{if canChange}<i class="f-fr icn u-icn2 u-icn2-arr"></i>{/if}
</textarea>
<textarea name="jst" id="m-xwgt-share-videobar" style="display:none;"><div class="text">
<div class="cvr f-fl f-pr" style="background-image:url(${picUrl}?imageView&thumbnail=107x60),url(${picUrl}?imageView&thumbnail=107y60&blur=30x15)">
</div>
<h3 class="f-thide f-fs1">${title}</h3>
<i class="f-fr icn u-icn2 u-icn2-arr"></i>
</div>
</textarea>
<textarea name="ntp" id="m-xwgt-share-upload" style="display:none;"> <div class="f-pr choose f-cb">
<ul class="pics f-pr f-cb j-flag"><li class="f-pr add j-flag u-icn2 u-icn2-addimg" title="添加新图片"></li></ul>
<div class="f-pa tip s-fc6 j-flag"></div>
</div>
</textarea>
<textarea name="jst" id="m-xwgt-share-upload-preview" style="display:none;"> <li class="pic f-pr{if fail} z-fail{/if}">
{if !fail}
<i class="f-img icn"></i>
{else}
<div class="mask f-blk f-pa"></div><div class="f-blk f-pa error">${fail}</div>
{/if}
<span class="del f-pa u-icn2 u-icn2-delimg" title="删除"></span>
</li>
</textarea>
<textarea name="jst" id="m-xwgt-share-upload-preview-img" style="display:none;">{if !fail}
<img class="f-img" src="${url}?imageView&thumbnail=80y80" draggable=false>
{else}
<div class="mask f-blk f-pa"></div><div class="f-blk f-pa error">${fail}</div>
{/if}
</textarea>
<textarea name="ntp" id="ntp-alert" style="display:none;"><div class="lyct f-cb f-tc">
<p class="f-fs1">
<i class="u-icn u-icn-89 j-flag"></i>
<span class="f-fw1">&nbsp;&nbsp;&nbsp;<span class="j-flag"></span></span>
</p>
<p class="mesg j-flag">&nbsp;</p>
<div class="lybtn">
<a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w2 j-flag" hidefocus="true"><i>知道了</i></a>
</div>
</div>
</textarea>
<textarea name="ntp" id="m-layer-commwin" style="display:none;"><div class="lyct f-tc">
<p class="j-t"><i class="u-icn u-icn-90"></i></p>
<p class="j-t msg1"></p>
</div>
<div class="j-t lsbtn f-tc">
<a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w2" hidefocus="true"><i>上传节目</i></a>
</div>
</textarea>
<textarea name="ntp" id="m-layer-delwin" style="display:none;"><div class="lyct lyct-1 f-cb">
<div class="n-log2 n-log2-4">
<p class="js-tip u-tip-2"></p>
<div class="lybtn f-tc">
<a href="javascript:;" class="u-btn2 u-btn2-2" hidefocus="true" data-action="ok"><i>删除</i></a>
<a href="javascript:;" class="u-btn2 u-btn2-1" hidefocus="true" data-action="cancel"><i>取消</i></a>
</div>
</div>
</div>
</textarea>
<textarea name="jst" id="m-layer-commwin-btn" style="display:none;">{list buttons as item}
<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="#" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>
{/list}
</textarea>
<textarea name="ntp" id="m-layer-outershare" style="display:none;"><div class="lyct lyct-1">
<ul class="n-outshr f-cb">
<li>
<a href="#" data-action="wxfrd" class="logo wxfrd"></a>
<a href="#" data-action="wxfrd" class="wd">微信</a>
</li>
<!--
<li>
<a href="#" data-action="wxevt" class="logo wxevt"></a>
<a href="#" data-action="wxevt" class="wd">微信朋友圈</a>
</li>
-->
<li>
<a href="#" data-action="yxfrd" class="logo yxfrd"></a>
<a href="#" data-action="yxfrd" class="wd">易信</a>
</li>
<!--
<li>
<a href="#" data-action="yxevt" class="logo yxevt"></a>
<a href="#" data-action="yxevt" class="wd">易信朋友圈</a>
</li>
-->
<li>
<a href="#" data-action="qzone" class="logo qzone"></a>
<a href="#" data-action="qzone" class="wd">QQ空间</a>
</li>
<li>
<a href="#" data-action="lofte" class="logo lofte"></a>
<a href="#" data-action="lofte" class="wd">LOFTER</a>
</li>
</ul>
</div>
</textarea>
<textarea name="ntp" id="m-layer-tip" style="display:none;"><div class="lyct f-cb f-tc">
<div class="f-fs1 j-flag">message</div>
<div class="lybtn">
<a hidefocus="true" class="u-btn2 u-btn2-2 u-btn2-w2 j-flag" href="javascript:;"><i>知道了</i></a>
</div>
</div>
</textarea>
<textarea name="ntp" id="m-outshare-layer" style="display:none;"><div class="lyct lyct-1 f-cb">
<ul class="m-shareto f-cb j-flag">
<li class="fst" data-action="sn" data-type="2">
<a href="#" class="logo logo-sn"></a>
<a href="#" class="wd s-fc3">新浪微博</a>
</li>
<li data-action="tx" data-type="6" style="display:none;">
<a href="#" class="logo logo-tc"></a>
<a href="#" class="wd s-fc3">腾讯微博</a>
</li>
<li data-action="db" data-type="3">
<a href="#" class="logo logo-db"></a>
<a href="#" class="wd s-fc3">豆瓣</a>
</li>
</ul>
</div>
</div>
</textarea>
<textarea name="ntp" id="m-sharesingle-layer" style="display:none;"><div class="lyct lyct-1 f-cb">
<div class="m-lyshare">
<div class="u-txtwrap f-pr">
<textarea data-action="txt" class="u-txt area j-flag"><&#47;textarea>
</div>
<div class="oper f-cb">
<div class="face f-fl f-pr j-flag">
<i data-action="emt" class="u-icn u-icn-36 f-fl"></i>
</div>
<span class="zs f-fr s-fc3 j-flag">140</span>
</div>
<div class="btnwrap">
<a data-action="ok" class="u-btn2 u-btn2-2 u-btn2-w2 j-flag" hidefocus="true" href="#"><i>分享</i></a>
<a data-action="cc" class="u-btn2 u-btn2-1 u-btn2-w2" hidefocus="true" href="#"><i>取消</i></a>
</div>
<div class="u-err f-hide j-flag"><i class="u-icn u-icn-25"></i></div>
</div>
</div>
</textarea>
<textarea name="jst" id="m-popup-info" style="display:none;"><div class="lyct f-tc">
<div class="f-cb m-tipinfo">
<i class="u-icn2 u-icn2-11 f-fl"></i>
<div class="f-fr f-pr f-fs1 tip">${tip}</div>
</div>
</div>
<div class="lsbtn f-tc">
<a data-action="ok" href="javascript:void(0)" class="u-btn2 u-btn2-2 u-btn2-2-h {if oktext.length<=2}u-btn2-w2{/if}" hidefocus="true"><i>${oktext}</i></a>
<a data-action="cc" href="javascript:void(0)" hidefocus="true" class="u-btn2 u-btn2-1 u-btn2-1-h {if cctext.length<=2}u-btn2-w2{/if}"><i>${cctext}</i></a>
</div>
</textarea>
<textarea name="jst" id="m-popup-song-buy" style="display:none;"><div class="lyct m-songpay f-tc">
<div class="f-cb m-tipinfo">
<i class="u-icn2 u-icn2-11 f-fl"></i>
<div class="f-fr f-pr f-fs1 tip">${tip}</div>
</div>
<div class="f-pr f-tc">
<a data-action="ok" href="javascript:void(0)" class="u-btn2 u-btn2-2 {if oktext.length<=2}u-btn2-w2{/if}" hidefocus="true"><i>${oktext}</i></a>
{if showSongText}<a data-action="song" class="song s-fc4" href="javascript:void(0)">${songTxt}</a>{/if}
</div>
</div>
</textarea>
<textarea name="jst" id="m-popup-alert" style="display:none;"><div class="lyct f-tc">
<p><i class="${icon}"></i></p>
<p class="msg1"><span class="f-fs1 s-fc1">${tip}</span></p>
</div>
<div class="lsbtn f-tc">
{if typeof(oktext) != 'undefined'}<a data-action="ok" href="javascript:void(0)" class="u-btn2 u-btn2-2 u-btn2-2-h {if oktext.length<=2}u-btn2-w2{/if}" hidefocus="true"><i>${oktext}</i></a>{/if}
{if typeof(cctext) != 'undefined'}<a data-action="cc" href="javascript:void(0)" class="u-btn2 u-btn2-1 u-btn2-1-h {if cctext.length<=2}u-btn2-w2{/if}" hidefocus="true"><i>${cctext}</i></a>{/if}
</div>
</textarea>
<textarea name="txt" id="m-donate-tip" style="display:none;"><p>该资源为公益歌曲<p>
<p>捐赠任意金额（2~4999元）即可无限畅听下载</p>
</textarea>
<textarea name="ntp" id="m-simple-share-layer" style="display:none;"> <div class="lyct lyct-1">
<ul class="n-outshr f-cb">
<li data-type="xlwb">
<a href="javascript:;" class="logo xlwb"></a>
<a href="javascript:;" class="wd">新浪微博</a>
</li>
<li data-type="wx">
<a href="javascript:;" class="logo wxfrd"></a>
<a href="javascript:;" class="wd">微信</a>
</li>
<li data-type="yx">
<a href="javascript:;" class="logo yxfrd"></a>
<a href="javascript:;" class="wd">易信好友</a>
</li>
<li data-type="qzone">
<a href="javascript:;" class="logo qzone"></a>
<a href="javascript:;" class="wd">QQ空间</a>
</li>
<li data-type="lofter" style="display:none;">
<a href="javascript:;" class="logo lofte"></a>
<a href="javascript:;" class="wd">LOFTER</a>
</li>
<li data-type="db" style="display:none;">
<a href="javascript:;" class="logo db"></a>
<a href="javascript:;" class="wd">豆瓣</a>
</li>
</ul>
</div>
</textarea>
<textarea name="txt" id="m-report-point" style="display:none;"><div class="zcnt">
<div class="lyct f-cb f-tc">
<p class="f-fs2">悬赏1积分让大家来帮你补歌词，是否继续？</p>
<p style="padding-top: 10px;">若30天内歌词未补充，积分将退还给您</p>
<div class="lybtn">
<a href="javascript:;" data-action="ok" class="u-btn2 u-btn2-2 u-btn2-w2" hidefocus="true"><i>继续求</i></a>
<a href="javascript:;" data-action="cc" class="u-btn2 u-btn2-1 u-btn2-w2" hidefocus="true"><i>取消</i></a>
</div>
</div>
</div>
</textarea>
<textarea name="txt" id="txt-mobilestatus" style="display:none;"><div class="box f-cb">
<div data-action="invalid" class="item z-first f-fl">
<div class="icon"></div>
<p>原手机号已停用</p>
<p class="s-fc3">(使用其他方式验证)</p>
</div>
<div data-action="valid" class="item f-fr">
<div class="icon"></div>
<p>原手机号仍能使用</p>
<p class="s-fc3">(使用手机验证码验证)</p>
</div>
</div>
</textarea>
<textarea name="ntp" id="m-question" style="display:none;"><div class="m-question">
<div>请填写以下安全问题的答案</div>
<div class="qa j-flag f-cb">
<label class="f-fl">问题：</label>
</div>
<div class="qa f-cb">
<label class="f-fl">回答：</label>
<input type="text" class="u-txt txt f-fl j-flag">
</div>
<div class="u-err f-hide j-flag"><i class="u-icn u-icn-25"></i>帐号或密码错误</div>
<div class="btnwrap">
<a data-action="back" class="u-btn2 u-btn2-1 u-btn2-w2" hidefocus="true" href="javascript:void(0)"><i>上一步</i></a>
<a data-action="next" class="u-btn2 u-btn2-2 u-btn2-w2" hidefocus="true" href="javascript:void(0)"><i>下一步</i></a>
</div>
</div>
</textarea>
<textarea name="ntp" id="g-select" style="display:none;"><div class="u-slt f-ib">
<span class="curr f-thide">－请选择－</span>
<i class="btn"></i>
<ul class="f-hide">
</ul>
</div>
</textarea>
<textarea name="ntp" id="ntp-linuxlinks" style="display:none;"><div class="lyct lyct-1">
<div class="dc f-cb">
<ul class="links">
<li class="link f-cb">
<a href="" class="right" target="_blank" hidefocus="true" title="Linux版下载">deepin15（64位）</a>
<a href="" class="right" target="_blank" hidefocus="true" title="Linux版下载">ubuntu16.04（64位）</a>
</li>
</ul>
</div>
</div>
</textarea>
<textarea name="ntp" id="ntp-pcRedirect" style="display:none;"><div class="lyct lyct-1">
<div class="pcdld f-cb">
<img src="../../../style/web2/img/down/uwpWindown.png" alt="网易云音乐-UWP版">
<p class="txt">您的系统为Windows 10，推荐下载UWP版</p>
<div class="choose">
<a class="u-btn2 u-btn2-2" data-res-action="bilog" data-log-action="downloadapp" data-log-json='{"type":"pc","source":"downloadapp"}' href="https://www.microsoft.com/store/apps/9nblggh6g0jf" onclick="g_stat('uwp',true,event);_gaq.push(['_trackEvent','download','uwp','download']);" hidefocus="true" title="UWP版下载" target="_blank"><i>下载UWP版本</i></a>
<a class="link" data-res-action="bilog" data-log-action="downloadapp" data-log-json='{"type":"pc","source":"downloadapp"}' href="http://music.163.com/api/pc/download/latest" onclick="g_stat('pc',true,event);_gaq.push(['_trackEvent','download','pc','download']);" hidefocus="true" title="PC版下载" target="_blank"><i>继续下载PC版本</i></a>
</div>
</div>
</div>
</textarea>
<textarea name="jst" id="g-select-item" style="display:none;">{list options as o}
<li class="f-thide" data-index="${o_index}"><a href="javascript:;">${o|filter}</a></li>
{/list}
</textarea>
<textarea name="ntp" id="m-download-layer" style="display:none;"><h3 class="f-tc">使用云音乐客户端</h3>
<h4 class="f-tc s-fc3">即可无限下载高品质音乐</h4>
<div class="f-cb wrap">
<div class="left">
<div data-action="download" data-src="http://music.163.com/api/osx/download/latest" class="btn btn-mac"><i></i>Mac版<span class="ver j-flag">V1.9.1</span></div>
<div data-action="download" data-src="http://music.163.com/api/pc/download/latest" class="btn f-hide"><i></i>PC版<span class="ver j-flag">V1.9.1</span></div>
<div data-action="orpheus" class="btn btn-installed j-flag">已安装PC版</div>
</div>
<div class="right">
<div class="qtcode"></div>
<div class="s-fc3 f-tc">扫描下载手机版</div>
</div>
</div>
</textarea>
<textarea name="ntp" id="m-programtips-layer" style="display:none;"><div class="f-tc wrap ">
<p class="f-fs1 s-fc1 wrap-p">该节目为付费内容，扫描下方二维码，使用最新的安卓或iPhone版本购买后即可畅享</p>
<div class="f-tc wrap-d">
<span class="qtcode j-flag"></span>
</div>
</div>
</textarea>
<textarea name="jst" id="com-artists-title" style="display:none;">{var title=""}
{if artists && artists.length}
{list artists as x}
{if x}
{var title = title + x.name}
{if x_index < x_length - 1}
{var title = title + " / "}
{/if}
{/if}
{/list}
{/if}
${escape(title)}
</textarea>
<textarea name="jst" id="com-mv-artists" style="display:none;">{if artists && artists.length}
<span class="${boxClazz}" title="${comJST('com-artists-title', artists)}">
{list artists as x}
{if !!x}
{if !!x.id}
<a href="/artist?id=${x.id}" class="${clazz}">${mark(escape(x.name))}</a>
{else}
<span class="${clazz}">${mark(escape(x.name))}</span>
{/if}
{if x_index < x_length - 1}&nbsp;/&nbsp;{/if}
{/if}
{/list}
</span>
{/if}
</textarea>
<textarea name="jst" id="com-album-artists" style="display:none;">${comJST('com-mv-artists', artists, clazz, mark, boxClazz)}
</textarea>
<textarea name="jst" id="com-user-type" style="display:none;">{if x.userType==4}${before}<sup class="${clazz2} u-icn2 u-icn2-music2 ${clazz}"></sup>${after}{elseif x.authStatus==1}${before}<sup class="u-icn u-icn-1 ${clazz}"></sup>${after}{elseif (x.expertTags && x.expertTags.length>0) || !isEmptyObject(x.experts)}${before}<sup class="u-icn u-icn-84 ${clazz}"></sup>${after}{/if}
</textarea>
<textarea name="ntp" id="ntp-portrait" style="display:none;"><div class="m-emts z-show">
<div class="j-flag emtwrap f-cb"></div>
<div class="page">
<a href="#" hidefocus="true" class="j-flag u-btn u-btn-prv"></a><em class="j-flag s-fc3">1/2</em><a href="#" hidefocus="true" class="j-flag u-btn u-btn-nxt"></a>
</div>
</div>
</textarea>
<textarea name="jst" id="jst-portrait" style="display:none;">{list plist as item}
<span title="${item.key}" class="emtitm"><img data-text="${item.key}" data-url="${item.key|purl}" class="f-alpha" src="${item.key|purl}"></span>
{/list}
</textarea>
<textarea name="ntp" id="m-wgt-song-box" style="display:none;"><div class="j-flag"></div>
<div class="j-flag"></div>
</textarea>
<textarea name="jst" id="m-wgt-song-list" style="display:none;"><table class="m-table {if type=='rank'}m-table-rank{/if}">
<thead>
<tr>
<th class="first {if type=='rank'}wrk{else}w1{/if}"><div class="wp">&nbsp;</div></th>
<th><div class="wp af0"></div></th>
<th class="w2"><div class="wp af1"></div></th>
<th class="w3"><div class="wp af2"></div></th>
<th class="w4"><div class="wp af3"></div></th>
</tr>
</thead>
<tbody>
{list beg..end as y}
{var x=xlist[y]}
<tr id="${x.id|seed}" class="{if y%2==0}even{/if} {if disable(x)}js-dis{/if}">
<td class="left">
<div class="hd {if type=='rank'}rank{/if}">
<span data-res-id="${x.id}" data-res-type="18" data-res-action="play" {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}"{/if} class="ply {if isPlaying(x)}ply-z-slt{/if}">&nbsp;</span>
<span class="num">${y+1}</span>
{if type=='rank'}
<div class="rk rk-1">
{if x.lastRank>=0}
{if y-x.lastRank>0}
<span class="ico u-icn u-icn-74 s-fc10">${y-x.lastRank}</span>
{elseif y-x.lastRank==0}
<span class="ico u-icn u-icn-72 s-fc4">0</span>
{else}
<span class="ico u-icn u-icn-73 s-fc9">${x.lastRank-y}</span>
{/if}
{else}
<span class="u-icn u-icn-75"></span>
{/if}
</div>
{/if}
</div>
</td>
<td class="">
<div class="f-cb">
<div class="tt">
<div class="ttc">
<span class="txt">
{var alia=songAlia(x)}
<a href="/song?id=${x.id}"><b title="${x.name|escape}{if alia} - (${alia|escape}){/if}">${soil(x.name)}</b></a>{if alia}<span title="${alia|escape}" class="s-fc8"> - (${soil(alia)})</span>{/if}
{if x.mvid>0}
<span data-res-id="${x.id}" data-res-action="mv" title="播放mv" class="mv">MV</span>
{/if}
</span>
</div>
</div>
</div>
</td>
<td class=" s-fc3">
<span class="u-dur {if canDel}candel{/if}">${dur2time(x.duration/1000)}{if x.ftype==2}<i title="歌曲来自第三方网站" class="migu u-icn2 u-icn2-14"></i>{/if}</span>
<div class="opt hshow">
<a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true"
data-res-type="18"
data-res-id="${x.id}"
data-res-action="addto"
{if from}data-res-from="${from.fid}" data-res-data="${from.fdata}"{/if}></a>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="fav" class="icn icn-fav" title="收藏"></span>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="share" data-res-name="${x.name}" data-res-author="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}" {if x.album}data-res-pic="${x.album.picUrl}"{/if} class="icn icn-share" title="分享">分享</span>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="download" class="icn icn-dl" title="下载"></span>
{if canDel}
<span data-res-id="${x.id}" data-res-type="18" data-res-action="delete" class="icn icn-del" title="删除">删除</span>
{/if}
</div>
</td>
<td class="">
<div class="text" title="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}">
${getArtistName(x.artists, '', '', false, false, true)}
</div>
</td>
{if type=='dayRcmd'}
<td class="hascls">
<div class="f-pr">
<div class="text">{if x.album}<a href="/album?id=${x.album.id}" title="${x.album.name}">${x.album.name}</a>{/if}</div>
<a href="javascript:;" data-res-action="dislike" data-res-id="${x.id}" data-res-alg="${x.alg}" class="cls u-icn u-icn-80 f-tid icn-dislike" title="不感兴趣">不感兴趣</a>
</div>
</td>
{else}
<td class="">
<div class="text">
{if x.album}
<a href="/album?id=${x.album.id}" title="${x.album.name|escape}">${soil(x.album.name)}</a>
{/if}
</div>
</td>
{/if}
</tr>
{/list}
</tbody>
</table>
</textarea>
<textarea name="jst" id="m-wgt-album-list" style="display:none;"><table class="m-table {if type=='rank'}m-table-rank{/if}">
<thead>
<tr>
<th class="first {if type=='rank'}wrk{else}w1{/if}"><div class="wp">&nbsp;</div></th>
<th><div class="wp">歌曲标题</div></th>
<th class="w2-1"><div class="wp">时长</div></th>
<th class="w4"><div class="wp">歌手</div></th>
</tr>
</thead>
<tbody>
{list beg..end as y}
{var x=xlist[y]}
<tr id="${x.id|seed}" class="{if y%2==0}even{/if} {if disable(x)}js-dis{/if}">
<td class="left">
<div class="hd {if type=='rank'}rank{/if}">
<span data-res-id="${x.id}" data-res-type="18" data-res-action="play" {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}"{/if} class="ply {if isPlaying(x)}ply-z-slt{/if}">&nbsp;</span>
<span class="num">${y+1}</span>
{if type=='rank'}
<div class="rk rk-1">
{if x.lastRank>=0}
{if y-x.lastRank>0}
<span class="ico u-icn u-icn-74 s-fc10">${y-x.lastRank}</span>
{elseif y-x.lastRank==0}
<span class="ico u-icn u-icn-72 s-fc4">0</span>
{else}
<span class="ico u-icn u-icn-73 s-fc9">${x.lastRank-y}</span>
{/if}
{else}
<span class="u-icn u-icn-75"></span>
{/if}
</div>
{/if}
</div>
</td>
<td class="">
<div class="f-cb">
<div class="tt">
<div class="ttc">
<span class="txt">
{var alia=songAlia(x)}
<a href="/song?id=${x.id}"><b title="${x.name|escape}{if alia} - (${alia|escape}){/if}">${soil(x.name)}</b></a>{if alia}<span title="${alia|escape}" class="s-fc8"> - (${soil(alia)})</span>{/if}
{if x.mvid>0}
<span data-res-id="${x.id}" data-res-action="mv" title="播放mv" class="mv">MV</span>
{/if}
</span>
</div>
</div>
</div>
</td>
<td class=" s-fc3">
<span class="u-dur {if canDel}candel{/if}">${dur2time(x.duration/1000)}{if x.ftype==2}<i title="歌曲来自第三方网站" class="migu u-icn2 u-icn2-14"></i>{/if}</span>
<div class="opt hshow">
<a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true"
data-res-type="18"
data-res-id="${x.id}"
data-res-action="addto"
{if from}data-res-from="${from.fid}" data-res-data="${from.fdata}"{/if}></a>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="fav" class="icn icn-fav" title="收藏"></span>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="share" data-res-name="${x.name}" data-res-author="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}" {if x.album}data-res-pic="${x.album.picUrl}"{/if} class="icn icn-share" title="分享">分享</span>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="download" class="icn icn-dl" title="下载"></span>
{if canDel}
<span data-res-id="${x.id}" data-res-type="18" data-res-action="delete" class="icn icn-del" title="删除">删除</span>
{/if}
</div>
</td>
<td class="">
<div class="text" title="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}">
${getArtistName(x.artists, '', '/', false, true, true)}
</div>
</td>
</tr>
{/list}
</tbody>
</table>
</textarea>
<textarea name="jst" id="m-wgt-song-top50-list" style="display:none;"><table class="m-table m-table-1 m-table-4">
<tbody>
{list beg..end as y}
{var x=xlist[y]}
<tr id="${x.id|seed}" class="{if y%2==0}even{/if} {if disable(x)}js-dis{/if}">
<td class="w1">
<div class="hd">
<span data-res-id="${x.id}" data-res-type="18" data-res-action="play" {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}"{/if} class="ply {if isPlaying(x)}ply-z-slt{/if}">&nbsp;</span>
<span class="num">${y+1}</span>
</div>
</td>
<td class="">
<div class="f-cb">
<div class="tt">
<div class="ttc">
<span class="txt">
{var alia=songAlia(x)}
<a href="/song?id=${x.id}"><b title="${x.name|escape}{if alia} - (${alia|escape}){/if}">${soil(x.name)}</b></a>{if alia}<span title="${alia|escape}" class="s-fc8"> - (${soil(alia)})</span>{/if}
{if x.mvid>0}
<span data-res-id="${x.id}" data-res-action="mv" title="播放mv" class="mv">MV</span>
{/if}
</span>
</div>
</div>
</div>
</td>
<td class="w2-1 s-fc3">
<span class="u-dur {if canDel}candel{/if}">${dur2time(x.duration/1000)}{if x.ftype==2}<i title="歌曲来自第三方网站" class="migu u-icn2 u-icn2-14"></i>{/if}</span>
<div class="opt hshow">
<a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true"
data-res-type="18"
data-res-id="${x.id}"
data-res-action="addto"
{if from}data-res-from="${from.fid}" data-res-data="${from.fdata}"{/if}></a>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="fav" class="icn icn-fav" title="收藏"></span>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="share" data-res-name="${x.name}" data-res-author="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}" {if x.album}data-res-pic="${x.album.picUrl}"{/if} class="icn icn-share" title="分享">分享</span>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="download" class="icn icn-dl" title="下载"></span>
{if canDel}
<span data-res-id="${x.id}" data-res-type="18" data-res-action="delete" class="icn icn-del" title="删除">删除</span>
{/if}
</div>
</td>
<td class="w4">
<div class="text">
{if x.album}
{var transName = x.album.tns && x.album.tns.length > 0 ? x.album.tns[0] : ''}
<a href="/album?id=${x.album.id}" title="${x.album.name|escape}{if transName} - (${transName|escape}){/if}">${soil(x.album.name)}</a>
{if transName}
<span title="${transName|escape}" class="s-fc8"> - (${transName|escape})</span>
{/if}
{/if}
</div>
</td>
</tr>
{/list}
</tbody>
</table>
</textarea>
<textarea name="jst" id="m-wgt-song-rank-list" style="display:none;"><table class="m-table m-table-rank">
<thead>
<tr>
<th class="first w1"></th>
<th><div class="wp">标题</div></th>
<th class="w2-1"><div class="wp">时长</div></th>
<th class="w3"><div class="wp">歌手</div></th>
</tr>
</thead>
<tbody>
{list beg..end as y}
{var x=xlist[y]}
<tr id="${x.id|seed}" class="{if y%2==0}even{/if} {if disable(x)}js-dis{/if}">
{if y<3}
<td>
<div class="hd">
<span class="num">${y+1}</span>
<div class="rk ">
{if x.lastRank>=0}
{if y-x.lastRank>0}
<span class="ico u-icn u-icn-74 s-fc10">${y-x.lastRank}</span>
{elseif y-x.lastRank==0}
<span class="ico u-icn u-icn-72 s-fc4">0</span>
{else}
<span class="ico u-icn u-icn-73 s-fc9">${x.lastRank-y}</span>
{/if}
{else}
<span class="u-icn u-icn-75"></span>
{/if}
</div>
</div>
</td>
<td class="rank">
<div class="f-cb">
<div class="tt">
<a href="/song?id=${x.id}">{if x.album}<img class="rpic" src="${x.album.picUrl}?param=50y50&quality=100">{/if}</a>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="play" {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}"{/if} class="ply {if isPlaying(x)}ply-z-slt{/if}">&nbsp;</span>
<div class="ttc">
<span class="txt">
{var alia=songAlia(x)}
<a href="/song?id=${x.id}"><b title="${x.name|escape}{if alia} - (${alia|escape}){/if}">${soil(x.name)}</b></a>{if alia}<span title="${alia|escape}" class="s-fc8"> - (${soil(alia)})</span>{/if}
{if x.mvid>0}
<span data-res-id="${x.id}" data-res-action="mv" title="播放mv" class="mv">MV</span>
{/if}
</span>
</div>
</div>
</div>
</td>
{else}
<td>
<div class="hd">
<span class="num">${y+1}</span>
<div class="rk ">
{if x.lastRank>=0}
{if y-x.lastRank>0}
<span class="ico u-icn u-icn-74 s-fc10">${y-x.lastRank}</span>
{elseif y-x.lastRank==0}
<span class="ico u-icn u-icn-72 s-fc4">0</span>
{else}
<span class="ico u-icn u-icn-73 s-fc9">${x.lastRank-y}</span>
{/if}
{else}
<span class="u-icn u-icn-75"></span>
{/if}
</div>
</div>
</td>
<td class="">
<div class="f-cb">
<div class="tt">
<span data-res-id="${x.id}" data-res-type="18" data-res-action="play" {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}"{/if} class="ply {if isPlaying(x)}ply-z-slt{/if}">&nbsp;</span>
<div class="ttc">
<span class="txt">
{var alia=songAlia(x)}
<a href="/song?id=${x.id}"><b title="${x.name|escape}{if alia} - (${alia|escape}){/if}">${soil(x.name)}</b></a>{if alia}<span title="${alia|escape}" class="s-fc8"> - (${soil(alia)})</span>{/if}
{if x.mvid>0}
<span data-res-id="${x.id}" data-res-action="mv" title="播放mv" class="mv">MV</span>
{/if}
</span>
</div>
</div>
</div>
</td>
{/if}
<td class=" s-fc3">
<span class="u-dur {if canDel}candel{/if}">${dur2time(x.duration/1000)}{if x.ftype==2}<i title="歌曲来自第三方网站" class="migu u-icn2 u-icn2-14"></i>{/if}</span>
<div class="opt hshow">
<a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true"
data-res-type="18"
data-res-id="${x.id}"
data-res-action="addto"
{if from}data-res-from="${from.fid}" data-res-data="${from.fdata}"{/if}></a>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="fav" class="icn icn-fav" title="收藏"></span>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="share" data-res-name="${x.name}" data-res-author="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}" {if x.album}data-res-pic="${x.album.picUrl}"{/if} class="icn icn-share" title="分享">分享</span>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="download" class="icn icn-dl" title="下载"></span>
{if canDel}
<span data-res-id="${x.id}" data-res-type="18" data-res-action="delete" class="icn icn-del" title="删除">删除</span>
{/if}
</div>
</td>
<td class="">
<div class="text" title="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}">
${getArtistName(x.artists, '', '', false, false, true)}
</div>
</td>
</tr>
{/list}
</tbody>
</table>
</textarea>
<textarea name="jst" id="m-wgt-song-pgm-list" style="display:none;"><table class="m-table m-table-prog">
<tbody id="song-list">
{list beg..end as y}
{var x=xlist[y]}
<tr id="${x.id|seed}" class="{if y%2!=0}even{/if} {if disable(x)}js-dis{/if}">
<td class="first col1">
<div class="hd">
<span data-res-id="${x.id}" data-res-type="18" data-res-action="play" {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}"{/if} class="ply {if isPlaying(x)}ply-z-slt{/if}">&nbsp;</span>
<span class="num">${y+1}</span>
</div>
</td>
<td class="col2">
<div class="f-cb">
<div class="tt">
<div class="ttc">
<span class="txt">
{var alia=songAlia(x)}
<a href="/song?id=${x.id}"><b title="${x.name|escape}{if alia} - (${alia|escape}){/if}">${soil(x.name)}</b></a>{if alia}<span title="${alia|escape}" class="s-fc8"> - (${soil(alia)})</span>{/if}
{if x.mvid>0}
<span data-res-id="${x.id}" data-res-action="mv" title="播放mv" class="mv">MV</span>
{/if}
</span>
</div>
</div>
</div>
</td>
<td class="col3 s-fc3">
<span class="u-dur {if canDel}candel{/if}">${dur2time(x.duration/1000)}{if x.ftype==2}<i title="歌曲来自第三方网站" class="migu u-icn2 u-icn2-14"></i>{/if}</span>
<div class="opt hshow">
<a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true"
data-res-type="18"
data-res-id="${x.id}"
data-res-action="addto"
{if from}data-res-from="${from.fid}" data-res-data="${from.fdata}"{/if}></a>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="fav" class="icn icn-fav" title="收藏"></span>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="share" data-res-name="${x.name}" data-res-author="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}" {if x.album}data-res-pic="${x.album.picUrl}"{/if} class="icn icn-share" title="分享">分享</span>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="download" class="icn icn-dl" title="下载"></span>
{if canDel}
<span data-res-id="${x.id}" data-res-type="18" data-res-action="delete" class="icn icn-del" title="删除">删除</span>
{/if}
</div>
</td>
<td class="col4">
<div class="text" title="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}">
${getArtistName(x.artists, '', '', false, false, true)}
</div>
</td>
<td class="col5">
<div class="text">
{if x.album}
<a href="/album?id=${x.album.id}" title="${x.album.name|escape}">${soil(x.album.name)}</a>
{/if}
</div>
</td>
</tr>
{/list}
</tbody>
</table>
</textarea>
<textarea name="jst" id="m-wgt-song-listen" style="display:none;"> <ul>
{list beg..end as y}
{var x=xlist[y]}
{if extData&&extData.limit&&y>=extData.limit}
{break}
{/if}
{var from=getFrom()}
<li id="${x.id|seed}" {if y%2 !=0 }class='even'{/if}>
<div class="hd ">
<span data-res-id="${x.id}" data-res-type="18" data-res-action="play" {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}"{/if} class="ply {if isPlaying(x)}ply-z-slt{/if}">&nbsp;</span>
<span class="num">${y+1}.</span>
</div>
<div class="song">
<div class="tt">
<div class="ttc">
<span class="txt"><a href="/song?id=${x.id}"><b title="${x.name}">${x.name}</b></a>
<span class='ar s-fc8'> <em>-</em>
${getArtistName(x.artists, 's-fc8')}
</span>
</span>
</div>
</div>
<div class="opt">
<a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="${x.id}" data-res-action="addto" {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}"{/if}></a>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="subscribe" class="icn icn-fav" title="收藏"></span>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="share" data-res-name="${x.name}" data-res-author="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}" class="icn icn-share" title="分享">分享</span>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="download" class="icn icn-dl" title="下载">下载</span>
</div>
</div>
<div class="tops">
<span class="bg" style='width:${x.score*100/x.max}%;'></span>
{if extData.showCount&&x.playCount}<span class="times f-ff2">${x.playCount}次</span>{/if}
</div>
</li>
{/list}
</ul>
{if extData&&extData.limit&&xlist.length>extData.limit}
<div class="more">
<a href="/user/songs/rank?id=${hostId}" >查看更多&gt;</a>
</div>
{/if}
</textarea>
<textarea name="jst" id="m-wgt-purchased-song-list" style="display:none;"> {list beg..end as y}
{var x=xlist[y]}
<tr id="${x.id|seed}" class="{if y%2==1}even{/if} {if disable(x)}js-dis{/if}">
<td class="left">
<div class="hd {if type=='rank'}rank{/if}">
<span data-res-id="${x.id}" data-res-type="18" data-res-action="play" {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}"{/if} class="ply {if isPlaying(x)}ply-z-slt{/if}">&nbsp;</span>
<span class="num">${y+1}</span>
{if type=='rank'}
<div class="rk rk-1">
{if x.lastRank>=0}
{if y-x.lastRank>0}
<span class="ico u-icn u-icn-74 s-fc10">${y-x.lastRank}</span>
{elseif y-x.lastRank==0}
<span class="ico u-icn u-icn-72 s-fc4">0</span>
{else}
<span class="ico u-icn u-icn-73 s-fc9">${x.lastRank-y}</span>
{/if}
{else}
<span class="u-icn u-icn-75"></span>
{/if}
</div>
{/if}
</div>
</td>
<td class="u-hasopt">
<div class="f-cb">
<div class="tt">
<div class="ttc">
<span class="txt">
{var alia=songAlia(x)}
<a href="/song?id=${x.id}"><b title="${x.name|escape}{if alia} - (${alia|escape}){/if}">${soil(x.name)}</b></a>{if alia}<span title="${alia|escape}" class="s-fc8"> - (${soil(alia)})</span>{/if}
{if x.mvid>0}
<span data-res-id="${x.id}" data-res-action="mv" title="播放mv" class="mv">MV</span>
{/if}
</span>
</div>
</div>
<div class="opt hshow">
<a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true"
data-res-type="18"
data-res-id="${x.id}"
data-res-action="addto"
{if from}data-res-from="${from.fid}" data-res-data="${from.fdata}"{/if}></a>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="fav" class="icn icn-fav" title="收藏"></span>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="share" data-res-name="${x.name}" data-res-author="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}" {if x.album}data-res-pic="${x.album.picUrl}"{/if} class="icn icn-share" title="分享">分享</span>
<span data-res-id="${x.id}" data-res-type="18" data-res-action="download" class="icn icn-dl" title="下载"></span>
{if canDel}
<span data-res-id="${x.id}" data-res-type="18" data-res-action="delete" class="icn icn-del" title="删除">删除</span>
{/if}
</div>
</div>
</td>
<td class="">
<div class="text" title="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}">
${getArtistName(x.artists, '', '', false, false, true)}
</div>
</td>
<td class="">
<div class="text">
{if x.album}
<a href="/album?id=${x.album.id}" title="${x.album.name|escape}">${soil(x.album.name)}</a>
{/if}
</div>
</td>
<td class="s-fc3">${formatTime(x.paidTime)}</td>
</tr>
{/list}
</textarea>
<textarea name="ntp" id="m-msg-private-send" style="display:none;"><div class="lyct lyct-1 f-cb">
<div class="m-lyshare m-plshare">
<div class="u-err j-flag" style="display: none;">最多选择10位好友</div>
<div class="item item-1 f-cb">
<label>发 给：</label>
<div class="ct f-pr j-flag">
</div>
</div>
<div class="item f-cb">
<label>内 容：</label>
<div class="ct j-flag">
</div>
</div>
</div>
</div>
</textarea>
</div>
<script src="//s3.music.126.net/web/s/core.js?ef2b3930442d4b155e72e7cefb78fdd3" type="text/javascript"></script><script src="//s3.music.126.net/web/s/pt_discover_toplist.js?991f8715177ba9d2fd3b6bb7dc624a14" type="text/javascript"></script>
</body>
<script type="text/javascript">
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-38766552-1'],['_setLocalGifPath', '/UA-38766552-1/__utm.gif'],['_setLocalRemoteServerMode']);
_gaq.push(['_trackPageview']);
(function() {
var ga = document.createElement('script');
ga.type = 'text/javascript';
ga.async = true;
ga.src = '//wr.da.netease.com/ga.js';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(ga, s);
})();//fix ipad下的一个bug
if (navigator.userAgent.indexOf('iPad') != -1) {
iframeHeight = Math.max(
Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
Math.max(document.body.offsetHeight, document.documentElement.offsetHeight),
Math.max(document.body.clientHeight, document.documentElement.clientHeight)
);
top.document.body.style.height = iframeHeight + 20 + 'px';
}</script>
</html>