$(function() {
    $(".J_menuItem").on("click", function(){
    	var o = $(this).attr("href");
    	$(".J_mainContent .J_iframe").attr("href",o);
    });
})