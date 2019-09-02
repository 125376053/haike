function uploadImg(){
    var reader = new FileReader();
    var AllowImgFileSize = 11000000; //上传图片最大值(单位字节)（ 2 M = 2097152 B ）超过2M上传失败
    var file = $("#imgPath")[0].files[0];
    var imgUrlBase64;
    if (file) {
        //将文件以Data URL形式读入页面
        imgUrlBase64 = reader.readAsDataURL(file);

        reader.onload = function (e) {
            var ImgFileSize = reader.result.substring(reader.result.indexOf(",") + 1);//截取base64码部分（可选可不选，需要与后台沟通）
            if (AllowImgFileSize != 0 && AllowImgFileSize < reader.result.length) {
                alert( '上传失败，请上传不大于10M的图片！');
                return;
            }else{
                console.log(reader.result)
                $("#imgPath").data("base64",ImgFileSize)//将图片转成base64并赋值在input中
            }
        }
    }
}
function addNews(){
    var dataNew = {
        type:$("#type").val(),
        title:$("#title").val(),
        time:$("#time").val(),
        context:$("#context").val(),
        imgPath:$("#imgPath").data("base64"),
    }

    $.ajax({
        url: path +"/news/insertOne",
        data: JSON.stringify(dataNew),
        type: "post",
        headers:{"Content-Type":"application/json;charset=UTF-8"},
        dataType: "json",
        success: function(data) {
            var o = data.resultCode;
           console.log(o)
        }
    });

}

(function(){
    pathname = window.document.location.pathname
    pathname = pathname.substr(1,pathname.length)
    protocol  =window.location.origin;
    if (!protocol) {
        protocol = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
    }
    /*path = protocol +"/"+ pathname.substring(0,pathname.indexOf("/"))*/
    path = protocol
    console.log("path: "+path)

})()

var pVue = new Vue({
    el:'#product',
    data:{
        aa:"111111",
        plist:[],
        path:"",
        currentPageNum:0
    },
    created:function () {
       this.refush()

    },
    methods:{
        refush:function(){
            $.ajax({
            url: path +"/video/list",
            type: "get",
            dataType: "json",
            success: function(data) {
                var o = data.resultObject
                pVue.plist = o;
                pVue.currentPageNum = 0;
                }
            })
        }
        ,
        uploadVideo:function(){
            var fileObj = vidoe.files[0]; // 获取文件对象

            if (fileObj != undefined) {

                if (fileObj.name) {
                    console.log(fileObj.name)
                } else {
                    alert("请选择文件");
                }

                var size = fileObj.size;
                var type = fileObj.type;

                //校验格式
                if (type.indexOf('mp4') == -1) {
                    alert("请上传MP4格式")
                    return false;
                }
                //校验大小
                if (size / 1024 / 2014 > 10) {
                    alert("请上传" + size + "之内的视频")
                    return false;
                }

                var form = new FormData(); // FormData 对象
                form.append("file", fileObj);
                $.ajax({
                    url: path +"/uploadVidoe",
                    contentType: false,//false 传输对象
                    processData: false,
                    type: "POST",
                    data: form,
                    success: function (data) {
                        if(data.resultCode == "400"){
                            $("#videopath").data("path",data.resultObject)
                                alert("上传成功")
                        }else if(data.resultCode == "200"){
                                alert("上传失败")
                        }
                    }
                })

            }

        }
        ,

test:function () {
    alert("afdaf")
}        ,
        delete:function (vo) {
            $.ajax({
                url: path +"/video/"+vo.id,
                type: "get",
                headers:{"Content-Type":"application/json;charset=UTF-8"},
                dataType: "json",
                success: function(data) {
                   if(data.resultCode=="400"){
                       pVue.refush()
                   }else{
                       alert("删除失败")
                   }
                }
            })
        }
        ,
        addProduct:function () {

            $("#type").val("")
            $("#name").val("")
            $("#description").val("")
            $("#phone").val("")

            $("#enname").val("")
            $("#endescription").val("")
            $("#entype").val("")
            $("#addNewOne").show()
        },
        // updatePro:function (vo) {
        //     $("#type").val(vo.type)
        //     $("#name").val(vo.name)
        //     $("#name").data("id",vo.id)
        //     $("#description").val(vo.description)
        //     $("#phone").val(vo.phone)
        //     $("#enname").val(vo.enname)
        //     $("#endescription").val(vo.endescription)
        //     $("#entype").val(vo.entype)
        //     $("#addNewOne").show()
        //
        //
        // },
        submitThis:function () {

            var data = {

                title:$("#title").val(),
                writetime: $("#writetime").val(),
                videopath: $("#videopath").data("path"),

            }
            this.ajaxP("/video/insert",data)

            $("#addNewOne").hide()

        },
        ajaxP:function (p,data) {
            $.ajax({
                url: path +p,
                data: JSON.stringify(data),
                type: "post",
                headers:{"Content-Type":"application/json;charset=UTF-8"},
                dataType: "json",
                success: function(data) {
                    var o = data.resultCode;
                    console.log(o)
                    pVue.refush();
                }
            })
        }


    }

})