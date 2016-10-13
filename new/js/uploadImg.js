$(function(){
    // 删除图片图标点击事件
    $(document).on('click', '.btn-del-img', function(event) {
        event.preventDefault();
        /* Act on the event */
        console.log($('.btn-del-img').length);
        if($('.btn-del-img').length==1){
            $('.wu-example-1').remove();
        }
        $(this).parents('li').remove();
    });
})
//下面用于多图片上传预览功能

    function setImagePreviews(avalue) {

        var docObj = document.getElementById("doc");

        var dd = document.getElementById("filelist");

        dd.innerHTML = "";

        var fileList = docObj.files;

        for (var i = 0; i < fileList.length; i++) {            


            $('.statusBar').show();
            // $('#uploader').hide();
            dd.innerHTML += "<li><p class='imgWrap'>"+
                            "<img id='img" + i + "'></p>"+
                            "<div class='file-panel btn-del-img'><span class='cancel'>删除</span></div>"+
                            "</li>";

            var imgObjPreview = document.getElementById("img"+i); 

            if (docObj.files && docObj.files[i]) {

                //火狐下，直接设img属性

                // imgObjPreview.style.display = 'block';

                // imgObjPreview.style.width = '150px';

                // imgObjPreview.style.height = '180px';

                //imgObjPreview.src = docObj.files[0].getAsDataURL();

                //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式

                imgObjPreview.src = window.URL.createObjectURL(docObj.files[i]);

            }

            else {

                //IE下，使用滤镜

                docObj.select();

                var imgSrc = document.selection.createRange().text;

                alert(imgSrc)

                var localImagId = document.getElementById("img" + i);

                //必须设置初始大小

                localImagId.style.width = "150px";

                localImagId.style.height = "180px";

                //图片异常的捕捉，防止用户修改后缀来伪造图片

                try {

                    localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";

                    localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;

                }

                catch (e) {

                    alert("您上传的图片格式不正确，请重新选择!");

                    return false;

                }

                imgObjPreview.style.display = 'none';

                document.selection.empty();

            }

        }  



        return true;

    }

