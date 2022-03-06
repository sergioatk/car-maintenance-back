const express = require('express')
const router = express.Router()
const { getCars } = require('../controllers/cars')

router.get('/', getCars)

module.exports = router