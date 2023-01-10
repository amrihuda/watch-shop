const itemRoute = require('express').Router()
const ItemController = require('../controllers/ItemController')
const { auth } = require('../middlewares/auth')

itemRoute.get('/', auth, ItemController.getAll)
itemRoute.post('/', auth, ItemController.create)
itemRoute.put('/:id', ItemController.update)
itemRoute.delete('/:id', ItemController.delete)
itemRoute.get('/item/:id', ItemController.getById)

module.exports = itemRoute