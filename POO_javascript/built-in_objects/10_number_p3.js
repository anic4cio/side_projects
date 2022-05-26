let f1 = 12.3846451;

console.log(f1.toFixed(3)); // 12.385
// retorna o número formatado com a quantidade de números após a vírgula como parâmetro

console.log(f1.toPrecision(3)); // 12.4
// faz um arredondamento de acordo com o valor flutuante, o parâmetro é a quantidade total de algarismos

console.log(f1.toExponential())
// exponenciação

let exp = 9;
console.log(exp.toExponential(2));