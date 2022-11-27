const express = require('express')
const posts = require('../controllers/postControllers')

const router = express.Router()

router.post('/signUp', posts.userSignUp)

router.post('/logIn',(req,res)=>{
  
})

module.exports = router