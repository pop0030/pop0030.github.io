$(document).ready(function($) {

    $(".thumbnail").click(function() {

        var playerIndex = $(this).attr('data-featherlight');
        var playerSoure = $(this).children('img').attr('src');
        var videoID = playerSoure.slice(26, 37);
        var videoUrl = "https://www.youtube.com/embed/" + videoID + "?rel=0&amp;showinfo=0";
        $("body").append("<div class ='featherlight featherlight-iframe' style='display: block;'><div class ='featherlight-content'><span class ='featherlight-close-icon featherlight-close'>✕</span><iframe type='text/html' id=" + playerIndex + " width='960' height='540' src=" + videoUrl + " frameborder='0' allowfullscreen='' class='featherlight-inner'></iframe></div></div>");
    });

});
