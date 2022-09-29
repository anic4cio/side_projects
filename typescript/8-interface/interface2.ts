interface config {
    name?: string;
    age?: number;
}

function createPerson(config: config): {name: string; age: number} {
    let person = { name: 'unknown', age: 0}

    if(config.name) {
        person.name = config.name;
    }
    if(config.age) {
        person.age = config.age
    }
    return person;
}

let john = createPerson({name: 'John'});
console.log(john); // { name: 'John', age: 0 }

let someone = createPerson({age: 18});
console.log(someone); // { name: 'unknow', age: 0}



let fullKarin = {name: 'Karin', age: 25}; 
console.log(createPerson(fullKarin)); // { name: 'Karin', age: 25 }

// personInfo.age! means that argument IS NOT possibly undefined
// Because name? and age? is optional
const checkPersonsAge = (personInfo: config) => {
    if(personInfo.age! > 21) {
        return `You're major aged!`
    } else {
        return `You are minor aged!`
    }
}

console.log(checkPersonsAge(fullKarin)); // You're major aged!
