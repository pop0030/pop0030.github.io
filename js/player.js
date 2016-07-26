/* 讀取xml 開始 ------------------------------------------------------------------------------ */
$.ajax({
    url: 'youtube_portfolio.xml',
    type: 'GET',
    dataType: 'xml', //資料型態可以不設定，且此型態不可是text或html
    timeout: 1000,
    error: function(xml) {
        alert('讀取xml錯誤' + xml); //當xml讀取失敗
    },
    success: function(xml) {
        $(xml).find("tag").each(function(i) { //取得xml父節點       
            var total = $(xml).find("tag").length; //xml的總筆數
            var name = $(this).children("name").text(); //取得子節點中的name
            var videoID = $(this).children("videoID").text(); //取得子節點中的videoID

            /* 讀取xml結束 ------------------------------------------------------------------------------ */
            var videoURL = 'https://www.youtube.com/embed/' + videoID + '?rel=0&amp;showinfo=0';
            var videoIMG = 'http://img.youtube.com/vi/' + videoID + '/maxresdefault.jpg';
            var videoIF = "<iframe width='960' height='540' src=" + videoURL + " frameborder='0' allowfullscreen></iframe>"

            $('#portfolio').append("<div class='video_block'><a href='#' class='thumbnail' id=" + videoID + "><img src=" + videoIMG + " />");
            $('#' + videoID).attr('data-featherlight', videoIF);

        });
    }
});
