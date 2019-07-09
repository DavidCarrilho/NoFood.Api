'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/produto-controller')

// Instanciando uma instancia da classe controller
let _ctrl = new controller()

router.get('/', _ctrl.get) // Traz todos os registros
router.get('/:id', _ctrl.getById) // Traz só um registro
router.post('/', _ctrl.post)
router.put('/:id', _ctrl.put)
router.delete('/:id', _ctrl.delete)

module.exports = router