(function () {
    pathname = window.document.location.pathname
    pathname = pathname.substr(1, pathname.length)
    protocol = window.location.origin;
    if (!protocol) {
        protocol = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }
    /*path = protocol +"/"+ pathname.substring(0,pathname.indexOf("/"))*/
    path = protocol
    console.log("path: " + path)

})()

if (!/^http(s*):\/\//.test(location.href)) {
    alert('请先部署到 localhost 下再访问');
    window.location.href = 'login.html';
}


layui.use('form', function () {
    var form = layui.form,
        layer = layui.layer;
});

var vue = new Vue({
    el: '#app',
    data: {
        webname: config.webname,
        menu: [],
        address: [],
        path: "",
        newsList: [],
        currentPageNum: ""

    },
    created: function () {
        /**
         * 加载新闻部分
         * */
        this.refush()


        /**加载左侧菜单*/
        if (config.debug) {
            $.ajax({
                url: config.menuUrl,
                dataType: 'text',
                success: (menu) => {
                    menu = eval('(' + menu + ')');
                    sessionStorage.menu = JSON.stringify(menu);
                    this.menu = menu;
                    this.thisActive();
                    this.thisAttr();
                }
            })
        } else {
            let data = sessionStorage.menu;
            if (!data) {
                $.ajax({
                    url: config.menuUrl,
                    dataType: 'text',
                    success: (menu) => {
                        menu = eval('(' + menu + ')');
                        sessionStorage.menu = JSON.stringify(menu);
                        this.menu = menu;
                        this.thisActive();
                        this.thisAttr();
                    }
                })
            } else {
                this.menu = JSON.parse(data);
                this.thisActive();
                this.thisAttr();
            }
        }
    },
    methods: {
        updateOne: function (vo) {

            $("#title").val(vo.title)
            $("#entitle").val(vo.entitle)
            $("#title").data("id", vo.id)
            $("#context").val(vo.context)
            $("#context2").val(vo.context2)
            $("#context3").val(vo.context3)
            $("#context4").val(vo.context4)
            $("#encontext").val(vo.encontext)
            $("#encontext2").val(vo.encontext2)
            $("#encontext3").val(vo.encontext3)
            $("#encontext4").val(vo.encontext4)
            $("#imgPath").data("path", vo.imgPath)
            $("#img").show()
            $("#imgPath").attr("img", vo.imgPath)
            $("#addNewOne").show()
        }
        ,
        searchType: function () {
            //todo find news by type and live = 0 limit 0~10

            $.ajax({
                url: path + "/newstype/0/10/" + $("#searchType  option:selected").val() + "/0",
                /*data: JSON.stringify(dataNew),*/
                type: "get",
                headers: {"Content-Type": "application/json;charset=UTF-8"},
                dataType: "json",
                success: function (data) {
                    var o = data.resultCode;
                    console.log(o)
                    vue.newsList = o
                }
            });
        },
        addNews: function () {
            var dataNew = {
                type: $("#type  option:selected").val(),
                title: $("#title").val(),
                time: $("#time").val(),
                context1: $("#context1").val(),
                context2: $("#context2").val(),
                context3: $("#context3").val(),
                context4: $("#context4").val(),
                imgPath: $("#imgPath").data("base64"),
                entitle: $("#entitle").val(),
                encontext1: $("#encontext1").val(),
                encontext2: $("#encontext2").val(),
                encontext3: $("#encontext3").val(),
                encontext4: $("#encontext4").val(),
            }

            if ($("#title").data("id") == '') {


                $.ajax({
                    url: path + "/news/insertOne",
                    data: JSON.stringify(dataNew),
                    type: "post",
                    headers: {"Content-Type": "application/json;charset=UTF-8"},
                    dataType: "json",
                    success: function (data) {
                        var o = data.resultCode;
                        console.log(o)
                        vue.refush()
                        $("#addNewOne").hide()
                    }
                });
            } else {
                dataNew.id = $("#title").data("id")
                if ($("#imgPath").data("base64") != "") {
                    dateNew.imgPath = $("#imgPath").data("base64")
                } else {
                    dataNew.imgPath = $("#imgPath").data("path")
                }
                $.ajax({
                    url: path + "/news/insertOne",
                    data: JSON.stringify(dataNew),
                    type: "post",
                    headers: {"Content-Type": "application/json;charset=UTF-8"},
                    dataType: "json",
                    success: function (data) {
                        var o = data.resultCode;
                        console.log(o)
                        vue.refush()
                        $("#type").val("")
                        $("#title").val("")
                        $("#context1").val("")
                        $("#context2").val("")
                        $("#context3").val("")
                        $("#context4").val("")
                        $("#imgPath").val("")
                        $("#time").val("")
                        $("#entitle").val("")
                        $("#encontext1").val("")
                        $("#encontext2").val("")
                        $("#encontext3").val("")
                        $("#encontext4").val("")
                        $("#imgPath").data("base64", "")
                        $("#imgPath").data("path", "")
                        $("#addNewOne").hide()
                    }
                });
            }

        },
        cleanAndAdd: function () {

            $("#type").val("")
            $("#title").val("")
            $("#context1").val("")
            $("#context2").val("")
            $("#context3").val("")
            $("#context4").val("")
            $("#imgPath").val("")
            $("#time").val("")
            $("#entitle").val("")
            $("#encontext1").val("")
            $("#encontext2").val("")
            $("#encontext3").val("")
            $("#encontext4").val("")

            //$("#addNewOne").show()
            layui.use('layer',function(){
                var layer = layui.layer;
                layer.open({
                    type: 1,
                    area:['800px','500px'],
                    content: $('#addNewOne')
                });
            })
        }
        ,
        refush: function () {
            this.path = window.path
            /*/news/{type}/{pageNum}/{numlength}/{live}*/

            $.ajax({
                url: path + "/news/0/10/0",
                type: "get",
                dataType: "json",
                success: function (data) {
                    var o = data.resultObject
                    vue.newsList = o;
                    vue.currentPageNum = 0;
                }
            });
        }
        ,

        lastPage: function () {
            if (this.currentPageNum == 0) {
                return;
            } else {
                this.currentPageNum = this.currentPageNum - 10
            }
            $.ajax({
                url: path + "/news/" + this.currentPageNum + "/10/0",
                type: "get",
                dataType: "json",
                success: function (data) {
                    var o = data.resultObject
                    vue.newsList = o;
                }
            });
        },
        nextPage: function () {
            this.currentPageNum = this.currentPageNum + 10

            $.ajax({
                url: path + "/news/" + this.currentPageNum + "/10/0",
                type: "get",
                dataType: "json",
                success: function (data) {
                    var o = data.resultObject
                    vue.newsList = o;
                }
            });
        },

        updateState: function (id, live) {
            if (live == "0") {
                live = "1"
            } else if (live == "1") {
                live = "0"
            }
            $.ajax({
                url: path + "/news/state/" + id + "/" + live,
                type: "get",
                dataType: "json",
                success: function (data) {


                }
            });
        },
        delete: function (id) {
            $.ajax({
                url: path + "/news/dalete/" + id,
                type: "get",
                dataType: "json",
                success: function (data) {


                }
            });
        },
        //记住收展
        onActive: function (pid, id = false) {
            let data;
            if (id === false) {

                data = this.menu[pid];

                if (data.url.length > 0) {
                    this.menu.forEach((v, k) => {
                        v.active = false;
                        v.list.forEach((v2, k2) => {
                            v2.active = false;
                        })
                    })

                    data.active = true;

                }

                data.hidden = !data.hidden;

            } else {

                this.menu.forEach((v, k) => {
                    v.active = false;
                    v.list.forEach((v2, k2) => {
                        v2.active = false;
                    })
                })

                data = this.menu[pid].list[id];
            }
            this.updateStorage();
            if (data.url.length > 0) {
                if (data.target) {
                    if (data.target == '_blank') {
                        window.open(data.url);
                    } else {
                        window.location.href = data.url;
                    }

                } else {
                    window.location.href = data.url;
                }

            }
        },

        //更新菜单缓存
        updateStorage(){
            sessionStorage.menu = JSON.stringify(this.menu);
        },
        //菜单高亮
        thisActive: function () {
            let pathname = window.location.pathname;
            let host = window.location.host;
            let pid = false;
            let id = false;
            this.menu.forEach((v, k) => {
                let url = v.url;
                if (url.length > 0) {
                    if (url[0] != '/' && url.substr(0, 4) != 'http') {
                        url = '/' + url;
                    }
                }
                if (pathname == url) {
                    pid = k;
                }
                v.list.forEach((v2, k2) => {
                    let url = v2.url;

                    if (url.length > 0) {
                        if (url[0] != '/' && url.substr(0, 4) != 'http') {
                            url = '/' + url;
                        }
                    }
                    if (pathname == url) {
                        pid = k;
                        id = k2;
                    }
                })
            })


            if (id !== false) {
                this.menu[pid].list[id].active = true;
            } else {
                if (pid !== false) {
                    this.menu[pid].active = true;
                }
            }

            this.updateStorage();

        },
        //当前位置
        thisAttr: function () {
            //当前位置
            let address = [{
                name: '首页',
                url: 'index.html'
            }];
            this.menu.forEach((v, k) => {
                v.list.forEach((v2, k2) => {
                    if (v2.active) {
                        address.push({
                            name: v.name,
                            url: 'javascript:;'
                        })
                        address.push({
                            name: v2.name,
                            url: v2.url,
                        })
                        this.address = address;
                    }
                })
            })
        }
    }
})


$(document).ready(function () {
    //删除
    $(".del").click(function () {
        var url = $(this).attr("href");
        var id = $(this).attr("data-id");

        layer.confirm('你确定要修改么?', {
            btn: ['确定', '取消'] //按钮
        }, function () {
            layer.msg("进行修改");
        }, function () {
            layer.msg("您取消了删除!");
        });
        return false;
    });
})

function delCache() {
    sessionStorage.clear();
    localStorage.clear();
}

function msg(code = 1, msg = '', url = '', s = 3) {
    if (typeof code == 'object') {
        msg = code.msg;
        url = code.url || '';
        s = code.s || 3;
        code = code.code;
    }
    code = code == 1 ? 1 : 2;
    layer.msg(msg, {icon: code, offset: config.layerMsg.offset || 't', shade: config.layerMsg.shade || [0.4, '#000']});
    if (url) {
        setTimeout(function () {
            window.location.href = url;
        }, s * 1000);
    }
}








