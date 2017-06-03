function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {
            lat: 59.896,
            lng: 30.424
        },
        mapTypeId: 'roadmap',
        draggable: false,
        mapTypeControl: false,
        scrollwheel: false
    });

    setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var cafes = [
    [' ул.Бабушкина, д.12/1, 15', 59.900, 30.489, 4],
    [' пр.Московский, д.74', 59.886, 30.319, 3],
    [' ул.Дыбенко, д.7', 59.911, 30.500, 2],
    [' пр.Большевиков, д.105', 59.896, 30.424, 1]
];

function setMarkers(map) {
    // Adds markers to the map.
    var image = {
        url: '../img/icons/map-marker.svg'
    };

    // Создаем наполнение для информационного окна
    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Mr. Burger</h1>' +
        '<div id="bodyContent">' +
        '<p>Мы приглашаем Вас посетить кафе "Mr Burger", чудное место, где царит позитив, и хорошее настроение и ожидают самые вкусные бургеры в мире! Заходите!</p>' +
        '<br>' +
        '<p><b>Веб-сайт:</b> <a href="http://burger.tacoder.com/" target="_blank">burger.tacoder.com/</a>' +
        '</p>' +
        '</div>' +
        '</div>';

    // Создаем информационное окно
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400
    });

    for (var i = 0; i < cafes.length; i++) {
        var cafe = cafes[i];
        var marker = new google.maps.Marker({
            position: {
                lat: cafe[1],
                lng: cafe[2]
            },
            map: map,
            icon: image,
            title: cafe[0],
            zIndex: cafe[3]
        });

        // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

    }

}
