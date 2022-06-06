function printName(obj: {name: string, age: number}) {
    console.log(`This person named ${obj.name} is ${obj.age} years old.`);
}

let person1 = {name: 'Vinicius', age: 27};

printName(person1); // This person named Vinicius is 27 years old.

let person2 = {name: "Amanda", age: 21};

printName(person2); // This person named Amanda is 21 years old.