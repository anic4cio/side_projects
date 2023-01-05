import express from 'express'

const routes = express()
const she = [
  { name: 'Sally', age: 25 },
  { name: 'Sandra', age: 19 },
  { name: 'Julia', age: 23 },
  { name: 'Maria', age: 29 },
  { name: 'Kamila', age: 34 },
]

routes.get('/', (req, res) => {
  res.json({ message: 'Hello person!' })
})

routes.get('/:nameit', (req, res) => {
  const name = req.params.nameit
  const person = she.find((i) => i.name === name)
  if (!person) {
    res.status(404).json({ error: 'Person not found!', searched: name })
  } else {
    res.status(200).json({ person })
  }
})

export default routes
