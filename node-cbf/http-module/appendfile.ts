import http from 'http'
import fs from 'fs'

const port = process.env.PORT

const server = http.createServer((req, res) => {
  fs.appendFile('appended.txt', 'Okay, she got me, I\'ll do this, I want to!\n', (err) => {
    if (err) throw err
    console.log('Saved!')
    res.end()
  })
})

server.listen(port || 3000, () => { console.log(`Server is running on port ${port}`) })
