function Vehicle() {}

Vehicle.prototype.frame = 'steel';
Vehicle.prototype.turnon = function() {
    console.log('hihihi vrummm')
}


function Train(type) {
    this.type = type;
}
Train.prototype.wagon = 60;


function Car() {}
Car.prototype.tire = 4;

// copiando somente o prototype
Train.prototype = Vehicle.prototype;

// construtor temporário
let F = function() {};
F.prototype = Vehicle.prototype;
Car.prototype = new F();

let bullet = new Train('Bullet train');
let train = new Train('Train');
let lamborghini = new Car();

Car.prototype.turnon = function() {
    console.log('The car is ready!')
}

bullet.turnon()
train.turnon()
lamborghini.turnon()