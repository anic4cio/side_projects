const connect = async () => {
  if (global.wire && global.wire.state !== 'disconnected')
    return global.wire
  const mysql = require('mysql2/promise');
  const connection = mysql.createConnection('mysql://root:2345@127.0.0.1:3306/twister')
  console.log('Connected!')
  global.wire = connection
  return connection
}

const getAllClients = async () => {
  const connection = await connect()
  const [rows] = await connection.execute('SELECT * FROM clients')
  connection.close()
  return rows
}

const addClient = async (client) => {
  const { id, name } = client
  const connection = await connect()
  const sql = 'INSERT INTO clients (id, name) VALUES (?,?)'
  const values = [id, name]
  await connection.query(sql, values)
  connection.close()
}

const updateClient = async (client) => {
  const { id, name } = client
  const connection = await connect()
  const sql = 'UPDATE clients SET id=?, name=? WHERE id=?'
  const values = [id, name, id]
  await connection.query(sql, values)
  connection.close()
}

const removeClient = async (id) => {
  const connection = await connect()
  const sql = 'DELETE FROM clients WHERE id=?'
  const values = [id]
  connection.close()
  await connection.query(sql, values)
  connection.close()
}

module.exports = {
  getAllClients,
  addClient,
  updateClient,
  removeClient
}
