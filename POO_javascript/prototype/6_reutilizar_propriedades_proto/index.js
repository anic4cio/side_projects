function Car(carModel, price) {
    this.carModel = carModel;
    this.price = price;
    this.sunroof = true;
}

Car.prototype.color = 'black'; // cor padrão
Car.prototype.sunroof = false;

let fusca = new Car("VW", 10000);

console.log(fusca); // Car { carModel: 'VW', price: 10000, sunroof: true }

delete fusca.sunroof; // quando eu deleto uma propriedade, onde tem uma prototype de mesmo nome. O valor da prototype passa a valer

console.log(fusca); // Car { carModel: 'VW', price: 10000 }
console.log(fusca.sunroof); // false
