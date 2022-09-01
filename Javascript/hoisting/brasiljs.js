console.log(motorbikeDetails('XT660', 660)); // The bike model is XT660 and have 660CC motor!
console.log(motorbikeDetails); // [Function: motorbikeDetails]

function motorbikeDetails(model, cc) {
    return `The bike model is ${model} and have ${cc}CC motor!`
}

// HOISTING - IÇAMENTO
// Mesmo antes de declarar uma variável ou uma função, um espaço na memória já é alocado

let dream

console.log(dream); // undefined

dream = 'To be rich';

console.log(dream); // To be rich

// Mesmo com a variável sendo declarada sem valor, ela já é alocada na memórica com valor undefined

console.log(variavelNaoDeclarada); // ReferenceError: variavelNaoDeclarada is not defined
