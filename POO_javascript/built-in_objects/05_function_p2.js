function teste(a) {
    return a;
}

console.log(teste.length); // retorna um number com a quantidade de argumentos da função
console.log(teste.toString());

console.log(teste instanceof Function);
console.log(Function instanceof Object);