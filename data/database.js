const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  connectionLimit:20,
  host: '127.0.0.1',
  user:"root",
  password:"@SSassin55",
  database : "game_site"
})


module.exports = pool