'use strict'

const router = require('express').Router()
const {
  getVeiculos,
} = require('../controllers/veiculo_controller')

router.route('/veiculos')
  .get(getVeiculos)

module.exports = router
