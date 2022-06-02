class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name} is tanking to you.`)
    }
}

class Engineer extends Person {
    constructor(name, age, spec) {
        super(name, age);
        this.work = 'Engineer';
        this.spec = spec;
    }
}

let john = new Engineer ('John', 34, 'Civil'); 

console.log(john); // Engineer { name: 'John', age: 34, work: 'Engineer', spec: 'Civil' }