const { brand } = require('../models')
const fs = require('fs')
class BrandController {
    static async getAll(req, res) {
        try {
            let brands = await brand.findAll()

            res.status(200).json(brands)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async create(req, res) {
        try {
            const { name, desc } = req.body

            let result = await brand.create({ name, desc, image: req.file.filename })

            res.status(201).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id
            const { name, desc } = req.body

            let result = 0
            if (req.file) {
                let oldImage = await brand.findByPk(id)
                let file = './uploads/' + oldImage.image

                result = await brand.update({ name, desc, image: req.file.filename }, { where: { id } })
                fs.unlink(file, (err) => {
                    if (err) {
                        if (err.code === 'ENOENT') {
                            return;
                        }
                        throw err;
                    }
                })
            } else {
                result = await brand.update({ name, desc }, { where: { id } })
            }

            result[0] === 1 ?
                res.status(200).json({
                    message: `Brand id ${id} updated successfully!`
                }) :
                res.status(404).json({
                    message: `Brand id ${id} not updated successfully!`
                })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id
            let oldImage = await brand.findByPk(id)
            let file = './uploads/' + oldImage.image
            
            let result = await brand.destroy({ where: { id } })
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

            let result = await brand.findByPk(id)

            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = BrandController