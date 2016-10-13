$(function(){
    // 修改密码
    $('#modifyPwd').click(function(event) {
        $(this).parent('.tabchange').hide().siblings('.tabchange').show();
    });
    upload();
})
function upload(){
    $("#file").click();
    $("#file").unbind().change(function(){
        setImagePreviews();
    })
}
function setImagePreviews() {
    var docObj = document.getElementById("file");
    var imgObjPreview = document.getElementById("photo");
    var fileList = docObj.files;
    // for (var i = 0; i < fileList.length; i++) {           
        if (docObj.files) {
            //imgObjPreview.src = docObj.files[0].getAsDataURL();
            //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
            imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
        }
        else {
            //IE下，使用滤镜
            docObj.select();
            var imgSrc = document.selection.createRange().text;
            //图片异常的捕捉，防止用户修改后缀来伪造图片
            try {
                imgObjPreview.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                imgObjPreview.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;

            }
            catch (e) {
                alert("您上传的图片格式不正确，请重新选择!");
                return false;
            }

            document.selection.empty();
        }
    // }  
    return true;
}