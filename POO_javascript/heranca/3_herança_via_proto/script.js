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


Train.prototype = new Vehicle();
Car.prototype = new Vehicle();

let bullet = new Train('Bullet train');
let train = new Train('Train');
let lamborghini = new Car();

console.log(bullet);
console.log(train);
console.log(lamborghini);

bullet.turnon()
train.turnon()
lamborghini.turnon()