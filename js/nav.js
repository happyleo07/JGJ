// PC 导航鼠标滑过效果
$(function() {
    $("#nav>li,#nav>li ul").mouseenter(function() {
        $(this).find("ul").show();
    });
    $("#nav>li,#nav>li ul").mouseleave(function() {
        $(this).find("ul").hide();
    });
});
// 移动端导航切换效果
// document.write(document.getElementById('sui_nav').innerHTML);
// var topbar;
// $(function() {
//     topbar = $('#sui_nav').SuiNav({});
//     var navbar = $('#sui_nav2').SuiNav({});
//     $('.MenuOpen').click(function() {
//         topbar.show();
//     });

// });
$(".MenuOpen").click(function() {
    $(".sui-nav").addClass("active");
    $(".sui-nav-mask").show();
});
$(".pull-right>li>a").click(function() {
    $(this).parent().find("ul").slideDown();
    $(this).parent().siblings().find("ul").slideUp();
});
$(".sui-nav-mask").click(function() {
    $(".sui-nav").removeClass("active");
    $(".sui-nav-mask").hide();
});