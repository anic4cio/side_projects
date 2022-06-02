let Person = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    humanName() {
        return `The person name is ${this.name}`
    }
}

let amanda = new Person('Amanda', 27);

console.log(typeof Person); // function

console.log(amanda); // { name: 'Amanda', age: 27 }

console.log(amanda.humanName()); // The person name is Amanda