$(document).ready(function() {
    var header = $('header');
    var initialHeaderOpacity = 1;

    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();

        if (scrollPos > 0) {
            header.css('opacity', initialHeaderOpacity - scrollPos / 200);
        } else {
            header.css('opacity', initialHeaderOpacity);
        }
    });
});
