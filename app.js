const express = require('express')
const { appendFile } = require('fs')
const path = require('path')
const siteRoutes = require('./routes/siteGetRoutes')
const postRoutes = require('./routes/sitePostRoutes')

const app = express()

app.set('view engine',"ejs")
app.set("views", path.join(__dirname,'views'))

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(siteRoutes)
app.use(postRoutes)

app.listen(3000)