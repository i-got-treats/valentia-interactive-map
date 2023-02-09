/* =========================
   LAYER GROUPS
   =========================*/

function change() {
    var decider = document.getElementById('switch');
    // ZOOMS
    //countries only appear on zoom level 0
    map.on('zoomend', function () {
        L.layerGroup(zoom0).eachLayer(function (layer) {
            if (map.getZoom() > 1 && map.hasLayer(layer) && decider.checked) {
                map.removeLayer(layer);
            }
            if (map.getZoom() < 2 && map.hasLayer(layer) == false && decider.checked){
                map.addLayer(layer);
            }
        })
    });

    // appear from zoom level 1 on
    map.on('zoomend', function () {
        L.layerGroup(zoom1).eachLayer(function (layer) {
            if (map.getZoom() == 1 && map.hasLayer(layer) && decider.checked) {
                map.removeLayer(layer);
            }
            if (map.getZoom() > 1 && map.hasLayer(layer) == false && decider.checked){
                map.addLayer(layer);
            }
        })
    });

    // appear only on zoom level 1
    map.on('zoomend', function () {
        L.layerGroup(zoomex1).eachLayer(function (layer) {
            if (map.getZoom() != 2 && map.hasLayer(layer) && decider.checked) {
                map.removeLayer(layer);
            }
            if (map.getZoom() == 2 && map.hasLayer(layer) == false && decider.checked){
                map.addLayer(layer);
            }
        })
    });

    // appear from zoom level 2 on
    map.on('zoomend', function () {
        L.layerGroup(zoom2).eachLayer(function (layer) {
            if (map.getZoom() < 3 && map.hasLayer(layer) && decider.checked) {
                map.removeLayer(layer);
            }
            if (map.getZoom() > 2 && map.hasLayer(layer) == false && decider.checked){
                map.addLayer(layer);
            }
        })
    });

    // appear only on zoom level 2
    map.on('zoomend', function () {
        L.layerGroup(zoomex2).eachLayer(function (layer) {
            if (map.getZoom() != 3 && map.hasLayer(layer) && decider.checked) {
                map.removeLayer(layer);
            }
            if (map.getZoom() == 3 && map.hasLayer(layer) == false && decider.checked){
                map.addLayer(layer);
            }
        })
    });

    // appear from zoom level 3 on
    map.on('zoomend', function () {
        L.layerGroup(zoom3).eachLayer(function (layer) {
            if (map.getZoom() < 4 && map.hasLayer(layer) && decider.checked) {
                map.removeLayer(layer);
            }
            if (map.getZoom() > 3 && map.hasLayer(layer) == false && decider.checked){
                map.addLayer(layer);
            }
        })
    });
};

var base={
    label: 'MAP STYLE',
    children: [
        {label: 'color by country', layer: default_layer},
        {label: 'color by biome', layer: biomes_layer}
    ]
}
var legend = {
    label: "MAP INFO",
    selectAllCheckbox: true,
    children: [
        {label: '<input type="checkbox" id="switch" onclick="change()"/> zoom-regulation'},

        {label: "(helpers)",
        layer: L.layerGroup(helpers)},

        {label: "Lettering", layer: L.layerGroup(lettering)},

        {label: "BUILDINGS",
        collapsed: true,
        selectAllCheckbox: true,
        children:[
            { label: "<img class='ico' src='images/icons/buildings/castle.png'/>\
            Castles", layer: L.layerGroup(castles) },

            { label: "<img class='ico' src='images/icons/buildings/cathedral.png'/>\
            Cathedrals", layer: L.layerGroup(cathedrals) },

            { label: "<img class='ico' src='images/icons/buildings/colig.png'/>\
            Colig", layer: L.layerGroup([colig]) },

            { label: "<img class='ico' src='images/icons/buildings/crypts.png'/>\
            Crypts", layer: L.layerGroup(crypts) },

            { label: "<img class='ico' src='images/icons/buildings/fort.png'/>\
            Forts", layer: L.layerGroup(forts) },

            { label: "<img class='ico' src='images/icons/buildings/lighthouse.png'/>\
            Lighthouses", layer: L.layerGroup(lighthouses) },

            { label: "<img class='ico' src='images/icons/buildings/stable.png'/>\
            Stables", layer: L.layerGroup(stables) },

            { label: "<img class='ico' src='images/icons/buildings/stronghold.png'/>\
            Strongholds", layer: L.layerGroup(strongholds) },

            { label: "<img class='ico' src='images/icons/buildings/tavern.png'/>\
            Taverns", layer: L.layerGroup(taverns) },

            { label: "<img class='ico' src='images/icons/buildings/temple.png'/>\
            Temples", layer: L.layerGroup(temples) },

            { label: "<img class='ico' src='images/icons/buildings/tower.png'/>\
            Towers", layer: L.layerGroup(towers) },

            { label: "<img class='ico' src='images/icons/buildings/windmill.png'/>\
            Windmills", layer: L.layerGroup(windmills) }
        ]},

        {label: "LANDMARKS",
        selectAllCheckbox: true,
        collapsed: true,
        children:[
            { label: "<img class='ico' src='images/icons/landmarks/altar.png'/>\
            Altars", layer: L.layerGroup(altars) },

            { label: "<img class='ico' src='images/icons/landmarks/bridge.png'/>\
            Bridges", layer: L.layerGroup(bridges) },

            { label: "<img class='ico' src='images/icons/landmarks/dangerzone.png'/>\
            Dangerzones", layer: L.layerGroup(dangerzones) },

            { label: "<img class='ico' src='images/icons/landmarks/monolith.png'/>\
            Monoliths", layer: L.layerGroup(monoliths) },

            { label: "<img class='ico' src='images/icons/landmarks/obelisk.png'/>\
            Obelisks", layer: L.layerGroup(obelisks) },

            { label: "<img class='ico' src='images/icons/landmarks/ruin.png'/>\
            Ruins", layer: L.layerGroup(ruins) },

            { label: "<img class='ico' src='images/icons/landmarks/shipwreck.png'/>\
            Shipwrecks", layer: L.layerGroup(shipwrecks) },

            { label: "<img class='ico' src='images/icons/landmarks/shrine.png'/>\
            Shrines", layer: L.layerGroup(shrines) },

            { label: "<img class='ico' src='images/icons/landmarks/standing_stones.png'/>\
            Standing Stones", layer: L.layerGroup(standing_stones) },

            { label: "<img class='ico' src='images/icons/landmarks/thorns.png'/>\
            Thorns", layer: L.layerGroup(thorns) },

            { label: "<img class='ico' src='images/icons/landmarks/waterfall.png'/>\
            Waterfall", layer: L.layerGroup(waterfalls) },

            { label: "<img class='ico' src='images/icons/landmarks/whirlpool.png'/>\
            Whirlpools", layer: L.layerGroup(whirlpools) },
        ]},

        {label: "LOCATIONS",
        collapsed: true,
        selectAllCheckbox: true,
        children:[
            { label: "<img class='ico' src='images/icons/locations/alchemist.png'/>\
            Alchemists", layer: L.layerGroup(alchemists) },

            { label: "<img class='ico' src='images/icons/locations/cave.png'/>\
            Caves", layer: L.layerGroup(caves) },

            { label: "<img class='ico' src='images/icons/locations/doc.png'/>\
            Docs", layer: L.layerGroup(docs) },

            { label: "<img class='ico' src='images/icons/locations/dungeon.png'/>\
            Dungeons", layer: L.layerGroup(dungeons) },

            { label: "<img class='ico' src='images/icons/locations/forge.png'/>\
            Forges", layer: L.layerGroup(forges) },

            { label: "<img class='ico' src='images/icons/locations/grainfarm.png'/>\
            Grainfarms", layer: L.layerGroup(grainfarms) },

            { label: "<img class='ico' src='images/icons/locations/graveyard.png'/>\
            Graveyards", layer: L.layerGroup(graveyards) },

            { label: "<img class='ico' src='images/icons/locations/hut.png'/>\
            Huts", layer: L.layerGroup(huts) },

            { label: "<img class='ico' src='images/icons/locations/mine.png'/>\
            Mines", layer: L.layerGroup(mines) },

            { label: "<img class='ico' src='images/icons/locations/ravenskull.png'/>\
            Ravenskulls", layer: L.layerGroup(ravenskulls) },

            { label: "<img class='ico' src='images/icons/locations/vineyard.png'/>\
            Vineyards", layer: L.layerGroup(vineyards) }
        ]},

        {label: "SETTLEMENTS",
        collapsed: true,
        selectAllCheckbox: true,
        children:[
            { label: "<img class='ico' src='images/icons/settlements/camp.png'/>\
            Camps", layer: L.layerGroup(camps) },

            { label: "<img class='ico' src='images/icons/settlements/city.png'/>\
            Cities", layer: L.layerGroup(cities) },

            { label: "<img class='ico' src='images/icons/settlements/hut_village.png'/>\
            Hut Villages", layer: L.layerGroup(hut_villages) },

            { label: "<img class='ico' src='images/icons/settlements/legion_camp.png'/>\
            Legion Camps", layer: L.layerGroup(legion_camps) },

            { label: "<img class='ico' src='images/icons/settlements/town.png'/>\
            Towns", layer: L.layerGroup(towns) },

            { label: "<img class='ico' src='images/icons/settlements/village.png'/>\
            Villages", layer: L.layerGroup(villages) },
        ]}
        
    ]
};
L.control.layers.tree(base, legend).addTo(map);
document.getElementById('switch').click()
