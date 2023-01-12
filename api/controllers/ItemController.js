const { item } = require('../models')
const fs = require('fs')

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
            const { name, desc, price, stock, categoryId, brandId } = req.body
            const userId = +req.userData.id

            let result = await item.create({ name, desc, price, stock, image: req.file?.filename, userId, categoryId, brandId })

            res.status(201).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id
            const { name, desc, price, stock, categoryId, brandId } = req.body
            const userId = +req.userData.id

            let result = 0
            if (req.file) {
                let oldImage = await item.findByPk(id)
                let file = './uploads/' + oldImage.image

                result = await item.update(
                    { name, desc, price, stock, image: req.file.filename, userId, categoryId, brandId },
                    { where: { id } }
                )
                fs.unlink(file, (err) => {
                    if (err) {
                        if (err.code === 'ENOENT') {
                            return;
                        }
                        throw err;
                    }
                })
            } else {
                result = await item.update(
                    { name, desc, price, stock, userId, categoryId, brandId },
                    { where: { id } }
                )
            }

            result[0] === 1 ?
                res.status(200).json({
                    message: `Item id ${id} updated successfully!`
                }) :
                res.status(404).json({
                    message: `Item id ${id} not updated successfully!`
                })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id
            let oldImage = await item.findByPk(id)
            let file = './uploads/' + oldImage.image

            let result = await item.destroy({ where: { id } })
            fs.unlink(file, (err) => {
                if (err) {
                    if (err.code === 'ENOENT') {
                        return;
                    }
                    throw err;
                }
            })

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

            let result = await item.findByPk(id, { include: { all: true } })

            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = ItemController