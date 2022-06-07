const path = require('path')

// modulo externo que retorna a extensão do arquivo 
const extension = path.extname('arquivo.vue')

console.log(extension) // .vue