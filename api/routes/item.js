const itemRoute = require('express').Router()
const ItemController = require('../controllers/ItemController')
const { auth } = require('../middlewares/auth')

itemRoute.get('/', ItemController.getAll)
itemRoute.post('/', auth, upload('item').single('image'), ItemController.create)
itemRoute.put('/:id', auth, ItemController.update)
itemRoute.delete('/:id', auth, ItemController.delete)
itemRoute.get('/item/:id', ItemController.getById)

module.exports = itemRoute