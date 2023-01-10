const categoryRoute = require('express').Router()
const CategoryController = require('../controllers/CategoryController')
const { auth } = require('../middlewares/auth')

categoryRoute.get('/', CategoryController.getAll)
categoryRoute.post('/', auth, CategoryController.create)
categoryRoute.put('/:id', auth, CategoryController.update)
categoryRoute.delete('/:id', auth, CategoryController.delete)
categoryRoute.get('/category/:id', CategoryController.getById)

module.exports = categoryRoute