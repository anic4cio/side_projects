class Depeloper {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return `The developer name is ${this.name} and is ${this.age} years old.`
    }
}

let rafa = new Depeloper('Rafaela', 27);

console.log(rafa); // Depeloper {name: 'Rafaela', age: 27}
console.log(rafa.sayMyName()); // The developer name is Rafaela and is 27 years old.


class Motorcycle {
    _bikeName: string;
    _engineType: string;
    _engineCC: number;
    _itIsCool: boolean;
    constructor(
        bikeName: string,
        engineType: string,
        engineCC: number,
        itIsCool: boolean
    ) {
        this._bikeName = bikeName;
        this._engineType = engineType;
        this._engineCC = engineCC;
        this._itIsCool = itIsCool;
    }
    
    get bikeName() {
        return `The model of the motorbike is ${this._bikeName}`
    }
    set bikeName(bikeName) {
        this._bikeName = bikeName;
    }

    get engineCC() {
        return this._engineCC 
    }
    set engineCC(engineCC) {
        if(engineCC > 50) {
            this._engineCC = engineCC;
        } else {
            throw new Error('Bro, WTF?')
        }
    }

    accelerate(speed: number): string {
        return speed > 100 ? `Yeah, nice speed!` : `Too low, mite!`
    }

    turnDirection(direction: 'left' | 'right'):string {
        return direction === 'left' ? `Bend to left!` : `Turning right now!`
    }
}


let xiste = new Motorcycle('XT1200', 'Bicilinder', 1200, true);
console.log(xiste.accelerate(190)); // 'Yeah, nice speed!'

let heritage = new  Motorcycle('Harley Heritage', 'Bicilinder', 1600, false);
console.log(heritage.turnDirection('right')); // Turning right now!