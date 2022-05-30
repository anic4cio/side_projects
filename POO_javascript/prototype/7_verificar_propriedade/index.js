function Car(carModel, price) {
    this.carModel = carModel;
    this.price = price;
    this.sunroof = true;
}

Car.prototype.color = 'black'; // cor padrão
Car.prototype.sunroof = false;

let fusca = new Car("VW", 10000);

// como sunroof tem na classe e também como prototype, ela dá true nas duas verificações
console.log(fusca.hasOwnProperty('sunroof')); // true
console.log(fusca.constructor.prototype.hasOwnProperty('sunroof')); // true

// color tem somente propriedade prototype
console.log(fusca.hasOwnProperty('color')); // false
console.log(fusca.constructor.prototype.hasOwnProperty('color')); // true

// no caso do price, não tem propriedade prototype
console.log(fusca.hasOwnProperty('price')); // true
console.log(fusca.constructor.prototype.hasOwnProperty('price')); // false
