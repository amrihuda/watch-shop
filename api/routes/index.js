const route = require('express').Router()

route.get('/api', (req, res) => {
    res.status(200).json({
        message: "Dashboard App API"
    })
})

const userRoutes = require('./user')
const itemRoutes = require('./item')
const brandRoutes = require('./brand')
const categoryRoutes = require('./category')

route.use('/api/users', userRoutes)
route.use('/api/items', itemRoutes)
route.use('/api/brands', brandRoutes)
route.use('/api/categories', categoryRoutes)

module.exports = route