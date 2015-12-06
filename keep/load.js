$(document).ready(function() {
    loadspreadsheet();
});
var jsonLength;
var loadspreadsheet = function() {
    $.ajax({
        url: 'https://spreadsheets.google.com/feeds/list/1hKOuu4eec3RNny_zjanTDlQ3yzaktXbW2YNXrjOlgBo/default/public/values?alt=json',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            json = data;
            var a = ((jsonLength > 0) ? jsonLength : 0);
            var deleteBtn = "<i class='fa fa-times-circle hidden'></i>";
            var newjsonLength = json.feed.entry.length;
            var total = parseInt(json.feed.entry[0].gsx$total.$t);
            totalCount(total);
            for (var i = a; i < newjsonLength; i++) {
                var item = json.feed.entry[i].gsx$內容.$t;
                var local = json.feed.entry[i].gsx$地點.$t;
                var date = json.feed.entry[i].gsx$日期.$t;
                var price = json.feed.entry[i].gsx$金額.$t;
                var type = json.feed.entry[i].gsx$類別.$t;
                var $table = $('#' + type).find('tbody');
                var tableHtml = "<tr><td>" + (i + 1) + "</td><td>" + item + "</td><td>" + date + "</td><td>" + local + "</td><td>" + price + deleteBtn + "</td></tr>";
                $table.prepend(tableHtml);
            }
            jsonLength = json.feed.entry.length;
        },
        error: function() {
            console.log("error")
        }
    });
};
