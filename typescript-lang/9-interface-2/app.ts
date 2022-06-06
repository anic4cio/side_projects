interface config {
    name?: string;
    age?: number;
}

function createPerson(config: config): {name: string; age: number} {
    let person = { name: 'unknow', age: 0}

    if(config.name) {
        person.name = config.name;
    }
    if(config.age) {
        person.age = config.age
    }
    return person;
}

let john = createPerson({name: 'John'});
let someone = createPerson({age: 23});

console.log(john); // { age: 0, name: "John" }
console.log(someone); // { age: 23, name: "unknow"}