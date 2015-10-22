/*=====================================================*/
//讀取外部檔案

headObj = $.get('head.html'); /*讀取head內容*/
headerObj = $.get('header.html' /*讀取<header>內容*/ , function(data) {
    $('body').prepend(data);
});
footerObj = $.get('footer.html' /*讀取<footer>內容*/ , function(data) {
    $('body').append(data);
});
/*=====================================================*/
$(document).ready(function() {
    //控制器按鈕
    $('#btn button').click(function() {
        var id = $(this).attr('id').substr(4);
        var ed = '#ed_' + id;
        $('#edit>div').hide();
        $('#btn button').removeClass('active');
        $(this).addClass('active');
        $(ed).toggle();
    });
    /*=====================================================*/
    //儲存輸出
    $('#save').click(function() {
        var x = $('.delet').detach();
        var container = '<div id="container">' + $('#container').html() + '</div>';
        var head = "<!DOCTYPE>" + headObj.responseText;
        var content = '<body>' + headerObj.responseText + container + footerObj.responseText + '</body>';
        var blob = new Blob([head, content], {
            type: "text/html;charset=utf-8"
        });
        var strFile = "new.html";
        saveAs(blob, strFile);
        $('#container>*').append(x);
    });
    /*=====================================================*/

    $('#edit').delegate('.update', 'click', function() {
        var id = $(this).parent().attr('id');
        fnName = 'update_' + id.substr(3);
        window[fnName]();
    });

    $('#container').delegate('.delet', 'click', function() {
        $(this).parent().remove();
    });
    $('#ed_img').delegate('.update', 'click', function() {
        update_img();
    });

    html_edImg = $('#ed_img').html();

    /*=====================================================*/
    //圖片預覽
    $('#ed_img').delegate('input', 'change', function() {
        var img_url = $('#ed_img input').val();
        $('#ed_img img').attr('src', img_url).show();
    });
    /*=====================================================*/
    $('body').delegate('#container>div', 'mouseover', function(event) {
        var deletArea = $(this);
        deletArea.addClass('choice');
    });
    $('body').delegate('#container>div', 'mouseleave', function(event) {
        var deletArea = $(this);
        deletArea.removeClass('choice');
    });
    /*=====================================================*/
    $('#container').sortable({
        axis: "y",
        cursor: "move",
    });
    $('#container').disableSelection();
});

var delet = '<i class="fa fa-times-circle delet"></i>'

function update_main() {
    var text = $('#ed_main input').val();
    var a = '<div><h3>' + text + '</h3>' + delet + '</div>';
    $('#container').append(a);
    $('#ed_main input').val("");
};

function update_sub() {
    var text = $('#ed_sub input').val();
    var a = '<div><h4>' + text + '</h4>' + delet + '</div>';
    $('#container').append(a);
    $('#ed_sub input').val("");
};

function update_img() {
    var text = $('#ed_img input').val();
    var a = '<div><img src=' + text + '>' + delet + '</div>';
    $('#container').append(a);
    $('#ed_img').html(html_edImg);
};

function update_caption() {
    var text = $('#ed_caption input').val();
    var a = '<div><p class="caption">' + text + '</p>' + delet + '</div>';
    $('#container').append(a);
    $('#ed_caption input').val("");
};

function update_comment() {
    var name = '<p>' + $('#ed_comment .name').val() + '</p>';
    var data = '<p>' + $('#ed_comment .data').val().replace(/\n/g, '</p><p>') + '</p>';
    var NTD = '<p>' + $('#ed_comment .ntd').val() + '</p>';
    var RMB = '<p>' + $('#ed_comment .rmb').val() + '</p>';
    var USD = '<p>' + $('#ed_comment .usd').val() + '</p>';
    var price = '<p><br></p>' + NTD + RMB + USD;
    var a = '<div class="comment">' + name + data + price + delet + '</div>';
    $('#container').append(a);
    $('#ed_comment input,textarea').val("");
};

function update_article() {
    var text = '<p class="article">' + $('#ed_article textarea').val() + '</p>';
    var a = '<div>' + text + delet + '</div>';
    $('#container').append(a);
    $('#ed_article textarea').val("");
}

function update_line() {
    var a = '<div class="line">' + delet + '</div>';
    $('#container').append(a);
}

function update_add() {
    var title = '<h3>' + $('#ed_add input').val() + '</h3>';
    var text = '<p class="article">' + $('#ed_add textarea').val() + '</p>'
    var a = '<div class="add">' + title + text + delet + '</div>';
    $('#container').append(a);
    $('#ed_add input').val("");
    $('#ed_add textarea').val("");
}
/*=====================================================*/
var isChange = false;

$("input,textarea").change(function() {
    isChange = true;
});

$(window).bind('beforeunload', function() {
    if (isChange) {
        return '資料尚未存檔，確定是否要離開？';
    }
});
