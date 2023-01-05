import express from 'express'
import { Request, Response } from 'express'

const port = process.env.PORT
const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Root path or home page')
})

app.get('/channel', (req, res) => {
  res.json({channel:  'Running on channel path' })
})

app.listen(port || 3000, () => { console.log(`Server is running on port ${port}`) })
