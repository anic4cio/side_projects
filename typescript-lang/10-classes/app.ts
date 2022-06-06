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