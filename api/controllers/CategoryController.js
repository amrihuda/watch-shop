const { category } = require('../models')

class CategoryController {
    static async getAll(req, res) {
        try {
            let categories = await category.findAll()

            res.status(200).json(categories)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async create(req, res) {
        try {
            const { name } = req.body

            let result = await category.create({ name })

            res.status(201).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id
            const { name } = req.body

            let result = await category.update({ name }, { where: { id } })

            result[0] === 1 ?
                res.status(200).json({
                    message: `Category id ${id} updated successfully!`
                }) :
                res.status(404).json({
                    message: `Category id ${id} not updated successfully!`
                })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id

            let result = await category.destroy({ where: { id } })

            result === 1 ?
                res.status(200).json({
                    message: `Category id ${id} deleted successfully!`
                }) :
                res.status(404).json({
                    message: `Category id ${id} not deleted successfully!`
                })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async getById(req, res) {
        try {
            const id = +req.params.id

            let result = await category.findByPk(id)

            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = CategoryController