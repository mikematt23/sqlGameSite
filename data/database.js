const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  connectionLimit : 10, 
  connectionLimit:20,

})


module.exports = pool