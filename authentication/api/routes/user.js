const userRoute = require('express').Router()
const UserController = require('../controllers/UserController')

userRoute.get('/', UserController.getAll)
userRoute.post('/', UserController.create)
userRoute.post('/login', UserController.login)
userRoute.put('/:id', UserController.update)
userRoute.delete('/:id', UserController.delete)
userRoute.get('/user/:id', UserController.getById)

module.exports = userRoute