const { item } = require('../models')
const { verifyToken } = require('../helpers/jsonwebtoken')

class ItemController {
    static async getAll(req, res) {
        try {
            let items = await item.findAll({ include: { all: true } })

            res.status(200).json(items)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async create(req, res) {
        try {
            const { name, desc, price, stock, image, categoryId, brandId } = req.body
            const userId = +req.userData.id

            let result = await item.create({ name, desc, price, stock, image, userId, categoryId, brandId })

            res.status(201).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id
            const { name, desc, price, stock, image, userId, categoryId, brandId } = req.body
            
            let result = await item.update(
                { name, desc, price, stock, image, userId, categoryId, brandId },
                { where: { id } }
            )

            res.status(201).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id
            
            let result = await item.destroy({ where: { id } })

            result === 1 ?
                res.status(200).json({
                    message: `Item id ${id} deleted successfully!`
                }) :
                res.status(404).json({
                    message: `Item id ${id} not deleted successfully!`
                })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async getById(req, res) {
        try {
            const id = +req.params.id
            
            let result = await item.findByPk(id)

            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = ItemController