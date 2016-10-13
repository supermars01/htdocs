function imgUploadReg(){
	var img1=$('.upload-img li').eq(0).find('img').attr('src');
	var img2=$('.upload-img li').eq(1).find('img').attr('src');
	var img3=$('.upload-img li').eq(2).find('img').attr('src');
	var img4=$('.upload-img li').eq(3).find('img').attr('src');
	if(img1=='../img/upload_default.png'){
		swal({
            title:"请上传营业执照",
            showCancelButton:false,
            confirmButtonColor:"#00bfa9",
            confirmButtonText:"确定",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
        })
	}else if(img2=='../img/upload_default.png'){
		swal({
            title:"请上传组织机构代码",
            showCancelButton:false,
            confirmButtonColor:"#00bfa9",
            confirmButtonText:"确定",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
        })
	}else if(img3=='../img/upload_default.png'){
		swal({
            title:"请上传开户行许可证",
            showCancelButton:false,
            confirmButtonColor:"#00bfa9",
            confirmButtonText:"确定",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
        })
	}else if(img4=='../img/upload_default.png'){
			swal({
                title:"请上传法人身份证",
                showCancelButton:false,
                confirmButtonColor:"#00bfa9",
                confirmButtonText:"确定",
                closeOnConfirm: false,
                showLoaderOnConfirm: true,
            })
	}
}