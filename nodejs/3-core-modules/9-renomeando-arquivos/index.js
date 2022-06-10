const fs = require('fs')

const oldFile = 'arquivo.txt'
const newFile = 'file.txt'

// rename é autoexplicativo
fs.rename(oldFile, newFile, function(err) {
    
    // printa o erro caso ocorra
    if(err) {
        console.log(err)
        return
    }

    console.log(`File ${oldFile} was renamed to ${newFile}.`)
})