//one page scroll
$(function () {

    var sections = $('.section'),
        display = $('.main-content'),
        inScroll = false;

    var scrollToSection = function (sectionEq) {
        
        var position = 0;

        if (!inScroll) {
            inScroll = true;
            position = (sections.eq(sectionEq).index() * -100) + '%';
            sections.eq(sectionEq).addClass('active').siblings().removeClass('active');
            display.css({
                'transform': 'translate3d(0,' + position + ', 0)'
            });
            setTimeout(function () {
                inScroll = false;

                $('.fixed-menu__item').eq(sectionEq).addClass('active').siblings().removeClass('active');
            }, 1300)
        }
    }

    $('.wrapper').on('wheel', function (e) {

        var deltaY = e.originalEvent.deltaY,
            activeSection = sections.filter('.active'),
            nextSection = activeSection.next(),
            prevSection = activeSection.prev();

        //scroll down
        if (deltaY > 0) {
            if (nextSection.length) {
                scrollToSection(nextSection.index());
            }
        }
        //scroll up
        if (deltaY < 0) {
            if (prevSection.length) {
                scrollToSection(prevSection.index());
            }
        }

    });


    $('.down-arrow').on('click', function (e) {
        e.preventDefault();
        scrollToSection(1);
    });

    $('.fixed-menu__link, .nav__link, .order-link, .burgers-slider__buy').on('click', function (e) {
        e.preventDefault();
        var href = parseInt($(this).attr('href'));
        scrollToSection(href);

    });

    $(document).on('keydown', function(e) {

        var activeSection = sections.filter('.active'),
            nextSection = activeSection.next(),
            prevSection = activeSection.prev();

        switch(e.keyCode) {
            case 40: //page down
                if (nextSection.length) {
                    scrollToSection(nextSection.index());
            }
            break;

            case 38: //page up
                if (prevSection.length) {
                    scrollToSection(prevSection.index());
            }
             break;   
        }

    });

});

//slider
$(function () {

    var burgerCarousel = $('.burgers__slider').owlCarousel({
        items : 1,
        loop : true
    });

    $('.burger-slider__btn_next').on('click', function(e){
        e.preventDefault();
        burgerCarousel.trigger('next.owl.carousel');

    });

        $('.burger-slider__btn_prev').on('click', function(e){
        e.preventDefault();
        burgerCarousel.trigger('prev.owl.carousel');

    });
});