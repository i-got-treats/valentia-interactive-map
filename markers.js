/* =========================
   MARKERS
   =========================*/

// BUILDINGS
var castles = [];

var marble_palace = (L.marker([-47.5, 58.8], {icon: castle_i})
.bindPopup("<big>&#x1F661</big> <b>Marble Palace</b> <big>&#128611</big><br>\
        A small but beautiful palace made of marble for one Lord Petyre."));
castles.push(marble_palace);
zoom3.push(marble_palace);


var cathedrals = [];

var colig = (L.marker([-26, 18], {icon: colig_i})
.bindPopup("<big>&#x1F661</big> <b>Colig</b> <big>&#128611</big><br>\
            Widely known as the biggest magic-teaching school in Valentia."));
zoom2.push(colig);

var crypts = [];

var forts = [];

var lighthouses = [];

var silverport_western_lighthouse = (L.marker([-74, -132], {icon: lighthouse_i})
.bindPopup("<b>Silverport Western Lighthouse</b>"));
lighthouses.push(silverport_western_lighthouse);
zoom2.push(silverport_western_lighthouse);

var silverport_eastern_lighthouse = (L.marker([-76.1, -109], {icon: lighthouse_i})
.bindPopup("<b>Silverport Eastern Lighthouse</b>"));
lighthouses.push(silverport_eastern_lighthouse);
zoom2.push(silverport_eastern_lighthouse);

var stables = [];

var strongholds = [];

var taverns = [];

var temples = [];

var atheas_sanctuary = (L.marker([-62, -85], {icon: temple_i})
.bindPopup("<big>&#x1F661</big> <b>Athea's Sanctuary</b> <big>&#128611</big><br>\
            Untouched by wars, this temple still looks like it did the day it was built -\
            though that day has been forgotten even by the history books."));
temples.push(atheas_sanctuary);
zoom2.push(atheas_sanctuary);

var towers = [];

var tower_of_trust = (L.marker([1, -24], {icon: tower_i})
.bindPopup("<big>&#x1F661</big> <b>Tower of Trust</b> <big>&#128611</big><br>\
            A blue tower."));
towers.push(tower_of_trust);
zoom3.push(tower_of_trust);

var tower_of_felicity = (L.marker([2, -13], {icon: tower_i})
.bindPopup("<big>&#x1F661</big> <b>Tower of Felicity</b> <big>&#128611</big><br>\
            An orange tower."));
towers.push(tower_of_felicity);
zoom3.push(tower_of_felicity);

var tower_of_woe = (L.marker([-7, -19], {icon: tower_i})
.bindPopup("<big>&#x1F661</big> <b>Tower of Woe</b> <big>&#128611</big><br>\
            A black tower."));
towers.push(tower_of_woe);
zoom3.push(tower_of_woe);

var windmills = [];
// BUILDINGS end

// LANDMARKS
var altars = [];

var bridges = [];

var dangerzones = [];

var monoliths = [];

var obelisks = [];

var crows_point = (L.marker([80.1, -10.8], {icon: obelisk_i})
.bindPopup("<big>&#x1F661</big> <b>Crow's Point</b> <big>&#128611</big><br>\
            An ancient, 25m tall obelisk of onyx. Most likely of magical nature."));
obelisks.push(crows_point);
zoom2.push(crows_point);

var ruins = [];

var fallen_city_of_ardour = (L.marker([3.9, 6.7], {icon: ruin_i})
.bindPopup("<big>&#x1F661</big> <b>Fallen City of Ardour</b> <big>&#128611</big><br>\
            ..."));
obelisks.push(fallen_city_of_ardour);
zoom2.push(fallen_city_of_ardour);

var the_coral_citadel = (L.marker([-62.7, 99.5], {icon: ruin_i})
.bindPopup("<big>&#x1F661</big> <b>The Coral Citadel</b> <big>&#128611</big><br>\
            Over centuries, the Tritons carved and molded this towering structure.\
            A symbol of their civilization and architecture. A place where long ago, their court was held.\
            Now, the colorful seashells adorning the halls have brittled and the Tritons have disappeared."));
ruins.push(the_coral_citadel);
zoom2.push(the_coral_citadel);

var the_grave = (L.marker([22.7, 64.3], {icon: dungeon_i})
.bindPopup("<big>&#x1F661</big> <b>The Grave</b> <big>&#128611</big><br>\
            The dungeon which once held archdevil Jaqon,\
            imprisoned there for disobedience by the ruler of all devils."));
obelisks.push(the_grave);
zoom2.push(the_grave);

var shipwrecks = [];

var shrines = [];

var standing_stones = [];

var thorns = [];

var waterfalls = [];

var golden_cliff_falls = (L.marker([-56.5, -59], {icon: waterfall_i})
.bindPopup("<big>&#x1F661</big> <b>Golden Cliff Falls</b> <big>&#128611</big><br>\
            "));
waterfalls.push(golden_cliff_falls);
zoom2.push(golden_cliff_falls);

var whirlpools = [];
// LANDMARKS end

// LOCATIONS
var alchemists = [];

var caves = [];

var albibabas_hideout = (L.marker([-61, -113], {icon: cave_i})
.bindPopup("<big>&#x1F661</big> <b>Alibaba's Hideout</b> <big>&#128611</big><br>\
            Where our Party was completed."));
caves.push(albibabas_hideout);
zoom2.push(albibabas_hideout);

var dumiers_home = (L.marker([-57.4, -61.6], {icon: cave_i})
.bindPopup("<big>&#x1F661</big> <b>Home of the Dumiers</b> <big>&#128611</big><br>\
            ..."));
caves.push(dumiers_home);
zoom3.push(dumiers_home);

var docs = [];

var dungeons = [];

var forges = [];

var grainfarms = [];

var graveyards = [];

var mines = [];

var ravenskulls = [];

var yellow_ravenskulls = (L.marker([-3, -60], {icon: ravenskull_i})
.bindPopup("<big>&#x1F661</big> <b>Ravenskull Hideout</b> <big>&#128611</big><br>\
        ..."));
ravenskulls.push(yellow_ravenskulls);
zoom3.push(yellow_ravenskulls);

var siberia_ravenskulls = (L.marker([21, -138], {icon: ravenskull_i})
.bindPopup("<big>&#x1F661</big> <b>Ravenskull Hideout</b> <big>&#128611</big><br>\
        ..."));
ravenskulls.push(siberia_ravenskulls);
zoom3.push(siberia_ravenskulls);

var green_ravenskulls_1 = (L.marker([-25, 70], {icon: ravenskull_i})
.bindPopup("<big>&#x1F661</big> <b>Ravenskull Hideout</b> <big>&#128611</big><br>\
        ..."));
ravenskulls.push(green_ravenskulls_1);
zoom3.push(green_ravenskulls_1);

var green_ravenskulls_2 = (L.marker([-66, 67], {icon: ravenskull_i})
.bindPopup("<big>&#x1F661</big> <b>Ravenskull Hideout</b> <big>&#128611</big><br>\
        ..."));
ravenskulls.push(green_ravenskulls_2);
zoom3.push(green_ravenskulls_2);

var storm_isles_ravenskulls = (L.marker([66, 61], {icon: ravenskull_i})
.bindPopup("<big>&#x1F661</big> <b>Ravenskull Hideout</b> <big>&#128611</big><br>\
        ..."));
ravenskulls.push(storm_isles_ravenskulls);
zoom3.push(storm_isles_ravenskulls);

var tova_ravenskulls = (L.marker([20, 117], {icon: ravenskull_i})
.bindPopup("<big>&#x1F661</big> <b>Ravenskull Hideout</b> <big>&#128611</big><br>\
        ..."));
ravenskulls.push(tova_ravenskulls);
zoom3.push(tova_ravenskulls);

var vineyards = [];
// LOCATIONS end

// SETTLEMENTS
var camps = [];

var wandering_flames = (L.marker([13.2, -32.2], {icon: camp_i})
.bindPopup("<big>&#x1F661</big> <b>Wandering Flames</b> <big>&#128611</big><br>\
            A proud tribe of dragonborn, fiercly independent but known for their hospitality.\
            They are survivors of a great disaster that befell their home many generations ago."));
camps.push(wandering_flames);
zoom2.push(wandering_flames);

var silent_splinters = (L.marker([4.4, -40.6], {icon: camp_i})
.bindPopup("<big>&#x1F661</big> <b>Silent Splinters</b> <big>&#128611</big><br>\
            An elusive clan of tabaxi, known for the jewelery and trinkets they sell.\
            They have strange customs, such as eating with one hand behind their back\
            or purr-gatherings, where the tribe shares stories and sings songs,\
            all the while purring."));
camps.push(silent_splinters);
zoom2.push(silent_splinters);

var the_herders = (L.marker([14.9, -48.9], {icon: camp_i})
.bindPopup("<big>&#x1F661</big> <b>The Herders</b> <big>&#128611</big><br>\
            A tribe of orcs who live with their domesticated goats and coyotes.\
            They trade with milk and cheese and are generally peaceful towards strangers,\
            but will stop at nothing to protect each other and their animals."));
camps.push(the_herders);
zoom2.push(the_herders);

var cities = []

var antopolia = (L.marker([-2.7, -19], {icon: city_i})
.bindPopup("<big>&#x1F661</big> <b>Antopolia</b> <big>&#128611</big><br>\
            ..."));
cities.push(antopolia);
zoom1.push(antopolia);

var kalamoor = (L.marker([27.1, 40.1], {icon: city_i})
.bindPopup("<big>&#x1F661</big> <b>Kalamoor</b> <big>&#128611</big><br>\
            ..."));
cities.push(kalamoor);
zoom1.push(kalamoor);

var silverport = (L.marker([-72, -117], {icon: city_i})
.bindPopup("<big>&#x1F661</big> <b>Silverport</b> <big>&#128611</big><br>\
            An orc and an elf, who loved each other. A human and the dwarf whom he refused to execute.\
            They were the founders of the coastal city Silverport, home to the outcasts."));
cities.push(silverport);
zoom1.push(silverport);

var the_grand_city_of_blackwater = (L.marker([72, 45], {icon: city_i})
.bindPopup("The Grand City of<br>\
            <big>&#x1F661</big> <b>Blackwater</b> <big>&#128611</big><br>\
            ..."));
cities.push(the_grand_city_of_blackwater);
zoom1.push(the_grand_city_of_blackwater);

var kiya = (L.marker([-56.9, 37.8], {icon: city_i})
.bindPopup("<big>&#x1F661</big> <b>Kiya</b> <big>&#128611</big><br>\
            A city of animal-humanoids such as minotaurs, dragonborn, leonin and others.\
            Though the common races are not forbidden from entering or staying in Kiya,\
            they usually avoid the city."));
cities.push(kiya);
zoom1.push(kiya);


var hut_villages = [];


var bar_akh = (L.marker([76, 6], {icon: hut_village_i})
.bindPopup("<big>&#x1F661</big> <b>Bar-Akh</b> <big>&#128611</big><br>\
            ..."));
zoom2.push(bar_akh);
hut_villages.push(bar_akh);

var arrog = (L.marker([-42.9, -127.8], {icon: hut_village_i})
.bindPopup("<big>&#x1F661</big> <b>Arrog</b> <big>&#128611</big><br>\
            An orcish village."));
hut_villages.push(arrog);
zoom3.push(arrog);


var huts = [];

var butchers_hut = (L.marker([-59.8, -67.3], {icon: hut_i})
.bindPopup("<big>&#x1F661</big> <b>Butcher's Hut</b> <big>&#128611</big><br>\
            The home of a murderer and his pet gryffon. Killed by our party."));
huts.push(butchers_hut);
zoom2.push(butchers_hut);


var legion_camps = [];


var towns = [];

// ESTORIA

var morrog = (L.marker([-39, -122], {icon: town_i})
.bindPopup("<big>&#x1F661</big> <b>Morrog</b> <big>&#128611</big><br>\
            An orcish town."));
towns.push(morrog);
zoom2.push(morrog);

var ascenathea = (L.marker([-66.5, -56], {icon: town_i})
.bindPopup("<big>&#x1F661</big> <b>Ascenathea</b> <big>&#128611</big><br>\
            An elvish town."));
towns.push(ascenathea);
zoom2.push(ascenathea);

var khir_burim = (L.marker([-44, -47], {icon: town_i})
.bindPopup("<big>&#x1F661</big> <b>Khir Burim</b> <big>&#128611</big><br>\
            A dwarf town, allied with the dwarves on Mount Thul."));
towns.push(khir_burim);
zoom2.push(khir_burim);

var ebonhall = (L.marker([-52, -83], {icon: castle_i})
.bindPopup("<big>&#x1F661</big> <b>Ebonhall</b> <big>&#128611</big><br>\
            A town named after its black stone castle. Extremely hostile towards non-humans."));
towns.push(ebonhall);
zoom2.push(ebonhall);

var thuls_fortress = (L.marker([-43, -34], {icon: stronghold_i})
.bindPopup("<big>&#x1F661</big> <b>Thul's Fortress</b> <big>&#128611</big><br>\
            A stronghold built directly into Mount Thul, Eastorias highest peak.\
            The dwarves that reside in it know it was built to protect the land,\
            but they forgot who it was supposed to protect them from."));
towns.push(thuls_fortress);
zoom2.push(thuls_fortress);


// PURPLE COUNTRY

var aen_ethel = (L.marker([54.8, -7.6], {icon: castle_i})
.bindPopup("<big>&#x1F661</big> <b>Aen Ethél</b> <big>&#128611</big><br>\
            An ancient elvish castle town, ruled by the Arie family.\
            Nerry's birthplace.<br><br>\
            <b>Coat of Arms</b><br>\
            <a target='_blank' href='images/coat_of_arms/aen_ethel_coa.png'>\
            <img height='105px' src='images/coat_of_arms/aen_ethel_coa.png'/></a>"));
towns.push(aen_ethel);
zoom2.push(aen_ethel);

var leoquen = (L.marker([49, -2], {icon: town_i})
.bindPopup("<big>&#x1F661</big> <b>Leoquen</b> <big>&#128611</big><br>\
            A town of humans, half-elves and elves.\
            Originally a human town named 'Rabbitsfoot'.\
            Under Aen Ethél rule since 320.<br><br>\
            <b>Coat of Arms</b><br>\
            <a target='_blank' href='images/coat_of_arms/leoquen_coa.png'>\
            <img height='105px' src='images/coat_of_arms/leoquen_coa.png'/></a>")); //vert  in fess point a rabbit salient  copper  in dexter flank a rabbit  copper  in sinister flank a rabbit reversed copper  a chief embattled brettessy argent    drawn with an emoji palette
towns.push(leoquen);
zoom2.push(leoquen);

// TOVA
var impervious = (L.marker([13.7, 82.7], {icon: town_i})
.bindPopup("<big>&#x1F661</big> <b>Impervious</b> <big>&#128611</big><br>\
            A town born out of an age-old allience of hill-dwarves and humans native to Tova."));
towns.push(impervious);
zoom2.push(impervious);


// GREEN COUNTRY
var villages = [];
var yabuonna = (L.marker([-39.5, 56], {icon: village_i})
.bindPopup("<big>&#x1F661</big> <b>Yabuonna</b> <big>&#128611</big><br>\
            A pretty village known for its apple farm. Tytus' home."));
villages.push(yabuonna);
zoom2.push(yabuonna);

var chanter = (L.marker([-31.6, 51.3], {icon: village_i})
.bindPopup("<big>&#x1F661</big> <b>Chanter</b> <big>&#128611</big><br>\
            A small halfling village."));
villages.push(chanter);
zoom3.push(chanter);

var old_knells_village = (L.marker([-51.2, -88.6], {icon: village_i})
.bindPopup("<big>&#x1F661</big> <b>Old Knell's Village</b> <big>&#128611</big><br>\
            "));
villages.push(old_knells_village);
zoom3.push(old_knells_village);
// SETTLEMENTS end
