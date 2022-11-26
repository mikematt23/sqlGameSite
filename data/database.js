const mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit:20,
  host: 'database-1.crinenxjld2c.us-east-1.rds.amazonaws.com',
  user:"admin",
 
})


module.exports = pool