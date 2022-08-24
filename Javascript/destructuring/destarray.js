// Desestruturação também pode ser feita com arrays
// Existe uma lista sintática super esquizofrênica em relação ao array (vírgulas nos arrays)

// Diferente do objeto, no array, o item pode ser declarado com qualquer nome e seu valor será de arcordo com sua posição

const vests = ['pants', 'shoes', 'watch', 'hat', 'shirt', 'coat', 'glass'];

const [at, hj] = vests;

console.log(at); // pants
console.log(hj); // shoes

const [,,,,, tx, pf] = vests;

console.log(tx); // coat
console.log(pf); // glass

const [,,,yp,,,] = vests;
console.log(yp); // hat

const [tr, sh, ...re] = vests;
console.log(tr, sh, re); // pants shoes [ 'watch', 'hat', 'shirt', 'coat', 'glass' ]
