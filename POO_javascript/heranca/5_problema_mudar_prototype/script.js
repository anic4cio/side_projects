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
Car.prototype = Vehicle.prototype;

let bullet = new Train('Bullet train');
let train = new Train('Train');
let lamborghini = new Car();


// prototype chain tem esse problema, ao alterar uma classe de referência, ela também altera o prototype da classe original
Car.prototype.turnon = function() {
    console.log('the car in ready!')
}

console.log(bullet);
console.log(train);
console.log(lamborghini);

bullet.turnon()
train.turnon()
lamborghini.turnon()