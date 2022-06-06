var Boat;
(function (Boat) {
    Boat[Boat["engine"] = 1] = "engine";
    Boat[Boat["wings"] = 2] = "wings";
    Boat[Boat["windows"] = 3] = "windows";
})(Boat || (Boat = {}));
;
var engines = Boat.engine;
console.log(engines);
console.log(Boat);
