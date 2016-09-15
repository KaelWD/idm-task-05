(function ($, window) {

    var busy = false;

    $(window).on('scroll', function () {
        if (!busy) window.requestAnimationFrame(scrollLoop);
    });

    $('.main-nav__toggle').on('click', function (e) {
        $('.main-nav').toggleClass('is-open');
    })

    function scrollLoop() {
        busy = true;
        parallaxHeader(0.33);
        collapseNavbar();
        busy = false;
    }

    function parallaxHeader(factor) {
        var el = $('.hero-image');

        el.css({
            transform: 'translateY(' + $(window).scrollTop() * factor + 'px)',
            willChange: 'transform'
        });
    }

    function collapseNavbar() {
        var el = $('.main-nav');

        if ($(window).scrollTop() > 0) {
            el.addClass('is-collapsed');
        } else {
            el.removeClass('is-collapsed');
        }
    }

})(jQuery, window);
