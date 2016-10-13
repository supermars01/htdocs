$(document).ready(function() {
    // var e = "<i class='fa fa-times-circle'></i> ";
    var e='';
    // 登录页面表单验证
    $("#loginForm").validate({
        rules: {
            username: {
                required:!0
            },
            password: {
                required:!0
            }
        },
        messages: {
            username: {
                required: e + "*请输入您的用户名"
            },
            password: {
                required: e + "*请输入您的密码"
            }
        }
    });
    // 电脑登录 扫码登录切换
    $('.icon-tab').click(function(event) {
        $(this).parents('.loginscreen').hide().siblings('.loginscreen').show();
    });
    // 根据输入框输入的格式来定义按钮完成按钮是否可点击
    $(document).on('input', 'input', function(event) {
        event.preventDefault();
        var username=$('input[name=username]').val();
        var pwd=$('input[name=password]').val();
        if(username!='' && pwd!=''){
            $('.btn').addClass('btn-primary');
            $('.btn').removeAttr('disabled');
        }else {
            $('.btn').removeClass('btn-primary');
            $('.btn').attr('disabled','disabled');
        }
    });
});
