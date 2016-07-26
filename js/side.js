$(document).ready(function() {
    $('#side-toggle').click(function() {
        /* Act on the event */
        var check = $("#side").hasClass('side-show');
        if (check) {
            $('.side-show').addClass('side-hide');
            $('.side-show').removeClass('side-show');
            $('#side-toggle').addClass('side-toggle-right');
            $('#side-toggle').removeClass('side-toggle-left');
            $('.marketing').animate({
                'margin-left': '13%'
            }, 500);
            $('#portrait').hide('scale', {}, 500);
        } else {
            $('.side-hide').addClass('side-show');
            $('.side-hide').removeClass('side-hide');
            $('#side-toggle').addClass('side-toggle-left');
            $('#side-toggle').removeClass('side-toggle-right');
            $('.marketing').animate({
                'margin-left': '25%'
            }, 500);
            $('#portrait').delay(500).show('scale', {}, 500);
        };
    });
});
