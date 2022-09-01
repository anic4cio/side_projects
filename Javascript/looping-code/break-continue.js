for(let i = 0; i <= 10; i++) {
    console.log(i);

    if(i === 5) {
        break;
    }
}

console.log('End of for');

// O break é um conceito bem simples, ele finaliza a iteração naquela linha

let x = 10;

while(x < 100) {

    x += 10;

    if(x === 40 || x === 90) {
        console.log('continue')
        continue;
    }

    console.log(`Iteration is running - ${x}`);
}

// Já o continue, é um pouco contraintuitivo. Ele encerra aquele laço e começa o próximo
// Então, tudo que vem abaixo do continue, não vai ser executado naquele laço específico

for(let y = 1; y < 2; y++) {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    continue;
    console.log(5);
    console.log(6);
}

// Esse laço só repete uma vez e printa números de 1 a 4
// 5 e 6 não é printado