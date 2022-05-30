function Car(company, value) {
    this.company = company,
    this.value = value
}

Car.prototype.wheel = 4; // o prototype de Car recebe uma propriedade wheel com valor 4

Car.prototype.turnon = function() { // prototype de Car recebe uma função para ligar
    console.log('The car is on')
}

let bmw = new Car('BMW', 10000);

console.log(bmw);

console.log(bmw.wheel); // única forma de acessar a propriedade prototype de bmw

bmw.turnon(); // chamando método prototype

