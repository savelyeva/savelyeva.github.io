$(document).ready(function () {

    //ONE PAGE SCROLL
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

        $(document).on('keydown', function (e) {

            var activeSection = sections.filter('.active'),
                nextSection = activeSection.next(),
                prevSection = activeSection.prev();

            switch (e.keyCode) {
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

    //SLIDER OWL CAROUSEL

    $(function () {

        var burgerCarousel = $('.owl-carousel').owlCarousel({
            items: 1,
            smartSpeed: 2000, //Время движения слайда
            loop: true
        });

        $('.burger-slider__btn_next').on('click', function (e) {
            e.preventDefault();
            burgerCarousel.trigger('next.owl.carousel');

        });

        $('.burger-slider__btn_prev').on('click', function (e) {
            e.preventDefault();
            burgerCarousel.trigger('prev.owl.carousel');

        });

    });


    //VERTICAL ACCORDION

    $(function () {
        $('.team-acco__trigger').on('click', function (e) {
            e.preventDefault();

            var $this = $(this),
                item = $this.closest('.team-acco__item'),
                container = $this.closest('.team-acco'),
                items = container.find('.team-acco__item'),
                content = item.find('.team-acco__content'),
                otherContent = container.find('.team-acco__content');

            if (!item.hasClass('active')) {
                items.removeClass('active');
                item.addClass('active');
                otherContent.slideUp();
                content.slideDown();
            } else {
                item.removeClass('active');
                content.slideUp();
            }

        });

    });

    //HORIZONTAL ACCORDION

    $(function () {
        $('.menu-list__trigger').on('click', function (e) {
            e.preventDefault();

            var $this = $(this),
                item = $this.closest('.menu-list__item'),
                container = $this.closest('.menu-list'),
                items = container.find('.menu-list__item'),
                activeItem = items.filter('.active'),
                content = item.find('.menu-list__content'),
                activeContent = activeItem.find('.menu-list__content');

            if (!item.hasClass('active')) {
                items.removeClass('active');
                item.addClass('active');

                activeContent.animate({
                    'width': '0px'
                });

                content.animate({
                    'width': '550px'
                })

            } else {
                item.removeClass('active');
                content.animate({
                    'width': '0px'
                });
            }

        });
        //закрытие аккордеона при клике НЕ по item 
        $(document).on('click', function (e) {
            var $this = $(e.target);

            if (!$this.closest('.menu-list').length) {
                $('.menu-list__content').animate({
                    'width': '0px'
                });

                $('.menu-list__item').removeClass('active');
            }
        });

    });


    // // FANCYBOX

    // $(function () {
    //     $('.review__view').fancybox({
    //         type: 'inline',
    //         maxWidth: 460,
    //         fitToView: false,
    //         padding: 0
    //     });

    //     $('.full-review__close').on('click', function (e) {
    //         e.preventDefault();
    //         $.fancybox.close();
    //     });
    // });


    //bPopup

    $(function () {
        $('.my-button').on('click', function (e) {
            // e.preventDefault();
            $('#element_to_pop_up').bPopup({
                modalColor: '#2f3234',
                opacity: 0.92
            });

            $('.full-review__close').on('click', function (e) {
                e.preventDefault();
                $.bPopup.close();
            });

        });

    });


    //INPUT MASK

    $(function () {
        $('.phone-mask').inputmask('+7 (999) 999 99 99');
    });


    //FORM SUBMIT
    // $(function () {
    //     $('#order-form').on('submit', function (e) {
    //         e.preventDefault();

    //         var form = $(this),
    //             formData = form.serialize();

    //         $.ajax({
    //             url: '../mail.php',
    //             type: 'POST',
    //             data: formData,
    //             success: function (data) {

    //                 var popup = data.status ? '#success' : '#error';
    //                 $.fancybox.open([{
    //                     href: 'popup'
    //                 }], {
    //                         type: 'inline',
    //                         maxwidth: 250,
    //                         fitToView: false,
    //                         padding: 0,
    //                         afterClose: function () {
    //                             form.trigger('reset');
    //                         }
    //                     });
    //             }
    //         })
    //     });

    //     $('.status-popup__close').on('click', function (e) {
    //         e.preventDefault();

    //         $.fancybox.close();
    //     });
    // });

    // // GOOGLE Map
    // function initMap() {
    //     var uluru = { lat: -25.363, lng: 131.044 };
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //         zoom: 4,
    //         center: uluru
    //     });
    //     var marker = new google.maps.Marker({
    //         position: uluru,
    //         map: map
    //     });
    // }

    // Yandex Map
    $(function () {
        ymaps.ready(init);
        var myMap;

        function init() {
            myMap = new ymaps.Map("map", {
                center: [59.93909492874885, 30.315868104999875],
                zoom: 11,
                controls: []
            });

            var coords = [
                [59.94554327989287, 30.38935262114668],
                [59.91142323563909, 30.50024587065841],
                [59.88693161784606, 30.3196581021103713],
                [59.970335748221672, 30.315194906302924],
            ],

                myCollection = new ymaps.GeoObjectCollection({}, {
                    iconLayout: 'default#image',
                    iconImageHref: '../img/icons/map-marker.svg',
                    iconImageSize: [46, 57],
                    iconImageOffset: [-26, -52],
                    draggable: false // метки перемещать нельзя
                });

            for (var i = 0; i < coords.length; i++) {
                myCollection.add(new ymaps.Placemark(coords[i]));
            }

            myMap.geoObjects.add(myCollection);
            // Отключаем перетаскивание карты мышью.
            myMap.behaviors.disable('scrollZoom');
        }

    });


});
