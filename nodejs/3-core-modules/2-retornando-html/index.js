const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {

    res.statusCode = 200

    // usado para setar o conteúdo que var ser exibido, texto, arquivo html, etc
    res.setHeader('Contenty-Type', 'text/html')
    res.end(`<h1 style="color: red;">Hello, it's my first HTML server<h1>`)

})

// função para ouvir a porta e retornar uma mensagem com a porta
server.listen(port, () => {
    console.log(`Server run at ${port} port`)
})
