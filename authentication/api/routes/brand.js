const brandRoute = require('express').Router()
const BrandController = require('../controllers/BrandController')

brandRoute.get('/', BrandController.getAll)
brandRoute.post('/', BrandController.create)
brandRoute.put('/:id', BrandController.update)
brandRoute.delete('/:id', BrandController.delete)
brandRoute.get('/brand/:id', BrandController.getById)

module.exports = brandRoute