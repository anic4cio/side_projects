const connect = async () => {
  if (global.con && global.con.state !== 'disconnected')
    return global.con
  const mysql = require('mysql2/promise');
  const connection = mysql.createConnection('mysql://root:root@localhost:3306')
  console.log('Connected!')
  global.con = connection
  return connection
}

const getAllClients = async () => {
  const con = await connect()
  const [rows] = await con.execute('SELECT * FROM clients_node')
  return await rows
}

const addClient = async (client) => {
  const con = await connect()
  const sql = 'INSERT INTO client_node (name, value) VALUES (?,?)'
  const values = [client.name, client.value]
  await con.query(sql, values)
}

const updateClient = async (id, client) => {
  const con = await connect()
  const sql = 'UPDATE client_node SET name=?, value=? WHERE id=?'
  const values = [client.name, client.value, id]
  await con.query(sql, values)
}

const removeClient = async (id) => {
  const con = await connect()
  const sql = 'DELETE FROM client_node WHERE id=?'
  const values = [id]
  await con.query(sql, values)
}

module.exports = {
  getAllClients,
  addClient,
  updateClient,
  removeClient
}
