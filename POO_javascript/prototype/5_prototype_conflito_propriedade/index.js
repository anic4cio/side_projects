function Car(carModel, price) {
    this.carModel = carModel;
    this.price = price;
    this.wheel = 'chrome';
}

Car.prototype.color = 'black'; // cor padrão

let fusca = new Car("VW", 10000);

console.log(fusca.color); // black

fusca.color = 'pink'; // propriedade color recebe o valor pink

console.log(fusca.color); // pink


Car.prototype.wheel = 'silver'; // a propriedade wheel prevalece com o valor da classe, ou seja, chrome

console.log(fusca.wheel); // chrome

console.log(fusca);