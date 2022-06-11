const path = require('path')

// path absoluto
console.log(path.resolve('arquivoQueEstaDentroDestaPasta.md'))

// formar path
const midFolder = 'pastaaleatoria'
const fileName = 'arquivotopsecret.svg'

const finalPath = path.join('/', 'windows', midFolder, fileName)

console.log(finalPath) // /windows/pastaaleatoria/arquivotopsecret.svg

// tutorial de como usar o join