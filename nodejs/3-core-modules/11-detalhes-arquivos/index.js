const fs = require('fs')

// exibe os detalhes do arquivo
fs.stat('file.txt', (err, stats) => {
    if(err) {
        console.log(err)
        return
    } 
    console.log(stats.isFile()) // true
    console.log(stats.isDirectory()) // false
    console.log(stats.isSymbolicLink()) // false
    console.log(stats.ctime) // 2022-06-10T23:38:15.880Z
    console.log(stats.size) // 53
})