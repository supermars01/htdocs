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
    // 表单验证
	$("#payForm").validate({
        rules: {
            cardNum: {
                required:!0,
                creditcard: !0
            },
            username: {
                required:!0,
                minlength:2
            },
            idNum: {
                required:!0,
                minlength:15,
                idNum:!0
            },
            telphone: {
                required:!0,
                telphone:!0
            },
            capture: {
                required:!0,
                digits:!0,
            },
            agree: "required"
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
            },
            agree: {
                required: "*必须同意协议后才能付款",
                element: "#agree-error"
            }
        }
    });
    // 手机号输入判断
    $(document).on('input', '#telphone', function(event) {
        event.preventDefault();
        if(/^1[3|4|5|7|8]\d{9}$/.test($(this).val())){
            $('.btn-verify').removeAttr('disabled');
            $('.btn-verify').addClass('btn-primary');
            $('.btn-verify').attr('status', 1);
        }else {
            $('.btn-verify').attr('disabled','disabled');
            $('.btn-verify').removeClass('btn-primary');
            $('.btn-verify').attr('status', 0);
        }
    });
    //获取验证码
    $('.btn-verify').click(function() {
        var status=$(this).attr('status');
        var telphone=$('#telphone').val();
        if(status==1) {
            sendVerify();
        }
        // swal("手机号");
    });
    // 点击付款
    $('#payBtn').click(function() {
        // 付款成功
        // $(this).html('<i class="fa fa-check"></i>付款成功');
    });

});
// 发送验证码点击 status 0 倒计时不可点击   1倒计时可点击
var isinerval, times,mesNum;
function sendVerify() {
    var status = $('.btn-verify').attr('status');
    $('.btn-verify').attr('disabled','disabled');
    $('.btn-verify').removeClass('btn-primary');
    $('.btn-verify').attr('status', 0);
    $('.btn-verify').html('<b id="GetVerify">60</b>s');
    times = 3;
    isinerval = setInterval("CountDown()", 1000);
    
}
function CountDown() {
    if (times < 1) {
        $('.btn-verify').html('再次获取');
        $('.btn-verify').attr('status', 1);
        $('.btn-verify').removeAttr('disabled');
        $('.btn-verify').addClass('btn-primary');
        clearInterval(isinerval);
        return;
    }
    $('#GetVerify').html('' + times + '');
    times--;
}