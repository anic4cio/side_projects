// o ./ indica que é um modulo interno
// podemos suprimir a extensão do arquivo, neste caso .js
const meuModulo = require('./meu_modulo')

/** atribuindo a função do modulo à uma constante sem parênteses 
pois se não estaria chamando a função */
const soma = meuModulo.soma

soma(2, 5) // 7
soma(9, 3) // 12