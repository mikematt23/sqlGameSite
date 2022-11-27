const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  connectionLimit:20,
  host: 'localhost',
 
})


module.exports = pool