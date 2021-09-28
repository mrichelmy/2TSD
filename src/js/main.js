$(document).ready(() => {
    var endBanner = $(".banner").offset().top + $(".banner").outerHeight(true) ;
    window.onresize = () => {
        endBanner= $(".banner").offset().top + $(".banner").outerHeight(true) ;
    }
    $(window).scroll(
        (event) => {
            console.log(endBanner)
            if ($(window).scrollTop() >= endBanner) {
                $(".header-logo").hide();
            }
            else {
                $(".header-logo").show();
            }
        }
    )
});