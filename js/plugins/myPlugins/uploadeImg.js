!function(){
        function uplodeImg(){
            this.config={
                fileBtn:null,
                imgBox:null,
                maxSize:2048
            }
        };
        uplodeImg.prototype.init=function(options){
            this.config=$.fn.extend({},this.config,options)
            this.bindChange();
        };
        uplodeImg.prototype.bindChange=function(){
            var me=this;
            this.config.fileBtn.unbind("click").bind("click",function(){
                this.click();
            });
            this.config.fileBtn.change(function(){
                var that = $(this);
                // 判断上传值是否为空, 显示隐藏 error样式（红框）
                (that.val()!='') && me.config.imgBox.removeClass('imgLabelError');
                //判断图片的类型和大小
                me.judgeTypeSize(me.config.imgBox,that, me.config.maxSize,me.imgUpload);
            });
        };
        uplodeImg.prototype.judgeTypeSize=function(imgBox,fileObj, maxSize,callback){
            var value = fileObj.val();
            //判断图片格式并且value不为空
            if (!value.match(/.jpg|.jpeg|.gif|png/i) || !value.replace(/\s/g,"")==null){
                alert("图片格式必须是jpg或jpeg或png");
            }else {
                var size = fileObj[0].files[0].size;//得到图片的大小[]
                var span = fileObj.parent().find("span");//错误的提示span
                var trueSize = Math.ceil(size/1024);//把字节转换成kb
                if(trueSize > maxSize){
                    span.show();
                    span.html("尺寸过大，最大上传2M，请重新选择");
                }else{
                    span.hide();
                    if(callback){
                        callback(imgBox,fileObj[0]);
                    }
                }
            }
        };
        // uplodeImg.prototype.getImgUrl=function (fileObj){
        //     var url;
        //     if(fileObj.files&&fileObj.files[0]){//火狐下
        //         url=window.URL.createObjectURL(fileObj.files[0]);
        //     }else{////IE下
        //         fileObj.select();
        //         url= fileObj.selection.createRange().text;
        //         document.selection.empty();
        //     }
        //     return url;
        // };
        //得到图片的地址并进行预览
        uplodeImg.prototype.imgUpload=function (imgBox,fileObj){
            var url;
            if(fileObj.files&&fileObj.files[0]){//火狐下
                url=window.URL.createObjectURL(fileObj.files[0]);
            }else{////IE下
                fileObj.select();
                url= fileObj.selection.createRange().text;
                document.selection.empty();
            }
            imgBox.find('.uploadBox').css('background-image','url('+url+')')
        };
        return window.uplodeImg=uplodeImg;
    }(jQuery,window)