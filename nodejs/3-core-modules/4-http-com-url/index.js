const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
  
    // req
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    // res
    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')

    if(!name) {
        res.end(`<h1> Enter your name:<h1><form method="GET"><input type="text" name="name"/><input type="submit" value="Submit">`)
    } else {
        res.end(`<h1>Welcome, ${name}!<h1>`)
    }
})

// função para ouvir a porta e retornar uma mensagem com a porta
server.listen(port, () => {
    console.log(`Server run at ${port} port`)
})
