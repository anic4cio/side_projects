const person =  {
    personName: 'Vinicius',
    sayMyName() {
        console.log(`My name is ${this.personName}`)
    }
};

person.sayMyName()