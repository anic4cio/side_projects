import * as http from 'http'
import { EventEmitter } from 'events'
const eventEmitter = new EventEmitter()

const port = 3000
const connectHandler = (point: string) => console.log(`Connection ${point}`)

eventEmitter.on('connection', () => connectHandler('start'))
eventEmitter.on('close', () => connectHandler('end'))

const callback = () => console.log(`Server running on port ${port}`)

const server = http.createServer((req, res) => {
  eventEmitter.emit('connection')
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write('<h1 style="background-color: black; color: red">Trail or naked</h1>')
  eventEmitter.emit('close')
  res.end()
})

server.listen(port, callback)
