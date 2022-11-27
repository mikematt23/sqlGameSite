const userActions = require('../models/usermodels')
const db = require('../data/database')

async function userSignUp(req,res){
  const name = req.body.userName
  const password = req.body.password
  const email = req.body.email
  const level = 0
  const lives = 4
  await userActions.insertUser(name,password,email,level,lives)
  res.redirect('logIn')
}


module.exports = {
  userSignUp: userSignUp
}