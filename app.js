const express = require('express')
const { appendFile } = require('fs')
const path = require('path')
const siteRoutes = require('./routes/siteRoutes')

const app = express()

app.set('view engine',"ejs")
app.set("views", path.join(__dirname,'views'))

app.use(express.static('public'))
app.use(siteRoutes)

app.listen(3000)