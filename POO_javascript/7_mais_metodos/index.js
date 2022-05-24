let person = {
    name: 'Vinicius',
    age: 23,
    getName: function() {
        console.log(`${this.name} is the name`);
    },
    setName: function(newName) {
        this.name = newName;
    },
    // No ES6 não existe necessidade da palavra "function"
    birthday() {
        this.age += 1;
    },
    sayMyBirth() {
        console.log(`My name is ${this.name} and I'm ${this.age}`)
    },
    canDrive() {
        if(this.age > 17) {
            console.log(`${this.name} can drive!`)
        } else {
            console.log(`${this.name} can't drive!`)
        }
    }
}

person.getName();
person.setName('Matheus');
person.getName();

console.log(`Current age: ${person.age}`);
person.birthday();
person.birthday();
console.log(`Current age: ${person.age}`);

person.sayMyBirth();

person.canDrive();

let calculator = {
    result: 0,
    sum(a, b) {
        this.result = a + b
    },
    subtraction(a, b) {
        this.result = a - b
    },
    division(a, b) {
        this.result = a / b
    },
    multiplication(a, b) {
        this.result = a * b
    }
}

calculator.subtraction(200, 50)
console.log(calculator.result)
