import express from 'express'
import routes from './routes.js'

const port = process.env.PORT || 3000
const app = express()

app.use('/', routes)

app.get('*', (req, res) => {
  res.send('Everthing Found')
})

app.listen(port || 3000, () => {console.log(`Server is running on port ${port}`)})
