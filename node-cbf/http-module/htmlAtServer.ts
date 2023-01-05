import http from 'http'
import { IncomingMessage, ServerResponse } from 'http'
import fs from 'fs'

const port = process.env.PORT

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  fs.readFile('../../css-html-pages/age-verificator/modelo.html', (err, file) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(file)
    return res.end()
  })
})

server.listen(port || 3000, () => { console.log(`Server is running on port ${port}`) })
