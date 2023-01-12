const brandRoute = require('express').Router()
const BrandController = require('../controllers/BrandController')
const { auth } = require('../middlewares/auth')
const upload = require('../middlewares/multer')

brandRoute.get('/', BrandController.getAll)
brandRoute.post('/', auth, upload('brand').single('image'), BrandController.create)
brandRoute.put('/:id', auth, upload('brand').single('image'), BrandController.update)
brandRoute.delete('/:id', auth, BrandController.delete)
brandRoute.get('/brand/:id', BrandController.getById)

module.exports = brandRoute