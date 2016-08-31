var header = $("header");
$(window).scroll(function(e) {
    if (header.offset().top !== 0) {
        if (!header.hasClass("shadow")) {
            header.addClass("shadow");
        }
    } else {
        header.removeClass("shadow");
    }
});

$(document).ready(function() {
    $(".pic").interactive_bg();

});

$(window).resize(function() {
    $(".wrapper > .ibg-bg").css({
        width: $(window).outerWidth(),
        height: $(window).outerHeight()
    })
});
