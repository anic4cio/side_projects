function square(num) {
    var stringNum = num.toString();
    var len = stringNum.length;
    var index = 0;
    var finalNumber = '';
    while (index < len) {
        var raiz = parseInt(stringNum.charAt(index));
        index += 1;
        var raiz = raiz * raiz; 
        var finalNumber = finalNumber + raiz.toString();
    }
    return finalNumber
}
console.log(square(3514))
console.log(square(94571))
console.log(square(24))
console.log(square(745821698))

// Split que separa os itens de uma variável numérica
let list = '435879';
console.log(list.split(''))