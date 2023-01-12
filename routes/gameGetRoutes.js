const express = require('express')
const getActions = require('../controllers/getGameController')
const router = express.Router()

router.get('/startGame',getActions.startGame)

module.exports = router