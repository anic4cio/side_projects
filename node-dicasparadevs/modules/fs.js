const fs = require('fs')
const path = require('path')

// criar uma pasta
fs.mkdir(path.join(__dirname, '/test'), (err) => {
    if(err) {
        return console.log(`Error: ${err}`);
    }

    console.log('Create directory sucessfully!');
})
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// criar um arquivo dentro da pasta criada
fs.writeFile(path.join(__dirname, '/test', 'test.md'), '# *Hellow, node!*\n', (err) => {
    if(err) {
        return console.log(err)
    }

    console.log('Create file and written in it successfully!');
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // adiciona conteúdo a um arquivo
    fs.appendFile(path.join(__dirname, '/test', 'test.md'), '## Hello, NODEJS!', (err) => {
        if(err) {
            return console.log(err)
        }
    
        console.log('New content has been written at archive!')
    })
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // ler arquivo
    fs.readFile(path.join(__dirname, '/test', 'test.md'), 'utf8', (err, data) => {
        if(err) {
            return console.log(err)
        }
    
        console.log(data)
    })

})


