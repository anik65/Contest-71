
//  sticky nav
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
        $("nav").addClass("fixed-top");
    } else {
        $("nav").removeClass("fixed-top");
    }
});
$('body').scrollspy({ target: ".navbar", offset: 50 });
$('.carousel').carousel({
    interval: 3000
});
AOS.init();
//counter
$('.count').counterUp({
    delay: 10,
    time: 1500
});
$('.bxslider').bxSlider({
    controls: false,
    auto: true,

});
// $(".sider_body").on("mouseover", function () {
//     $(".sider_body").css({
//         'left': "80%",
//         'animation-name': 'fadeInRight',
//         'animation-duration':'1s'

//     });
// });
$("#nav-toggle").on("click", function () {
    $(".theme-navbar").addClass("theme-navbar-toggle");
});
$(".toggle-icon i").on("click", function () {
    $(".theme-navbar").removeClass("theme-navbar-toggle");

});