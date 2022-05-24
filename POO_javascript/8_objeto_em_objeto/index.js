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
    },
    features: {
        chn: true,
        eyes: 'green',
        hair: 'brown',
        earring: false,
        glasses: false, 
        // Arrey dentro de objeto dentro de outro objeto
        wallet: ['money', 'documents', 'coins']
    }
}

console.log(person.features.hair)
console.log(person.features.wallet[1])
