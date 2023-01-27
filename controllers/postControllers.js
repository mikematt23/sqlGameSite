const userActions = require('../models/usermodels')
const bcrypt = require('bcryptjs')
const gameActions = require('../models/gameActions')

async function userSignUp(req,res){
  console.log(req.body)
  const name = req.body.userName
  const password = req.body.password
  const email = req.body.email
  const level = 0
  const lives = 4
  
  const hashedPassword = await bcrypt.hash(password,3)
  let userCheck = await userActions.logIn(name)
  console.log(userCheck)
  if(userCheck[0][0]){
   return res.render('404',{m: "You already have an account please sing in"})
  }

  await userActions.insertUser(name,hashedPassword,email,level,lives)
  res.redirect('/logIn')
}
//
async function logIn (req,res){
  const name = req.body.userName
  const password = req.body.password
  const user = await userActions.logIn(name)
  if(user[0].length === 0){
    return res.render('404',{m : "User name or password is not correct"})
  }
  if(user){
    const hash = user[0][0].password
    const isUser = await bcrypt.compare(password,hash);
    if(!isUser){
       res.render('404',{m: "Please check your information and try again"})
    }

    res.locals.isAuth = true
    req.session.user = user[0][0]
    req.session.save(function(){
      res.render('user',{user: user[0][0]})
    })
   
  }
}
//
function logOut (req,res){
  res.locals.isAuth = false
  res.redirect('/')
}



module.exports = {
  userSignUp: userSignUp,
  logIn: logIn,
  logOut: logOut
}