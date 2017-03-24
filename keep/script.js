$(document).ready(function() {
    /*===============================================*/
    // 函數執行區
    /*===============================================*/

    /*===============================================*/
    // 變數區
    /*===============================================*/
    var newspendForm = $('#new-spend-form'); //填入區
    var ctrlBtn = $('.ctrl-btn'); //控制區
    /*===============================================*/
    // 設定填入日期為今天  
    /*===============================================*/
    var today = new Date();
    var todayText = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + ((today.getDate() < 10) ? 0 : "") + today.getDate();
    $('#food_date').attr('value', todayText);
    /*===============================================*/
    // 「增加新消費」點擊功能
    /*===============================================*/
    $('#new-spend').click(function() {
        ctrlBtn.hide();
        newspendForm.show();
    });
    /*===============================================*/
    // 選單切換功能(適用移動裝置)
    /*===============================================*/
    $('.fa-bars').click(function() {
        $('.pure-menu-list').toggleClass('list-hidden');
    });
    /*===============================================*/
    // 填入區表單送出資料庫
    /*===============================================*/
    $('#new-spend-form').submit(function(event) {
        event.preventDefault();
        $.post('https://script.google.com/macros/s/AKfycby29IKz6QYPhLuLy0RPM6SRuEDcyCy44atrgDh9nSNSXjeznIAo/exec', {
            "action": "ADD",
            "type": 'food',
            "item": $('#food_item').val(),
            "date": "'" + $('#food_date').val(),
            "local": $('#food_local').val(),
            "price": $('#food_price').val()
        }, function(res) {
            console.log('success post!!');
            console.log(res);
            loadspreadsheet();
        });
        newspendForm.hide();
        $(this)[0].reset();
        ctrlBtn.show();
    });
    /*===============================================*/
    // 填入區取消按鈕
    /*===============================================*/
    $('#new-spend-form .cancel').click(function() {
        newspendForm.hide();
        ctrlBtn.show();
    });
    /*===============================================*/
    // 表格指定項目刪除
    /*===============================================*/
    $('tbody').delegate('.fa-times-circle', 'click', function() {
        var deleteNum = parseInt($(this).parents('tr').children().eq(0).text()) + 1;
        console.log(deleteNum);
        $.get('https://script.google.com/macros/s/AKfycby29IKz6QYPhLuLy0RPM6SRuEDcyCy44atrgDh9nSNSXjeznIAo/exec', {
            'action': 'DEL',
            'num': deleteNum
        }, function(data) {
            console.log(data)
        });
        $(this).parents('tr')[0].remove();
    });
    /*===============================================*/
    // 控制區刪除開關
    /*===============================================*/
    $('#delete').click(function() {
        $('.container').toggleClass('del_mode');
        $('i.fa-times-circle').toggleClass('hidden');
    });
    /*===============================================*/
});
/*===============================================*/
// 全域變數區
/*===============================================*/
var total = parseInt($('#total_num span').html());
/*===============================================*/
// 全域函數區
/*===============================================*/
var totalCount = function(e) {
    tNow = parseInt($('#total_num span').html())
    var speed = 40000;
    total = total + 1;
    if (e > tNow) {
        setTimeout(function() {
            var num = Math.floor(e / speed * total * total);
            $('#total_num span').text(num);
            totalCount(e);
        }, 1)
    } else {};
};
/*===============================================*/
