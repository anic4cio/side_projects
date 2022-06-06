enum Boat {engine = 1, wings = 2, windows = 3};

let engines = Boat.engine;

console.log(engines); // 1

console.log(Boat); // {1: 'engine', 2: 'wings', 3: 'windows', engine: 1, wings: 2, windows: 3}