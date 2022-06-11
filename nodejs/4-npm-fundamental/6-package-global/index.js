const _ = require('lodash')

const arr = [1, 2, 2, 5, 5, 6, 3, 3, 3]
const arr2 = [1, 2, 1, 2, 1, 2, 1, 2, 1]


// Esse método só remove os números iguais que estão lado a lado
console.log(_.sortedUniq(arr))
console.log(_.sortedUniq(arr2))

// no caso do lodash global é necessário dar um comando 'npm link lodash'
// no meu computador é preciso usar o sudo antes do npm

// a tag -g parece não ser recomendada pelo bash, é necessário usar --location=global

// npx cowsay "Hello, Vinicius!"
/*
 __________________
< Hello, Vinicius! >
 ------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
*/