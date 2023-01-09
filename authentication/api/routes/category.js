const categoryRoute = require('express').Router()
const CategoryController = require('../controllers/CategoryController')

categoryRoute.get('/', CategoryController.getAll)
categoryRoute.post('/', CategoryController.create)
categoryRoute.put('/:id', CategoryController.update)
categoryRoute.delete('/:id', CategoryController.delete)
categoryRoute.get('/category/:id', CategoryController.getById)

module.exports = categoryRoute