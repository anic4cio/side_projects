const path = require('path')

// apenas o nome do arquivo atual
console.log(path.basename(__filename));

// apenas o nome do diretório atual
console.log(path.dirname(__filename));

// apenas a extensão do arquivo
console.log(path.extname(__filename));

// criar objeto com as informações do Path
console.log(path.parse(__filename));

// permite juntar ou criar caminhos de arquivos
console.log(path.join(__dirname, 'novopath', 'arquivo.mp4'));