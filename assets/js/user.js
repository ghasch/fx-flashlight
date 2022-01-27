$(document).ready(function () {
    $('.wrap').append($('<div class="fx-light"></div>'));
    $(document).bind('mousemove', function (e) {
        $('.fx-light').css({
            top: e.pageY, 
            left: e.pageX 
        });
    });

});