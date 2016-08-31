function getVideo() {
    $.ajax({
        url: './txt/video.json',
        type: 'GET',
        dataType: 'json',
        error: function(data) {
            alert('讀取錯誤' + data); //當xml讀取失敗
        },
        success: function(video) {
            $.each(video, function(i) {
                let name = video[i].name; //取得子節點中的name
                let videoID = video[i].youtubeID; //取得子節點中的videoID
                let videoURL = 'https://www.youtube.com/embed/' + videoID + '?rel=0&amp;showinfo=0';
                let videoIMG = 'http://img.youtube.com/vi/' + videoID + '/maxresdefault.jpg';
                let videoIF = "<iframe width='960' height='540' src=" + videoURL + " frameborder='0' allowfullscreen></iframe>"

                $('#video_main').append(
                    "<div class='video_block'>" +
                    "<a href='#' class='thumbnail' id=" + videoID + ">" +
                    "<img src=" + videoIMG + " />" +
                    "</div>"
                );
                $('#' + videoID).attr('data-featherlight', videoIF);
            });
        }
    });
}
