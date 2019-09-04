var pub = {
    data: {
        webname: 'Haike',
        menu: [],
        // 页面通用参数
        eneditor:'',
        search:'',
        dialogVisible:false,
        dialogVisible1:false,
        imgUrl:api+'/common/upload/img',
        videoUrl:api+'/common/uploadVideo/',
        count: 0, //总条数
        page: 1, //当前页码
        pageCount:10, //每页条数
    },
    mounted(){
        // 获取导航数据和页码地址
        this.getNav()
    },
    computed:{
        // 记录当前进入的页面地址
        address(){
            if(window.sessionStorage.getItem('address')){
                var ad = JSON.parse(window.sessionStorage.getItem('address'))
                var one = ad[0]
                //console.log(one);
                this.menu.forEach((item)=>{
                    if(item.name == one.name){
                        console.log(item);
                        item.hidden =false
                    }else{
                        console.log(123);
                    }
                })
                return ad
            }else{
                var re = []
                var path = window.location.pathname
                //console.log(path);
                //console.log(this.menu);
                this.menu.forEach((item,index)=>{
                    //console.log(item, index);
                    if(item.list){
                        item.list.forEach((item2,index2)=>{
                            if(path.includes(item2.url)){
                                console.log(item2,index2,index)
                                re.push(
                                    {
                                        name:this.menu[index].name,
                                        url:'javascript:;'
                                    },
                                    {
                                        name:item2.name,
                                        url:item.url
                                    }
                                )
                                // 当前页面的模块默认打开
                                console.log(this.menu[index]);
                                this.menu[index].hidden = false
                            }else{
                                //console.log(123);
                            }
                        })
                    }
                })
                //console.log(re);
                return re
            }
        }
    },
    methods:{
        getNav(){
            $.ajax({
                url: 'data/menu.json',
                dataType: 'text',
                success: (menu) => {
                    menu = eval('(' + menu + ')');
                    this.menu = menu;
                }
            })
        },
        onActive(index, data){
            console.log(data);
            /*this.menu.forEach(item=>{
                if(item.name == data.name){
                    item.hidden = false
                }else{
                    item.hidden = true
                }
            })*/
            // 不等于的隐藏 等于的不要设置
            this.menu.forEach(item=>{
                if(item.name != data.name){
                    item.hidden = true
                }
            })
            data.hidden = !data.hidden
        },
        onActive2(index, data, data2){
            var address = []
            address.push(
                {
                    name: data.name,
                    url: data.url
                },
                {
                    name: data2.name,
                    url: data2.url
                }
            )
            this.address = address;
            window.sessionStorage.setItem('address', JSON.stringify(address))

            if (data2.target) {
                if (data2.target == '_blank') {
                    window.open(data2.url);
                } else {
                    window.location.href = data2.url;
                }
            } else {
                window.location.href = data2.url;
            }
        },
        // 格式化日期
        date(time){
            var time = new Date(time).toLocaleString()
            return time
        },
        // 日历返回值
        changeTime(v){
            console.log(v);
        },
        changeShijian(v){
            console.log(v);
        },
        changeDay(v){
            console.log(v);
        },
        // 分页
        pageChange(page){
            this.page = page
            this.getData()
        },

        //上传图片新建
        successImg(response, file, fileList){
            console.log(response, file, fileList);
            this.ruleForm.imgPath = api+'/'+response.data
        },
        errorImg(error, file, fileList){
            console.log(error, file, fileList);
        },

        //上传图片更新
        successImg2(response, file, fileList){
            console.log(response, file, fileList);
            this.editObj.imgPath = api+'/'+response.data
        },
        errorImg2(error, file, fileList){
            console.log(error, file, fileList);
        },

        // 视频地址 新建
        successVideo(response, file, fileList){
            console.log(response, file, fileList);
            this.ruleForm.videoPath = api+response.data
        },
        errorVideo(error, file, fileList){
            console.log(error, file, fileList);
        },

        // 视频地址 更新
        successVideo2(response, file, fileList){
            console.log(response, file, fileList);
            this.editObj.videoPath = api+response.data
        },
        errorVideo2(error, file, fileList){
            console.log(error, file, fileList);
        },

        // 新建弹出层
        add1(){
            this.dialogVisible = true
            this.$nextTick(()=>{
                if($('#eneditor').length>0){
                    if(this.eneditor){
                        this.eneditor.txt.html('')
                    }
                    this.showEditor('#eneditor')
                }
                this.$refs.ruleForm.resetFields()
            })
        },
        // 编辑弹出
        edit(obj){
            console.log(this.editObj);
            this.dialogVisible1 = true
            // 解决双向绑定导致弹出内容修改 列表自动改变问题
            this.editObj = Object.assign(this.editObj,obj)
            this.$nextTick(()=>{
                // 编辑的编辑器
                if($('#eneditor2').length>0){
                    this.showEditor('#eneditor2')
                }
                // 设置内容---表格是detail 就设置detail
                if(this.eneditor){
                    if(obj.detail){
                        this.eneditor.txt.html(obj.detail)
                    }else{
                        this.eneditor.txt.html(obj.content)
                    }
                }
                this.$refs.editForm.resetFields()
            })
        },
        beforeImgUpload(file) {
            console.log(file);
            const isLt2M = file.size / 1024 / 1024 < 1;
            if (!isLt2M) {
                this.$message.error('上传图片不能超过1MB!');
            }
            return isLt2M;
        },
        beforeVideoUpload(file) {
            console.log(file);
            const isLt2M = file.size / 1024 / 1024 < 5;
            if (!isLt2M) {
                this.$message.error('上传视频不能超过5MB!');
            }
            return isLt2M;
        },
        /*changeStatus(status){
            console.log(status);
            this.newsList[0].live = status
            console.log(this.newsList[0].live);
        }*/
        // 足迹详情
        showEditor(id){
            // 避免重复创建
            if($(id).children().length>1){
                return false
            }
            var EE = window.wangEditor;
            var eneditor = new EE(id);
            this.eneditor = eneditor;
            // 配置服务器端地址,也就是controller的请求路径，不带项目路径，前面没有/
            // http://192.168.101.83/haike/common/upload/wangEditImg
            eneditor.customConfig.uploadImgServer = api+'/common/upload/wangEditImg'
            //eneditor.customConfig.withCredentials = true
            eneditor.customConfig.uploadImgTimeout = 50000;
            eneditor.customConfig.uploadImgMaxSize = 10 * 1024 * 1024;
            //配置属性名称，绑定请求的图片数据
            //controller会用到，可以随便设置，但是一定要与controller一致
            eneditor.customConfig.uploadFileName = 'myFile';



            eneditor.customConfig.uploadImgHooks = {
                customInsert: function (insertImg, result, editor) {
                    console.log(insertImg, result, editor);
                    // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
                    // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果

                    // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
                    var url =api+'/'+result.data;
                    console.log(url);
                    insertImg(url);
                }
            }

            //创建编辑器
            eneditor.create();
        },
    }
}

