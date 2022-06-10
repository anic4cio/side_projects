const fstat = require('fs')
const http = require('http')
const url = require('url')
const port = 3000

const server = http.createServer((req, res) => {

    const query = url.parse(req.url, true)
    const filename = query.pathname.substring(1)

    if(filename.includes('html')) {

        if(fstat.existsSync(filename)) {
            fstat.readFile(filename, function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                return res.end()
            })
        } else {
            fstat.readFile('404.html', function(err, data) {
                res.writeHead(404, { 'Content-Type': 'text/html' })
                res.write(data)
                return res.end()
            })
        }
    } 
})


server.listen(port, () => {
    console.log(`Server run at ${port} port`)
})
