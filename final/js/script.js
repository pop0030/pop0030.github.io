$(document).ready(function() {

    //onepage-scroll開始
    $("#main").onepage_scroll({
        sectionContainer: "section",
        easing: "ease-in-out",
        animationTime: 800,
        pagination: true,
        updateURL: false,
        beforeMove: function(index) {

            //header動畫 開始
            if ($("body").hasClass("viewing-page-1")) {
                $("#logo img").animate({
                    "height": "40px"
                }, 400)
                $("header").removeClass("scroll", 400);

            } else {
                $("#logo img").animate({
                    "height": "32px",
                    marginTop: "4px"
                }, 400)
                $("header").addClass("scroll", 400);
            };
            //header動畫 結束

            //內容頁面動畫 開始
            divScroll("#food02 .content-area", 1, "out");
            divScroll("#food02 .content-area", 2, "in");
            divScroll("#food03 .content-area", 2, "out");
            divScroll("#food03 .content-area", 3, "in");
            divScroll("#food04 .content-area", 3, "out");
            divScroll("#food04 .content-area", 4, "in");
            //內容頁面動畫 結束
        },
        afterMove: function(index) {
            titleSlide("#title02");
        },
        loop: false,
        keyboard: true,
        responsiveFallback: false,
        direction: "vertical"
    });
    //onepage-scroll結束
    openBtnUp(2);
    openBtnDown(2);

    openBtnUp(3);
    openBtnDown(3);
    openBtnUp(4);
    openBtnDown(4);
    $("#food04 .slogan").click(function(event) {
        var btn_up = ".up";
        var btn_down = ".down";
        var area = "#area04";
        var slogan = "#food04 .slogan";
        var img = "#food04 .slogan img";
        var $btnUp = $(btn_up);
        var $btnDown = $(btn_down);
        var $area = $(area);
        var $img = $(img);
        var $slogan = $(slogan);
        var $traffic = $("#food04 .traffic");

        $(".up").stop().animate({
            transform: "rotate(180deg)"
        }, 800);
        $slogan.animate({
            top: "-144px"
        }, 800);
        $img.animate({
            transform: "rotate(180deg)"
        }, 800);
        $area.animate({
            height: "50%"
        }, 800, function() {
            $traffic.show(400);
            $(".up").hide();
            $(".down").show();
            $(".up").animate({
                transform: "rotate(0deg)"
            }, 0);
        });
    });
    introChoice();
});



//自訂函數

//函數 滾入
function divScrollIn(x) {
    var $div = $(x);
    $div.animate({
        height: "10%"
    }, 400);
};
//函數 滾出
function divScrollOut(x) {
    var $div = $(x);
    $div.animate({
        height: "50%"
    }, 400);
};

//函數 滾出滾入 判定圖層
function divScroll(x, val, bl) {
    if (bl === "in") {
        if ($("body").hasClass("viewing-page-" + val)) {
            divScrollIn(x);

        } else {};
    } else if (bl === "out") {
        if ($("body").hasClass("viewing-page-" + val)) {
            divScrollOut(x);

        } else {};
    } else {};
};
//函數 按鈕
function openBtnUp(x) {
    var btn_up = ".up";
    var btn_down = ".down";
    var area = "#area0" + x;
    var slogan = "#food0" + x + " .slogan";
    var img = "#food0" + x + " .slogan img";
    var $btnUp = $(btn_up);
    var $btnDown = $(btn_down);
    var $area = $(area);
    var $img = $(img);
    var $slogan = $(slogan);
    var $traffic = $("#food0" + x + " .traffic");
    $btnUp.click(function() {
        $(".up").stop().animate({
            transform: "rotate(180deg)"
        }, 800);
        $slogan.animate({
            top: "-144px"
        }, 800);
        $img.animate({
            transform: "rotate(180deg)"
        }, 800);
        $area.animate({
            height: "50%"
        }, 800, function() {
            $traffic.show(400);
            $(".up").hide();
            $(".down").show();
            $(".up").animate({
                transform: "rotate(0deg)"
            }, 0);
        });
    });
};

function openBtnDown(x) {
    var btn_up = ".up";
    var btn_down = ".down";
    var area = "#area0" + x;
    var slogan = "#food0" + x + " .slogan";
    var img = "#food0" + x + " .slogan img";
    var $btnUp = $(btn_up);
    var $btnDown = $(btn_down);
    var $area = $(area);
    var $img = $(img);
    var $slogan = $(slogan);
    var $traffic = $("#food0" + x + " .traffic");
    $btnDown.click(function() {
        $(".down").stop().animate({
            transform: "rotate(-180deg)"
        }, 800);
        $slogan.animate({
            top: "0px"
        }, 800);
        $img.animate({
            transform: "rotate(0deg)"
        }, 800);
        $traffic.hide(400);
        $area.animate({
            height: "10%"
        }, 800, function() {

            $(".down").hide();
            $(".up").show();
            $(".down").animate({
                transform: "rotate(0deg)"
            }, 0);
        })
    });

};
//標題滑入
function titleSlide(x) {
    $title = $(x);
    if ($("body").hasClass("viewing-page-2")) {
        $title.stop().delay(100).animate({
            top: "0px",
            opacity: "1"
        }, 800);
        $(".content-text").animate({
            opacity: "1"
        }, 800);
    } else {
        $title.animate({
            top: "-180px",
            opacity: "0"
        }, 0);
        $(".content-text").animate({
            opacity: "0"
        }, 800);
    }
};
//簡介選單
function introChoice() {
    $(".main-text").click(function() {
        var x = $(this).attr('id').substr(9);
        var $intro = $("#intro" + x);
        var $other = $(".content-text");

        $other.stop().animate({
                right: "-200px",
                opacity: "0"
            },
            800,
            function() {
                $(this).hide();
                $intro.show();
                $(this).animate({
                    right: "0px"
                }, 0);
            });
        $intro.animate({
                opacity: "1",
                right: "0px"
            },
            800);
    });
};
