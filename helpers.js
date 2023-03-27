/* =========================
   HELPERS
   =========================*/

function distance_adjust(distance) {
    return Math.round(distance*0.000041);
}

function distance_to_walkinghours(distance) {
    return Math.floor((distance_adjust(distance)/3.5)/24) + ' days and ' + ((distance_adjust(distance)/3.5)%24).toFixed(1) + ' hours';
}

function copyDivToClipboard() {
                var range = document.createRange();
                range.selectNode(document.getElementById("b"));
                window.getSelection().removeAllRanges(); // clear current selection
                window.getSelection().addRange(range); // to select text
                document.execCommand("copy");
                window.getSelection().removeAllRanges();// to deselect
}

var latlngmarker = L.marker([-3.2, -76.3], {
    draggable:true,
    icon: doticon,
    opacity: .5
}).bindPopup()
.addTo(map)
.on('click', function(e){
    latlngmarker.getPopup().setContent('<div id="b" style="cursor: pointer;" onclick="copyDivToClipboard()">'
                                       + (e.latlng.lat.toFixed(1)) +
                                       ", " + (e.latlng.lng.toFixed(1)) + '</div>')
});

var distance_marker_1 = L.marker([76, 6], {
    draggable:true,
    icon: x_marker,
    opacity: .8
}).bindPopup()
.on('click', function(e){
    distance_marker_1.getPopup().setContent(
        '<b>Distance</b>:<br> ' + distance_adjust(map.distance(e.latlng, distance_marker_2.getLatLng())).toString() + 'km<br><br>'+
        '<b>Walking Time</b>:<br> ' + distance_to_walkinghours(map.distance(e.latlng, distance_marker_2.getLatLng())).toString()
        )
});

var distance_marker_2 = L.marker([-72, -117], {
    riseOnHover: true,
    draggable:true,
    icon: y_marker,
    opacity: .8
}).bindPopup()
.on('click', function(e){
    distance_marker_2.getPopup().setContent(
        '<b>Distance</b>:<br> ' + distance_adjust(map.distance(e.latlng, distance_marker_1.getLatLng())).toString() + 'km<br><br>'+
        '<b>Walking Time</b>:<br> ' + distance_to_walkinghours(map.distance(e.latlng, distance_marker_1.getLatLng())).toString()
        )
});

var helpers = [latlngmarker, distance_marker_1, distance_marker_2]