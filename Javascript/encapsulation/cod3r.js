class Car {
    #model
    #motor
    constructor(model, motor) {
        this.#model = model
        this.#motor = motor
    }

    get model() {
        return this.#model

    }

    set motor(motor) {
        return this.#motor = motor
    }

    toJSON() {
        return {
            model: this.model,
            motor: this.#motor
        }
    }

    starts() {
        return `This car is model ${this.#model} and ${this.#motor} will start soon...`
    }
    
}

const carone = new Car('Aventador', 'V10 Biturbo');

carone.model = 'BMW M3 Coupé' // Essa é a parte do método set, essa linha não vai funcionar
carone.motor = 'line 6 cilinders'

console.log(carone.starts()) // This car is model Aventador and line 6 cilinders will start soon...
console.log(carone.model); // Aventador
console.log(carone.motor); // undefined
console.log(JSON.stringify(carone)); // {"model":"Aventador","motor":"line 6 cilinders"
console.log(Object.keys(carone)); // []
console.log(Object.values(carone)); // []