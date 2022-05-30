let carEquipments = {
    price: 1000,
    color: 'red',
    rim: 18,
    sunroof: true
}

function Car(company){
    this.company = company;
}

Car.prototype = carEquipments;

let fusca = new Car('Fusca');

console.log(carEquipments.isPrototypeOf(fusca));

console.log(fusca.price);