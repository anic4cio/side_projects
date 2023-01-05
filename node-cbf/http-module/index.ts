import http from 'http'

const port = 3000
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('Server is running\n')
  res.end()
}).listen(port )

console.log(`Server is running on port ${port}`);