function teste(a) {
    return a;
}

console.log('Opa');


teste2 = new Function(
    'a',
    'return arguments'
);

console.log(teste2('Opa')[0]);

// que jeito estranho de criar função
// serviu pra atestar que uma função é um objeto