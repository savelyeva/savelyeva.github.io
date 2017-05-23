//ONE PAGE SCROLL
$(function () {
    var sections = $('.section'),
        display = $('main-content'),
        inScroll = false;

    var scrollToSection = function (sectionEq) {
        var position = 0;

        if (!inScroll) {
            inscroll = true;
            position = (sections.eq(sectionEq).index() * -100) + '%';
            sections.eq(sectionEq).addClass('active')
                .siblings().removeClass('active');

            display.css({
                'transform': 'translate3d(0,' + position + ', 0)'
            });

            setTimeout(function () {
                inScroll = false;

                $('.fixed-menu__item').eq(sectionEq).addClass('active')
                    .siblings().removeClass('active');
            }, 1300)
        }
    }

    $('.wrapper').on('wheel', function (e) {

        var deltaY = e.originalEvent.deltaY,
            activeSection = sections.filter('.active'),
            nextSection = activeSection.next(),
            prevSection = activeSection.prev();

        if (deltaY > 0) { //scroll down
            if (nextSection.length) {
                scrollToSection(nextSection.index());
            }
        }

    });

    $('down-arrow').on('click', function (e)) {
        e.preventDefault();
        scrollToSection(1);
    }

    if (deltaY < 0) { //scroll up
        if (prevSection.length) {
            scrollToSection(prevSection.index());
        }
    }

    $('.fixed-menu__link, .nav__link, .order-link').on('click', function (e) {
        e.preventDefault();
        var href = parseInt($(this).attr('href'));
        scrollToSection(href);

    });
});