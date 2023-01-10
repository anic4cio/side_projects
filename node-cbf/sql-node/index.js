(async () => {
  const database = require('./database.js')
  console.log('Insert new client')
  const name = 'Amayomi'
  const value = 28
  await database.addClient({ name, value })
  console.log('Get all clients')
  const clients = await database.getAllClients()
  console.log(clients)
})()
