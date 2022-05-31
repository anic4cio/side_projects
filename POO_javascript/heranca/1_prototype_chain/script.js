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

Train.prototype = new Vehicle(); // essa sintaxe faz uma classe herdar o prototype da outra

let bullet = new Train('Fast train!');

console.log(bullet);

bullet.turnon();