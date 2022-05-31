function Vehicle() {
    this.frame = 'steel';
    this.turnon = function() {
        console.log('hihihi vrummm')
    }
}

function Train(type) {
    this.type = type;
    this.wagon = 60;
}

function Car() {
    this.tire = 4;
}

Train.prototype = new Vehicle(); // essa sintaxe faz uma classe herdar o prototype da outra
Car.prototype = new Vehicle();

let bullet = new Train('Bullet train');
let lamborghini = new Car();


console.log(bullet instanceof Train); // true
console.log(lamborghini instanceof Car); // true

console.log(bullet instanceof Vehicle); // true
console.log(lamborghini instanceof Vehicle); // true

console.log(bullet instanceof Object); // true
console.log(lamborghini instanceof Object); // true



