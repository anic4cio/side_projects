import http from 'http'
import url from 'url'

const port = 3000
const host = '127.0.0.1'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  const param = url.parse(req.url!, true).query
  res.write('<h1>' + param.name + '</h1>')
  res.write('<h1>' + param.coursera + '</h1>')
  res.end()
})

server.listen(port, host, () => { console.log(`Server is running on port ${port}`) })

