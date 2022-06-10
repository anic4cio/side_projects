const fs = require('fs')

fs.unlink('file.txt', function(err) {

    // se houver erro, vai printar o erro
    if(err) {
        console.log(err)
        return
    }

    // se tiver removido com sucesso
    console.log('File removed!')

})