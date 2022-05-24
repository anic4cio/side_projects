function createCar(model, doors, aro, sunroof) {
    return {
        // Não é necessário o parâmetro ter o mesmo nome que a propriedade, porém é uma boa prática
        carModel: model,
        doors: doors,
        aro: aro,
        sunroof: sunroof,
        startCar: function() {
            console.log(`${this.carModel} is ready to go!`);
        },
        hasSunroof: function() {
            if(this.sunroof == true) {
                console.log(`${this.carModel} has sunroof!`);
            } else {
                console.log(`${this.carModel} hasn't sunroof!`);
            }
        }
    }
}

let subaru = createCar('Subaru', 2, 19, true)

console.log(subaru.carModel);
subaru.hasSunroof();
subaru.startCar();

let fusca = createCar('Fuscão', 2, 15, false);

console.log(fusca.carModel);
fusca.hasSunroof();
fusca.startCar();
