    //variables
    var mapSW = [0, 8192],
        mapNE = [8192, 0];
    var customMinZoom = 1;
    var customMaxZoom = 4;
    //variables end

    // Declare Map Object
    var map = L.map('map').setView([0, 0], customMinZoom);

    // Reference the tiles
    var default_layer = L.tileLayer('images/tiles/{z}/{x}/{y}.png',{
                        minZoom: customMinZoom,
                        maxNativeZoom: customMaxZoom,
                        maxZoom: customMaxZoom+1,
                        noWrap: true,
                        crs: L.CRS.Simple,}
                        ).addTo(map);
                            // Reference the tiles
    var biomes_layer = L.tileLayer('images/biomes/{z}/{x}/{y}.png',{
                        minZoom: customMinZoom,
                        maxNativeZoom: customMaxZoom,
                        maxZoom: customMaxZoom+1,
                        noWrap: true,
                        crs: L.CRS.Simple,}
                        );

    // map bounces back when you try to leave
    map.setMaxBounds(new L.LatLngBounds(
        map.unproject(mapNE, (customMaxZoom+1)),
        map.unproject(mapSW, (customMaxZoom+1))
    ));
    // no zoom on doubleclick
    map.doubleClickZoom.disable();