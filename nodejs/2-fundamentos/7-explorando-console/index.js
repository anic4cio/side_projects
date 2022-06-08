// printando mais de um valor no console
const x = 19
const y = 'Vinicius da mata'
const z = [1, 3]

console.log(x, y, z)

// count insere automaticamente um : seguido de uma contagem do número de vez que foi impresso. Geramente usado em repetições
console.count(`O valor de x é: ${x}, contagem`) // O valor de x é: 19, contagem: 1
console.count(`O valor de x é: ${x}, contagem`) // O valor de x é: 19, contagem: 2
console.count(`O valor de x é: ${x}, contagem`) // O valor de x é: 19, contagem: 3

// variável entre string
console.log('O nome é %s, ele é desenvolvedor, tem %s anos', y, x) // %s é o valor da variavel

//  limpar console, tempo em milissegundos
// depois de 2 segundos, executa a ação
setTimeout(() => {  
    console.log('aaaaaaaaaaaa')
}, 2000)

setTimeout(() => {
    console.clear()
}, 3500)