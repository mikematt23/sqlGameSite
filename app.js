const express = require('express')
const session = require('express-session')
const mysql2 = require('mysql2/promise')
const MySQlStore = require('express-mysql-session')(session)
const path = require('path')
const siteRoutes = require('./routes/siteGetRoutes')
const postRoutes = require('./routes/sitePostRoutes')


const app = express()

const options = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: "@SSassin55",
  database: 'game_site'
}

const connection = mysql2.createPool(options)
const sessionStore = new MySQlStore({},connection)

app.use(session({
  secret : "mine",
  cookie: {maxAge:30000},
  saveUninitialized : false,
  resave: false,
  store: sessionStore
}))

app.set('view engine',"ejs")
app.set("views", path.join(__dirname,'views'))

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.use(siteRoutes)
app.use(postRoutes)

app.listen(3000)