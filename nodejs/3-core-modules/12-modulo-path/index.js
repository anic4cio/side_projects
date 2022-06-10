const path = require('path')

const path1 = '/media/anic4cio/D2A8249BA8247FD9/Development/Telegram Desktop/NodeJs/Slides-do-curso-de-Node.pdf'
// nome do diretório
console.log(path.dirname(path1)); // /media/anic4cio/D2A8249BA8247FD9/Development/Telegram Desktop/NodeJs

// nome do arquivo
console.log(path.basename(path1)); // Slides-do-curso-de-Node.pdf

// extensão
console.log(path.extname(path1)); // .pdf