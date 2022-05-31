function extend(Son, Father) {
    let F = function() {};
    F.prototype = Father.prototype;
    Son.prototype = new F();
}


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

// construtor temporário por função
extend(Train, Vehicle);
extend(Car, Vehicle);

let bullet = new Train('Bullet train');
let train = new Train('Train');
let lamborghini = new Car();

Car.prototype.turnon = function() {
    console.log('The car is ready!')
}

Train.prototype.turnon = function() {
    console.log('The train is ready!')
}



bullet.turnon()
train.turnon()
lamborghini.turnon()