const apiDog = require('../api/dog')

const express = require('express')

const routerDog = express.Router()

routerDog.get('/', apiDog.findAll)
routerDog.get('/:id', apiDog.findById)
routerDog.post('/', apiDog.create)
routerDog.put('/:id', apiDog.update)
routerDog.delete('/:id', apiDog.delete)

module.exports = routerDog