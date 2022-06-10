const fstat = require('fs')
const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {

    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    if(!name) {

        // lê o arquivo index.html na mesma pasta
        fstat.readFile('index.html', function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    } else {
        fstat.writeFile('file.txt', name, function(err, data) {

            // o código 302 é redirect, de direcina para um caminho
            res.writeHead(302, {
                Location: '/',
            })

            // o res.end() finaliza a instrução 
            return res.end()
        })
    }
})


server.listen(port, () => {
    console.log(`Server run at ${port} port`)
})
