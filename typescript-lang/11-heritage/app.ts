class Developer {
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

class Engineer extends Developer {
    type: string;
    constructor(name: string, age: number, type: string) {
        super(name, age);
        this.type = type;
    }
    becomeTo() {
        console.log(`The Developer become a engineer`);
    }
}

let rafa = new Engineer('Rafaela', 27, 'worker');

console.log(rafa); // Engineer {  age: 27, name: 'Rafaela', type: "worker"}
console.log(rafa.sayMyName()); // The developer name is Rafaela and is 27 years old.