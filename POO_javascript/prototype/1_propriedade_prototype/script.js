function abc() {
    console.log('teste');
}

abc(); // teste

console.log(typeof abc.prototype); // object

abc.prototype.teste = 1; // prototype de abc recebe propriedade teste com valor 1

console.log(abc.prototype);