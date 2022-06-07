const fs = require('fs') // core module file system

fs.readFile('file.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err);
        return
    }

    console.log(data);
});

// err = erro
// data = conteúdo do file.txt