
const db = require('../data/database')


async function insertUser(name,password,email,level,lives){
  data = [
    name,
    password,
    email,
    level,
    lives
  ]
  await db.query(`INSERT INTO users(userName,password,email,level,lives)VALUES(?)`,[data])
}

async function logIn(userName){
  let query = `SELECT * FROM users WHERE(userName = '${userName}' )`
  return await db.query(query)
}



module.exports = {
  insertUser: insertUser,
  logIn: logIn
}