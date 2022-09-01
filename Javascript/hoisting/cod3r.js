// O QUE É HOISTING?
// Hoisting, em português elevação ou içamento, é o conceito que as variável que são declaradas
// no código, são na verdade declaradas no topo do código, ficam alocadas na memórica como undefined.
// É como se a declaração que fazemos no código fosse apenas uma atribuição de valor, pois a variável já existe.

function qualquer() {
    console.log(`a = ${a}`); // a = undefined
    var a = 3;
    console.log(`a = ${a}`); // a = 3
};

function qualquer2() {
    var b = undefined;
    console.log(`b = ${b}`); // b = undefined
    b = 5;
    console.log(`b = ${b}`) // b = 5
}

// Em AMBAS as funções, o comportamento é exatamente o mesmo
// a função qualquer2 retrata o que acontece na qualquer

qualquer();
qualquer2();

// No caso acima, o primeiro console.log na função qualquer, imprime a variável "a" com valor undefined
// pois o Javascript reconhece a variável, mas só atribui o valor de 3 a ela na linha 12

