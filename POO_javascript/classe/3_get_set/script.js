class Motorbike {
    constructor(bikeModel, motor) {
        this.bikeModel = bikeModel;
        this.motor = motor;
    }
    turnOn() {
        console.log(`${this.bikeModel} is ready!`)
    }
    set editName(newName) {
        this.bikeModel = newName;
    }
    get bikeStats() {
        return `${this.bikeModel}. Engine: ${this.motor}CC`
    }
}

let blackbird = new Motorbike('Black Bird', 1100);

console.log(blackbird); // Motorbike { bikeModel: 'Black Bird', motor: 1100 }

// não entendi porque existe o médoto set, se podemos alterar o parâmetro primário
blackbird.editName = 'CBR 1100 XX Black Bird';
blackbird.bikeModel = 'CBR 1100 XX Black Bird';

console.log(blackbird); // Motorbike { bikeModel: 'CBR 1100 XX Black Bird', motor: 1100 }

console.log(blackbird.bikeStats); // CBR 1100 XX Black Bird. Engine: 1100CC
