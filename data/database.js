const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  connectionLimit:20,
  host: 'containers-us-west-139.railway.app',
  user:"root",
  password:"@SSassin55",
  database : "game_site"
})


module.exports = pool