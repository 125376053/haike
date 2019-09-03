var config = {

    //调试模式 (开启后左侧菜单不缓存,菜单收展失效,打开渲染速度会变慢)
    debug: true,

    //网站名称 (左上角显示的文字LOGO)
    webname: 'Haike',

    //菜单列表路径 (可以是本地json,也可以是api接口)
    menuUrl: 'data/menu.json',

    //layer全局提示层
    layerMsg: {
        offset: 't', //坐标 (详细说明 https://www.layui.com/doc/modules/layer.html#offset)
        shade: [0.4, '#000'] //遮罩 (详细说明 https://www.layui.com/doc/modules/layer.html#shade)
    }
}


var api = "http://zhangfuming.cn"
//var api = 'http://47.56.120.18:8080' //远程
//var api = 'http://192.168.101.83/haike' //本地
//  /common/upload/img

//  /common/upload/wangEditImg 富文本上传地址
//common/uploadVideo //上传视频