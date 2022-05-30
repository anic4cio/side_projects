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

Car.prototype.sunroof = true; // podemos adicionar propriedades a uma classe, o os objetos já criados já vão ter essa propriedade

Car.prototype.openSunroof = function() {
    console.log('The sunroof is open e and sun are beautiful!')
}

// o objeto bmw recebeu sunroof e openSunroof mesmo depois de já ter sido instanciada
console.log(bmw.sunroof); // true
bmw.openSunroof();
