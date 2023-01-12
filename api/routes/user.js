const userRoute = require('express').Router()
const UserController = require('../controllers/UserController')
const { auth } = require('../middlewares/auth')
const upload = require('../middlewares/multer')

userRoute.get('/', UserController.getAll)
userRoute.post('/', auth, UserController.create)
userRoute.post('/login', UserController.login)
userRoute.put('/:id', auth, upload('user').single('image'), UserController.update)
userRoute.delete('/:id', auth, UserController.delete)
userRoute.get('/user/:id', UserController.getById)

module.exports = userRoute