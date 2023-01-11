(async function showClients() {
  const database = require('./database.js')
  console.log('Getting all clients...')
  const clients = await database.getAllClients()
  return clients.forEach(client => console.log(client))
});

(async function addClient() {
  const database = require('./database.js')
  const id = 11
  const name = 'Nubia'
  const table = { id, name }
  await database.addClient(table)
  console.log(`Client ${JSON.stringify(table)} added`)
});

(async function updateClient() {
  const database = require('./database.js')
  const table = { id: 10, name: 'Angelica' }
  await database.updateClient(table)
  console.log(`Table ${JSON.stringify(table)} updated`)
});

(async function removeClient() {
  const database = require('./database.js')
  const id = 1
  await database.removeClient(id)
  console.log(`Client ${id} removed`)
});
