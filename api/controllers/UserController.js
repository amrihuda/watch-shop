const { user } = require('../models')
const { encryptPwd, decryptPwd } = require('../helpers/bcrypt')
const { Op } = require("sequelize")
const { generateToken } = require('../helpers/jsonwebtoken')

class UserController {
    static async getAll(req, res) {
        try {
            let users = await user.findAll()

            res.status(200).json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async create(req, res) {
        try {
            const { username, email, password } = req.body

            let result = await user.create({ username, email, password })

            res.status(201).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async login(req, res) {
        try {
            const { usernameOrEmail, password } = req.body

            let userFound = await user.findOne({ where: { [Op.or]: [{ username: usernameOrEmail }, { email: usernameOrEmail }] } })

            if (userFound) {
                if (decryptPwd(password, userFound.password)) {
                    let user_token = generateToken(userFound)
                    res.status(200).json({
                        user_token
                    })
                } else {
                    res.status(403).json({
                        message: `Invalid password!`
                    })
                }
            } else {
                res.status(404).json({
                    message: `User not found!`
                })
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id
            const { username, email, password } = req.body

            let result = await user.update({ username, email, password }, { where: { id } })

            res.status(201).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id

            let result = await user.destroy({ where: { id } })

            result === 1 ?
                res.status(200).json({
                    message: `User id ${id} deleted successfully!`
                }) :
                res.status(404).json({
                    message: `User id ${id} not deleted successfully!`
                })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async getById(req, res) {
        try {
            const id = +req.params.id
            
            let result = await user.findByPk(id)

            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = UserController