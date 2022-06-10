const fstat = require('fs')
const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
    fstat.readFile(`msg.html`, function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
    })
})


server.listen(port, () => {
    console.log(`Server run at ${port} port`)
})
