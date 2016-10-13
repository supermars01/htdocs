$(function(){
	// 快捷支付查看订单详情
    $('.slide-tab').click(function(event) {
        if($(this).find('i').hasClass('ico-toggle-up')){
            $(this).html('<i class="ico-toggle-down"></i>加载更多');
            $(this).parents('.slide-toggle').siblings('.order-detail-slide').hide();
        }else {
            $(this).html('<i class="ico-toggle-up"></i>收起');
            $(this).parents('.slide-toggle').siblings('.order-detail-slide').slideDown();
        }
    });
    // 复选框
    $(".i-checks").iCheck({
        checkboxClass:"icheckbox_square-green",
        radioClass:"iradio_square-green"
    });
	$("#payForm").validate({
        rules: {
            cardNum: {
                required:!0
            },
            username: {
                required:!0
            },
            idNum: {
                required:!0
            },
            telphone: {
                required:!0
            },
            capture: {
                required:!0
            }
        },
        messages: {
            cardNum: {
                required: "*请输入银行卡号"
            },
            username: {
                required: "*请输入持卡人姓名"
            },
            idNum: {
                required: "*请输入身份证号"
            },
            telphone: {
                required: "*请输入手机号码"
            },
            capture: {
                required: "*请输入验证码"
            }
        }
    });
})