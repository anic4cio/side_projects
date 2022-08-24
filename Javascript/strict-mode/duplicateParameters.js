"use strict"

// O Javascript permite rodar uma função com parâmetros duplicados e se comporta de uma forma estranha

function duplicateParamsWithoutStrictMode(a, a, b) {
    let total = a + a + b
    return total
}

// O segundo "a" substitui o primero, sendo dois "a" valendo 2. Totalmente esquizofrênico!

console.log(duplicateParamsWithoutStrictMode(1, 2, 3)); // 7


// A mesma função com o modo estrito, retorna esse erro abaixo

// SyntaxError: Duplicate parameter name not allowed in this context