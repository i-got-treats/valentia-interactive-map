/* =========================
   TOOLTIPS
   =========================*/

// COUNTRIES
var countries_options= ({direction: 'center', permanent: true, interactive: true, className: "countries"});

var countries = [];

var estoria = L.tooltip([-58, -68], countries_options)
.setContent('Estoria')
.on('click', function() {window.open('https://heroes-of-valentia.boards.net/thread/23/estoria', "_blank")});
countries.push(estoria);
zoom0.push(estoria);

var siberia = L.tooltip([35, -94], countries_options)
.setContent('<div style="font:20px Copperplate Gothic Light;line-height: 0.7;">Turquoise<br>Country</div>')
.on('click', function() {window.open('https://heroes-of-valentia.boards.net/thread/25/siberia', "_blank")});
countries.push(siberia);
zoom0.push(siberia);

var tova = L.tooltip([26, 85], countries_options)
.setContent('<div style="font:30px Copperplate Gothic Light;line-height: 0.7;">Flooded<br>Lands<br>of Tova</div>')
.on('click', function() {window.open('https://heroes-of-valentia.boards.net/thread/26/tova', "_blank")});
countries.push(tova);
zoom0.push(tova);

var storm_isles = L.tooltip([72, 55], countries_options)
.setContent('<div style="font:30px Copperplate Gothic Light;line-height: 0.7;">Storm<br>Isles</div>')
.on('click', function() {window.open('https://heroes-of-valentia.boards.net/thread/24/storm-isles', "_blank")});
countries.push(storm_isles);
zoom0.push(storm_isles);

var korisanty = L.tooltip([-10, -18], countries_options)
.setContent('<div style="font:32px Copperplate Gothic Light;line-height: 0.7;">Korisanty</div>')
.on('click', function() {window.open('https://heroes-of-valentia.boards.net/thread/27/yellow-country', "_blank")});
countries.push(korisanty);
zoom0.push(korisanty);

var ictus_etelios = L.tooltip([-50, 61], countries_options)
.setContent('Ictus<br>Etelios')
.on('click', function() {window.open('https://heroes-of-valentia.boards.net/thread/29/green-country', "_blank")});
countries.push(ictus_etelios);
zoom0.push(ictus_etelios);

var purple_country = L.tooltip([59, -14], countries_options)
.setContent('Purple<br>Country')
.on('click', function() {window.open('https://heroes-of-valentia.boards.net/thread/28/purple-country', "_blank")});
countries.push(purple_country);
zoom0.push(purple_country);
// COUNTRIES end

// WATERS
var dark_water_options_popup = ({direction: 'center', interactive: true, permanent: true, className: "dark_water"});
var dark_water_options = ({direction: 'center', permanent: true, className: "dark_water"});
var light_water_options_popup = ({direction: 'center', interactive: true, permanent: true, className: "light_water"});
var light_water_options = ({direction: 'center', permanent: true, className: "light_water"});

var waters = [];

var se_ocean = L.tooltip([4, -20], {direction: 'center', className: "light_water", permanent: true})
.setContent("<h1>"+
"<span class='sw_1'>T</span>"+
"<span class='sw_2'>h</span>"+
"<span class='sw_3'>e</span>"+
"<span class='sw_4'> </span>"+
"<span class='sw_5'>T</span>"+
"<span class='sw_6'>i</span>"+
"<span class='sw_7'>n</span>"+
"<span class='sw_8'>t</span>"+
"<span class='sw_9'>e</span>"+
"<span class='sw_10'>d</span>"+
"<span class='sw_11'> </span>"+
"<span class='sw_12'>T</span>"+
"<span class='sw_13'>i</span>"+
"<span class='sw_14'>d</span>"+
"<span class='sw_15'>e</span>"+
"<span class='sw_16'>s</span>"+
"</h1>")
zoom0.push(se_ocean);

var nw_ocean = L.tooltip([4, -20], {direction: 'center', className: "light_water", permanent: true})
.setContent("<h1>"+
"<span class='ne_1'> </span>"+
"<span class='ne_2'>T</span>"+
"<span class='ne_3'>h</span>"+
"<span class='ne_4'>e</span>"+
"<span class='ne_5'> </span>"+
"<span class='ne_6'>S</span>"+
"<span class='ne_7'>a</span>"+
"<span class='ne_8'>v</span>"+
"<span class='ne_9'>a</span>"+
"<span class='ne_10'>g</span>"+
"<span class='ne_11'>e</span>"+
"<span class='ne_12'> </span>"+
"<span class='ne_13'>S</span>"+
"<span class='ne_14'>e</span>"+
"<span class='ne_15'>a</span>"+
"<span class='ne_16'>s</span>"+
"<span class='ne_17'> </span>"+
"</h1>")
zoom0.push(nw_ocean);

var winged_lions_sea = L.tooltip([-35, 132], light_water_options)
.setContent("<div style='transform: rotate(-55deg); font-size: 28px; opacity:.8;'>Winged Lion's<br>Sea</div>");
waters.push(winged_lions_sea);
zoom1.push(winged_lions_sea);

var the_great_tear = L.tooltip([-60, -0.5], light_water_options)
.setContent("<div style='transform: rotate(0deg); font-size: 23px; opacity:.8;'>The<br>Great<br>Tear</div>");
waters.push(the_great_tear);
zoom1.push(the_great_tear);

// ESTORIA
var great_lake_of_raveling = L.tooltip([-47, -55], light_water_options)
.setContent("<div style='font-size: 14px;'>Great<br>Lake of<br>Raveling</div>");
waters.push(great_lake_of_raveling);
zoom2.push(great_lake_of_raveling);

var bogtrus_shallows = L.tooltip([-38.7, -108], light_water_options_popup)
.setContent("<div style='font-size: 12px;'>Bogtru's<br>Shallows</div>")
.bindPopup("<big>&#x1F661</big> <b>Bogtru's Shallows</b> <big>&#128611</big><br>\
            Named after the great warrior Bogtru, fabled and beloved by Estoria's orcs.", {offset: [0, -6]});
waters.push(bogtrus_shallows);
zoom2.push(bogtrus_shallows);

var sunset_pond = L.tooltip([-47.4, -130.8], light_water_options)
.setContent("<div style='font-size: 10px;'>Sunset<br>Pond</div>");
waters.push(sunset_pond);
zoom3.push(sunset_pond);

var rivera = L.tooltip([-52.9, -75], dark_water_options)
.setContent("<div style='font-size: 13px; transform: rotate(-10deg);'>Rivera</div>");
waters.push(rivera);
zoom3.push(rivera);

var scava = L.tooltip([-49.4, -95.5], dark_water_options)
.setContent("<div style='font-size: 13px'>Scava</div>");
waters.push(scava);
zoom3.push(scava);

var scavetta = L.tooltip([-46.7, -102.7], dark_water_options)
.setContent("<div style='font-size: 11px; transform: rotate(65deg);'>Scavetta</div>");
waters.push(scavetta);
zoom3.push(scavetta);

var tovera = L.tooltip([-65.4, -96], dark_water_options)
.setContent("<div style='font-size: 12px; transform: rotate(25deg);'>Tovera</div>");
waters.push(tovera);
zoom3.push(tovera);

var silver_bay = L.tooltip([-74, -121], light_water_options)
.setContent("<div style='transform: rotate(24deg);'>Silver Bay</div>");
waters.push(silver_bay);
zoom1.push(silver_bay);

var the_little_tear = L.tooltip([-71, -85.5], light_water_options)
.setContent("<div style='font-size: 13px;'>The<br>Little<br>Tear</div>");
waters.push(the_little_tear);
zoom1.push(the_little_tear);

// GREEN COUNTRY

var noche = L.tooltip([-15.9, 83.5], dark_water_options)
.setContent("<div style='font-size: 11px; transform: rotate(-10deg);'>Noche</div>");
waters.push(noche);
zoom3.push(noche);

var passio = L.tooltip([-21.9, 85.5], dark_water_options)
.setContent("<div style='font-size: 11px; transform: rotate(34deg);'>Passio</div>");
waters.push(passio);
zoom3.push(passio);

var sacrato = L.tooltip([-16.4, 69], dark_water_options)
.setContent("<div style='font-size: 13px; transform: rotate(-34deg);'>Sacrato</div>");
waters.push(sacrato);
zoom3.push(sacrato);

var consacrato = L.tooltip([-34.3, 70.8], dark_water_options)
.setContent("<div style='font-size: 10px; transform: rotate(30deg);'>Consacrato</div>");
waters.push(consacrato);
zoom3.push(consacrato);

var vistola = L.tooltip([-44, 54.2], dark_water_options)
.setContent("<div style='font-size: 12px; transform: rotate(70deg);'>Vistola</div>");
waters.push(vistola);
zoom3.push(vistola);

var dalmation_gulf = L.tooltip([-30, 32], light_water_options)
.setContent("<div style='transform: rotate(-5deg);'>Dalmatian Gulf</div>");
waters.push(dalmation_gulf);
zoom2.push(dalmation_gulf);

var satyr_bay = L.tooltip([-45.8, 23], light_water_options)
.setContent("Satyr<br>Bay");
waters.push(satyr_bay);
zoom2.push(satyr_bay);

var pp_lake = L.tooltip([-65.5, 77], light_water_options)
.setContent("PP Lake");
waters.push(pp_lake);
zoom2.push(pp_lake);

var moon_tear = L.tooltip([-53.1, 35.5], light_water_options)
.setContent("<div style='transform: rotate(-25deg);'>Moon-Tear</div>");
waters.push(moon_tear);
zoom2.push(moon_tear);

var lovelets_crater = L.tooltip([-76.2, 58], dark_water_options_popup)
.setContent("Lovelet's<br>Crater")
.bindPopup("<big>&#x1F661</big> <b>Lovelet's Crater</b> <big>&#128611</big><br>\
            A rounded body of freshwater, said to be created by the powerful mage 'Lovelet',\
            who sent a comet filled with water into the desert. Some say they can 'taste the cosmos'.", {offset: [0, -6]});
waters.push(lovelets_crater);
zoom2.push(lovelets_crater);

var soaring_lagoon = L.tooltip([-74.7, 70.5], dark_water_options_popup)
.setContent("<div style='font-size:10px;'>Soaring<br>Lagoon</div>")
.bindPopup("<big>&#x1F661</big> <b>Soaring Lagoon</b> <big>&#128611</big><br>\
            A grand exposed coral reef, too hot to even dip a toe in for common folk.\
            locals speak of a dragon sleeping under the reef.", {offset: [0, -6]});
waters.push(soaring_lagoon);
zoom3.push(soaring_lagoon);

// TOVA
var cresters_basin = L.tooltip([35.3, -44], light_water_options)
.setContent("<div style='font-size: 13px;'>Crester's<br>Basin</div>");
waters.push(cresters_basin);
zoom2.push(cresters_basin);

var ry = L.tooltip([8.2, 110.5], dark_water_options)
.setContent("<div style='font-size: 13px; transform: rotate(-20deg);'>Ry</div>");
waters.push(ry);
zoom3.push(ry);

var the_mirrored_expanse = L.tooltip([21.4, 84], light_water_options)
.setContent("<div style='font-size: 14px;'>The Guiltless Expanse</div>");
waters.push(the_mirrored_expanse);
zoom2.push(the_mirrored_expanse);

var living_waters = L.tooltip([33.4, 33.2], light_water_options)
.setContent("<div style='font-size: 14px;'>Living<br>Waters</div>");
waters.push(living_waters);
zoom2.push(living_waters);

// SIBERIA

var frozen_lakes = L.tooltip([57.5, -119], light_water_options)
.setContent("<div style='font-size: 13px;'>Frozen<br>Lakes</div>");
waters.push(frozen_lakes);
zoom3.push(frozen_lakes);

// PURPLE COUNTRY

var the_dancing_creek = L.tooltip([73.5, 10], dark_water_options)
.setContent("<div style='font-size: 11px; transform: rotate(0deg);'>The<br>Dancing<br>Creek</div>");
waters.push(the_dancing_creek);
zoom3.push(the_dancing_creek);

var ithen = L.tooltip([62, -11], dark_water_options)
.setContent("<div style='font-size: 13px; transform: rotate(14deg);'>Ithen</div>");
waters.push(ithen);
zoom3.push(ithen);

var ith = L.tooltip([48, -5], dark_water_options)
.setContent("<div style='font-size: 13px; transform: rotate(16deg);'>Ith</div>");
waters.push(ith);
zoom3.push(ith);

// YELLOW COUNTRY
var felicity = L.tooltip([4, -18], light_water_options)
.setContent("<div style='font-size: 13px;'>Felicity</div>");
waters.push(felicity);
zoom2.push(felicity);

var solace = L.tooltip([6, -6.8], dark_water_options)
.setContent("<div style='font-size: 12px; transform: rotate(26deg);'>Solace</div>");
waters.push(solace);
zoom3.push(solace);

var ardour = L.tooltip([6.6, 2.6], dark_water_options)
.setContent("<div style='font-size: 12px;'>Ardour</div>");
waters.push(ardour);
zoom3.push(ardour);

var charm = L.tooltip([13.8, 8.2], dark_water_options)
.setContent("<div style='font-size: 11px; transform: rotate(-55deg);'>Charm</div>");
waters.push(charm);
zoom3.push(charm);

var trust = L.tooltip([-1, -25.5], light_water_options)
.setContent("<div style='font-size: 13px;'>Trust</div>");
waters.push(trust);
zoom3.push(trust);

var gloom = L.tooltip([-4.8, -33.8], dark_water_options)
.setContent("<div style='font-size: 12px; transform: rotate(-26deg);'>Gloom</div>");
waters.push(gloom);
zoom3.push(gloom);

var mercy = L.tooltip([-8.6, -41.5], dark_water_options)
.setContent("<div style='font-size: 11px; transform: rotate(0deg);'>Mercy</div>");
waters.push(mercy);
zoom3.push(mercy);

var woe = L.tooltip([-3, -13.7], light_water_options)
.setContent("<div style='font-size: 13px;'>Woe</div>");
waters.push(woe);
zoom3.push(woe);
// WATERS end

// ISLANDS
var island_options = ({direction: 'center', interactive: true, permanent: true, className: "inland"});
var island_options_no_popup = ({direction: 'center', interactive: false, permanent: true, className: "inland"});

var islands = [];

var fortune_island = L.tooltip([-37, 12], island_options)
.setContent("Fortune<br>Island")
.bindPopup("<big>&#x1F661</big> <b>Fortune Island</b> <big>&#128611</big><br>\
            A volcanic island.", {offset: [0,-12]});
islands.push(fortune_island);
zoom2.push(fortune_island);

var infernal_isle = L.tooltip([20.6, 64], island_options)
.setContent("<div style='font-size: 11px;'>Infernal Isle<div>")
.bindPopup("<big>&#x1F661</big> <b>Infernal Isle</b> <big>&#128611</big><br>\
            A once beautiful and furtile land now lays in ashes.<br><br>\
            The sad tale is well known. In an attempt to bring her love back from the dead,\
            Erica forged a pact with Jaqon, a devil, who was held prisoner in a dungeon.\
            He ordered for her to perform thirteen tasks, and promised to return her lover as payment.\
            Each task consisted of devil's work - to kill the innocents, to torture and reap their souls -\
            and with each task, a bit of her humanity was lost.\
            With her thirteenth task, she had forgotten who she had been\
            and joined Jaqon in burning the island.");
islands.push(infernal_isle);
zoom3.push(infernal_isle);

var harolds_boot = L.tooltip([-78.5, -137], island_options)
.setContent("Harold's Boot")
.bindPopup("<big>&#x1F661</big> <b>Harold's Boot</b> <big>&#128611</big><br>\
            An island, vaguely the shape of a shoe. Under perfect conditions, Harold's Boot can be seen from Estoria's mainland.",
            {offset: [0,-6]});
islands.push(harolds_boot);
zoom1.push(harolds_boot);

var hawk_island = L.tooltip([20, 150], island_options)
.setContent("Hawk<br>Island")
.bindPopup("<big>&#x1F661</big> <b>Hawk Island</b> <big>&#128611</big><br>\
            Home of the Land. Brave of the Free.", {offset: [0,-6]});
islands.push(hawk_island);
zoom1.push(hawk_island);

// CANYONS and SHRUBS
var canyon_options = ({direction: 'center', interactive: true, permanent: true, className: "inland", opacity: .5});

var canyons = [];

var the_scars = L.tooltip([-41, -124], canyon_options)
.setContent("<div style='font-size: 15px;'>The Scars</div>")
.bindPopup("<big>&#x1F661</big> <b>The Scars</b> <big>&#128611</big><br>\
            The Scars of Estoria or simply 'The Scars' are a group of five canyons to the northeast of Estoria.", {offset: [0,-12]});
canyons.push(the_scars);
zoomex1.push(the_scars);

var the_great_hollow = L.tooltip([49, -37], canyon_options)
.setContent("<div style='font-size: 13px;'>The<br>Great<br>Hollow</div>")
.bindPopup("<big>&#x1F661</big> <b>The Great Hollow</b> <big>&#128611</big><br>\
            Massive cliffs of black stone rise up to block out the sun and cast this canyon\
            into eternal shadow. The accursed darkness corrupts the minds of those who venture too deep,\
            driving them mad with fear and desparation. There is no treasure, no ancient knowledge, no escape.\
            There is only hollow.", {offset: [0,-12]});
canyons.push(the_great_hollow);
zoomex1.push(the_great_hollow);

var farewell_shrublands = L.tooltip([-31.6, -57.5], canyon_options)
.setContent("<div style='font-size: 14px'>Farewell<br>Shrublands</div>")
.bindPopup("<big>&#x1F661</big> <b>Farewell Shrublands</b> <big>&#128611</big><br>\
            ...", {offset: [0,-12]});
canyons.push(farewell_shrublands);
zoomex1.push(farewell_shrublands);

var ashes_of_korisanty = L.tooltip([12.6, -43.4], canyon_options)
.setContent("<div style='font-size: 14px'>Ashes of<br>Korisanty</div>")
.bindPopup("<big>&#x1F661</big> <b>Ashes of Korisanty</b> <big>&#128611</big><br>\
            Hardy shrubs and twisted trees\
            that adapted to this ashen earth offer a unique and rugged beauty.\
            Water is sparse, but the land is home to some nomadic tribes.", {offset: [0,-12]});
canyons.push(ashes_of_korisanty);
zoomex1.push(ashes_of_korisanty);

var lonely_tundra = L.tooltip([60.4, -108], canyon_options)
.setContent("<div style='font-size: 14px'>Far Tundra</div>")
.bindPopup("<big>&#x1F661</big> <b>Lonely Tundra</b> <big>&#128611</big><br>\
            Blanketed in ice and snow, this land is too harsh and unforgiving for many creatures.", {offset: [0,-12]});
canyons.push(lonely_tundra);
zoomex1.push(lonely_tundra);

var decaying_march = L.tooltip([51, -52.1], canyon_options)
.setContent("<div style='font-size: 12px'>Decaying<br>March</div>")
.bindPopup("<big>&#x1F661</big> <b>Decaying March</b> <big>&#128611</big><br>\
            Once-lush fields that are now nothing but cracked and brittle earth,\
            darkened by the ash and dust of long-forgotten wars.", {offset: [0,-12]});
canyons.push(decaying_march);
zoom2.push(decaying_march);
// CANYONS and SHRUBS end

// SANDS
var sand_options = ({direction: 'center', interactive: true, permanent: true, className: "sand", opacity: .7});

var sands = [];
var dried_sea = L.tooltip([-63, 98], sand_options)
.setContent("Dried Sea")
.bindPopup("<big>&#x1F661</big> <b>Dried Sea</b> <big>&#128611</big><br>\
            Long-dead sea creatures lay in the sand and the smell of salt hangs in the air.\
            During a great conflict under this ancient-sea, it inexplicably dried up.\
            Most believe it has something to do with the Tritons and the Coral Citadel.", {offset: [0,-12]});
sands.push(dried_sea);
zoomex1.push(dried_sea);

var dunes_of_dawn = L.tooltip([-69.4, 87.5], sand_options)
.setContent("<div style='font-size:13px;'>Dunes of<br>Dawn</div>")
.bindPopup("<big>&#x1F661</big> <b>Dunes of Dawn</b> <big>&#128611</big><br>\
            As the first light of dawn breaks over the horizon, the dunes come alive.\
            They rise and fall like waves, creating a constantly shifting landscape.\
            Many believe the dunes have minds of their own\
            and guide adventurers to secret treasures - or certain death.", {offset: [0,-12]});
sands.push(dunes_of_dawn);
zoomex1.push(dunes_of_dawn);

var worlds_end = L.tooltip([-75.7, 62.9], sand_options)
.setContent("<div style='font-size:15px;'>World's<br>End</div>")
.bindPopup("<big>&#x1F661</big> <b>World's End</b> <big>&#128611</big><br>\
            Many consider this desert to be the end of the world - but its name originated\
            from a catastrophic event in which an entire civilization was wiped out.\
            Some sources blame a cursed dragon, others a powerful wizard.", {offset: [0,-12]});
sands.push(worlds_end);
zoomex1.push(worlds_end);

var the_everdark = L.tooltip([-20, 107.2], sand_options)
.setContent("<div style='font-size:13px;'>The<br>Everdark</div>")
.bindPopup("<big>&#x1F661</big> <b>The Everdark</b> <big>&#128611</big><br>\
            A place of magical, never-ending darkness.\
            Nothing can grow there, nothing can be felt but sand and bones.\
            The loudest scream turns to quiet whisper.\
            Within hours, the mind starts playing tricks\
            on the unfortunate souls that venture into the Everdark.\
            Few ever return.", {offset: [0,-12]});
sands.push(the_everdark);
zoomex1.push(the_everdark);
// SANDS end

// FORESTS
var forest_options = ({direction: 'center', interactive: true, permanent: true, className: "forest", opacity: .8});
var forest_options_no_interact = ({direction: 'center', permanent: true, className: "forest", opacity: .8});
var forests = [];

// ESTORIA
var wolfs_wood = L.tooltip([-44.5, -69.8], forest_options_no_interact)
.setContent("Wolf's<br>Wood")
.bindPopup("<big>&#x1F661</big> <b>Wolf's Wood</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(wolfs_wood);
zoomex2.push(wolfs_wood);

var storms_garden = L.tooltip([-69.8, -100.0], forest_options_no_interact)
.setContent("Storm's<br>Garden")
.bindPopup("<big>&#x1F661</big> <b>Storm's Garden</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(storms_garden);
zoomex2.push(storms_garden);

var groves_of_silverport = L.tooltip([-66.4, -119.2], forest_options_no_interact)
.setContent("Groves of<br>Silverport")
.bindPopup("<big>&#x1F661</big> <b>Groves of Silverport</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(groves_of_silverport);
zoomex2.push(groves_of_silverport);

var quiet_forest = L.tooltip([-61, -93.6], forest_options)
.setContent("Quiet<br>Forest")
.bindPopup("<big>&#x1F661</big> <b>Quiet Forest</b> <big>&#128611</big><br>\
            Many people believe that an elusive creature watches over these tranquil woods.", {offset: [0,-12]});
forests.push(quiet_forest);
zoomex2.push(quiet_forest);

var old_woods = L.tooltip([-63.5, -52], forest_options)
.setContent("Old Woods")
.bindPopup("<big>&#x1F661</big> <b>Old Woods</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(old_woods);
zoomex2.push(old_woods);

var sighing_woodland = L.tooltip([-58, -106], forest_options)
.setContent("Sighing<br>Woodland")
.bindPopup("<big>&#x1F661</big> <b>Sighing Woodland</b> <big>&#128611</big><br>\
            The sound of the sea's gentle sighs and whispers can be heard from deep within the forest,\
            giving it its name.", {offset: [0,-12]});
forests.push(sighing_woodland);
zoomex2.push(sighing_woodland);

var theas_forest = L.tooltip([-66.8, -65.8], forest_options)
.setContent("Thea's<br>Forest")
.bindPopup("<big>&#x1F661</big> <b>Thea's Forest</b> <big>&#128611</big><br>\
            For long, elves of this forest spent their time fighting and killing one another.\
            Until Thea, an elvish princess, finally brought an end to this war.\
            She became beloved by all elven clans. When she was poisoned by an assassin,\
            her people were overcome by grief - but not by hate - and peace prevailed.\
            In her honor, they renamed this forest.", {offset: [0,-12]});
forests.push(theas_forest);
zoomex2.push(theas_forest);

// TOVA
var wandering_woods = L.tooltip([56.0, 126.6], forest_options_no_interact)
.setContent("Wandering<br>Woods")
.bindPopup("<big>&#x1F661</big> <b>Wandering Woods</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(wandering_woods);
zoomex2.push(wandering_woods);

// PURPLE
var rabbits_forest = L.tooltip([42.6, -4.2], forest_options_no_interact)
.setContent("Rabbit's Forest")
.bindPopup("<big>&#x1F661</big> <b>Rabbit's Forest</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(rabbits_forest);
zoomex2.push(rabbits_forest);

var enchanted_jungle = L.tooltip([57.5, 4.2], forest_options_no_interact)
.setContent("Enchanted<br>Jungle")
.bindPopup("<big>&#x1F661</big> <b>Enchanted Jungle</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(enchanted_jungle);
zoomex2.push(enchanted_jungle);

var voiceless_wilds = L.tooltip([51, -14.4], forest_options_no_interact)
.setContent("Voiceless<br>Wilds")
.bindPopup("<big>&#x1F661</big> <b>Voiceless Wilds</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(voiceless_wilds);
zoomex2.push(voiceless_wilds);

// ICTUS ETELIOS
var willow_trees = L.tooltip([-36.5, 62], forest_options_no_interact)
.setContent("<div style='font-size:12px;'>Willow<br>Trees</div>")
.bindPopup("<big>&#x1F661</big> <b>The Willow Trees</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(willow_trees);
zoom3.push(willow_trees);

var oak_grove = L.tooltip([-39.8, 62.], forest_options_no_interact)
.setContent("Oak<br>Grove")
.bindPopup("<big>&#x1F661</big> <b>Oak Grove</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(oak_grove);
zoom3.push(oak_grove);

var vagabond_woods = L.tooltip([-37.4, 82.3], forest_options_no_interact)
.setContent("Vagabond<br>Woods")
.bindPopup("<big>&#x1F661</big> <b>Vagabond Woods</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(vagabond_woods);
zoomex2.push(vagabond_woods);

var laughing_covert = L.tooltip([-11.0, 93.9], forest_options_no_interact)
.setContent("Laughing<br>Covert")
.bindPopup("<big>&#x1F661</big> <b>Laughing Covert</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(laughing_covert);
zoomex2.push(laughing_covert);

var dreamers_jungle = L.tooltip([-64.5, 62.6], forest_options_no_interact)
.setContent("The<br>Dreamer's<br>Jungle")
.bindPopup("<big>&#x1F661</big> <b>The Dreamer's Jungle</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(dreamers_jungle);
zoomex2.push(dreamers_jungle);

var rains_whisper = L.tooltip([-66.4, 46.0], forest_options_no_interact)
.setContent("Rain's<br>Whisper")
.bindPopup("<big>&#x1F661</big> <b>Rain's Whisper</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(rains_whisper);
zoomex2.push(rains_whisper);

// KORISANTY
var sweet_forest = L.tooltip([-1.9, -3.2], forest_options_no_interact)
.setContent("<div style='font-size: 12px;'>Sweet<br>Forest</div>")
.bindPopup("<big>&#x1F661</big> <b>Sweet Forest</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(sweet_forest);
zoomex2.push(sweet_forest);

var veiled_woods = L.tooltip([-18.6, -52.4], forest_options_no_interact)
.setContent("Veiled<br>Woods")
.bindPopup("<big>&#x1F661</big> <b>Veiled Woods</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(veiled_woods);
zoomex2.push(veiled_woods);

var champions_forest = L.tooltip([0.6, 6.6], forest_options_no_interact)
.setContent("<div style='font-size: 12px;'>Champion's<br>Forest</div>")
.bindPopup("<big>&#x1F661</big> <b>Champion's Forest</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(champions_forest);
zoomex2.push(champions_forest);

var perfumers_grove = L.tooltip([7.6, -3.3], forest_options_no_interact)
.setContent("<div style='font-size: 12px;'>Perfumer's<br>Grove</div>")
.bindPopup("<big>&#x1F661</big> <b>Perfumer's Grove</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(perfumers_grove);
zoomex2.push(perfumers_grove);

var miserys_garden = L.tooltip([22, -55.9], forest_options)
.setContent("<div style='font-size: 12px;'>Misery's<br>Garden</div>")
.bindPopup("<big>&#x1F661</big> <b>Misery's Garden</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(miserys_garden);
zoomex2.push(miserys_garden);

// TURQUOISE/SIBERIA
var giants_woods = L.tooltip([70.1, -53.2], forest_options)
.setContent("Giant's<br>Woods")
.bindPopup("<big>&#x1F661</big> <b>Giant's Woods</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(giants_woods);
zoomex2.push(giants_woods);

var pale_woods = L.tooltip([45.5, -87.2], forest_options_no_interact)
.setContent("Pale<br>Woods")
.bindPopup("<big>&#x1F661</big> <b>Pale Woods</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
forests.push(pale_woods);
zoomex2.push(pale_woods);
// FORESTS end

// MOUNTAINS
var mountain_options = ({direction: 'center', interactive: true, permanent: true, className: "inland", opacity: .7});

var mountains = [];

var snowy_peaks = L.tooltip([70, -70], mountain_options)
.setContent("<div style='font-size: 14px;'>Snowy Peaks</div>")
.bindPopup("<big>&#x1F661</big> <b>Snowy Peaks</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
mountains.push(snowy_peaks);
zoomex1.push(snowy_peaks);

var the_first_rise = L.tooltip([-51.6, -30.8], mountain_options)
.setContent("<div style='font-size: 18px;'>The<br>First<br>Rise</div>")
.bindPopup("<big>&#x1F661</big> <b>The First Rise</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
mountains.push(the_first_rise);
zoomex1.push(the_first_rise);

var evenfall_heights = L.tooltip([-39.9, 37.3], mountain_options)
.setContent("<div style='font-size: 16px;'>Evenfall<br>Heights</div>")
.bindPopup("<big>&#x1F661</big> <b>Evenfall Heights</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
mountains.push(evenfall_heights);
zoomex1.push(evenfall_heights);

var bronze_peaks = L.tooltip([-19.4, 49.6], mountain_options)
.setContent("<div style='font-size: 13px'>Bronze Peaks</div>")
.bindPopup("<big>&#x1F661</big> <b>Bronze Peaks</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
mountains.push(bronze_peaks);
zoomex1.push(bronze_peaks);

var forgotten_mountains = L.tooltip([-69.2, 27.1], mountain_options)
.setContent("<div style='font-size: 13px;'>Forgotten<br>Mountains</div>")
.bindPopup("<big>&#x1F661</big> <b>Forgotten Mountains</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
mountains.push(forgotten_mountains);
zoomex1.push(forgotten_mountains);

var slumbering_mountains = L.tooltip([-20.3, 10.5], mountain_options)
.setContent("<div style='font-size: 14px;'>Slumbering<br>Mountains</div>")
.bindPopup("<big>&#x1F661</big> <b>Slumbering Mountains</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
mountains.push(slumbering_mountains);
zoomex1.push(slumbering_mountains);

var northern_heights = L.tooltip([72.5, -24.4], mountain_options)
.setContent("<div style='font-size: 14px;'>Northern Heights</div>")
.bindPopup("<big>&#x1F661</big> <b>Northern Heights</b> <big>&#128611</big><br>\
            ", {offset: [0,-12]});
mountains.push(northern_heights);
zoomex1.push(northern_heights);

var fearsome_mountain = L.tooltip([-29.8, 54.1], mountain_options)
.setContent("<div style='font-size: 10px;'>Fearsome<br>Mountain</div>")
.bindPopup("<big>&#x1F661</big> <b>Fearsome Mountain</b> <big>&#128611</big><br>\
            In order to be left alone, Hobbits in a nearby village\
            spread rumours about a monster living on this mountain.\
            Hence the misleading name, fearsome mountain.\
            The mountain in itself is quite peacful and pretty.", {offset: [0,-12]});
mountains.push(fearsome_mountain);
zoom3.push(fearsome_mountain);
// MOUNTAINS end

var lettering = [].concat(countries, waters, islands, canyons, sands, mountains, forests);
