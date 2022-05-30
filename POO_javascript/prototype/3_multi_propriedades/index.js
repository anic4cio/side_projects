function Car(carModel, price) {
    this.carModel = carModel,
    this.price = price
}

// adicionando múltiplas propriedades à um objeto
Car.prototype = {
    wheel: 4,
    color: 'black',
    turbo: true,
    turnon() {
        console.log(`The ${this.carModel} is on`)
    }
}


let bmw = new Car('BMW', 10000);

console.log(bmw); // { carModel: 'BMW', price: 10000 }

console.log(bmw.wheel); // 4

console.log(bmw.color); // black

console.log(bmw.turbo); // true

bmw.turnon(); // The BMW is on

