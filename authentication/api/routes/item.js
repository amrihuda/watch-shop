const itemRoute = require('express').Router()
const ItemController = require('../controllers/ItemController')

itemRoute.get('/', ItemController.getAll)
itemRoute.post('/', ItemController.create)
itemRoute.put('/:id', ItemController.update)
itemRoute.delete('/:id', ItemController.delete)
itemRoute.get('/item/:id', ItemController.getById)

module.exports = itemRoute