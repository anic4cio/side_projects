let person = { 
    name: 'Vinicius'
}

person.age = 29;

person.speak = function() {
    console.log(`${this.name}, say hello!`);
}

console.log(person);
person.speak();

delete person.age;
delete person.speak;

console.log(person);

// DELETAR UMA PROPRIEDA OU MÉTODO NÃO É UMA BOA PRÁTICA