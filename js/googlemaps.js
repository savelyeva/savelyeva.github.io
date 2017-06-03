var neighborhoods = [
    { lat: 59.911, lng: 30.500 },
    { lat: 59.886, lng: 30.319 },
    { lat: 59.970, lng: 30.315 }
];

var marker;
var markers = [];
var map;

function initMap() {
    var uluru = { lat: 59.896, lng: 30.424 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru,
        mapTypeId: 'roadmap',
        draggable: false,
        mapTypeControl: false,
        scrollwheel: false
    });

    marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: 'ул.Бабушкина, д.12/1, 15',
        // draggable: true,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.898, lng: 30.421 }
    });
    // либо вместо map:map; 
    // To add the marker to the map, call setMap();
    // marker.setMap(map);
    marker.setIcon('../img/icons/map-marker.svg');
    marker.addListener('click', toggleBounce);

}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}



// var marker1;
// var marker2;
// var marker3;
// var marker4;
// var map;

// function initMap() {
//     var uluru = { lat: 59.896, lng: 30.424 };
//     map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 15,
//         center: uluru,
//         mapTypeId: 'roadmap',
//         draggable: false,
//         mapTypeControl: false,
//         scrollwheel: false
//     });

//     marker1 = new google.maps.Marker({
//         position: uluru,
//         map: map,
//         title: 'ул.Бабушкина, д.12/1, 15',
//         draggable: true,
//         animation: google.maps.Animation.DROP,
//         position: { lat: 59.898, lng: 30.421 }
//     });
//     // либо вместо map:map; 
//     // To add the marker to the map, call setMap();
//     // marker.setMap(map);
//     marker1.setIcon('../img/icons/map-marker.svg');
//     marker1.addListener('click', toggleBounce);

//         marker2 = new google.maps.Marker({
//         position: uluru,
//         map: map,
//         title: 'ул.Бехтерева, д.74',
//         draggable: true,
//         animation: google.maps.Animation.DROP,
//         position: { lat: 59.911, lng: 30.500 }
//     });

//      marker2.setIcon('../img/icons/map-marker.svg');

//         marker3 = new google.maps.Marker({
//         position: uluru,
//         map: map,
//         title: 'Уездный проспект, д.24',
//         draggable: true,
//         animation: google.maps.Animation.DROP,
//         position: { lat: 59.886, lng: 30.319 }
//     });

//      marker3.setIcon('../img/icons/map-marker.svg');

//         marker4 = new google.maps.Marker({
//         position: uluru,
//         map: map,
//         title: 'ул.Крупской, д.4',
//         draggable: true,
//         animation: google.maps.Animation.DROP,
//         position: { lat: 59.970, lng: 30.315 }
//     });

//      marker4.setIcon('../img/icons/map-marker.svg');}












//   function addMarker(feature) {
//     var marker = new google.maps.Marker({
//       position: feature.position,
//       map: map
//     });
//   }

//    var features = [
//     {position: new google.maps.LatLng(59.911, 30.500)}, 
//     {position: new google.maps.LatLng(59.886, 30.319)}, 
//     {position: new google.maps.LatLng(59.970, 30.315)}
//   ];

//    for (var i = 0, feature; feature = features[i]; i++) {
//     addMarker(feature);
//   }


// DROP MARKERS
// function drop() {
//     clearMarkers();
//     for (var i = 0; i < neighborhoods.length; i++) {
//         addMarkerWithTimeout(neighborhoods[i], i * 400);
//     }
// }

// function addMarkerWithTimeout(position, timeout) {
//     window.setTimeout(function () {
//         markers.push(new google.maps.Marker({
//             position: position,
//             map: map,
//             animation: google.maps.Animation.DROP
//         }));
//     }, timeout);
// }

// function clearMarkers() {
//     for (var i = 0; i < markers.length; i++) {
//         markers[i].setMap(null);
//     }
//     markers = [];
// }

  