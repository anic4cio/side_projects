// O conceito de desestruturação é pegar um item de um objeto e atribuí-lo a uma variável já declarada ou não

let tamanho;

const thing = {
    name: 'Avla',
    available: true,
    length: 10,
    action() {
        console.log(`${this.name} - ${this.available} - ${this.length}`)
    }
}; // Um dos raros casos em que o ponto em vírgula é NECESSÁRIO

// Para atribuir o '10' a variável tamanho que já foi declarada, devemos fazer dessa forma:

({ length: tamanho } = thing)
console.log(tamanho); // 10

const { action } = thing;
console.log(action); // [Function: action]

const {name: nome} = thing;
console.log(nome); // Avla