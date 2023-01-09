const route = require('express').Router()

route.get('/api', (req, res) => {
    res.status(200).json({
        message: "Dashboard App API"
    })
})

modeule.exports = route