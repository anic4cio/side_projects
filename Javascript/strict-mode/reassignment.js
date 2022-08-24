"use strict"

// Essa forma, a reatribuição de uma nova função funciona normalmente.

class Motorcycle {
    cilinder() {
        return 500
    }
}

let bike = new Motorcycle();

console.log(bike.cilinder()); // 500

bike.cilinder = function cilinder() {
    return 660
};

console.log(bike.cilinder()); // 660

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Dessa forma, onde a função nota é do tipo get. Não é possível reatribuir e a tentativa gera um erro no modo estrito

class Aluno {
    get nota() {
        return 6
    }
}

let aluno = new Aluno();

aluno.nota = 10;

// Sem o modo estrito, simplesmente printa o 6, sem retornar erro
// Com o modo estrido > TypeError: Cannot set property nota of #<Aluno> which has only a getter
console.log(aluno.nota); // 6