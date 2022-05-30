function Car(carModel, price) {
    this.carModel = carModel;
    this.price = price;
}

Car.prototype.color = 'black'; 
Car.prototype.sunroof = false;

let fusca = new Car("VW", 10000);

if(fusca.hasOwnProperty('price')) {
    console.log('Object property');
} else if(fusca.constructor.prototype.hasOwnProperty('price')) {
    console.log('Prototype property')
} else {
    console.log('Property does not exists')
}