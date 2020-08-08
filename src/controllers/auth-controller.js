require('dotenv').config()
const { Author } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const response = require('../utils/response-template')
const secret = process.env.JWT_SECRET

class AuthController {
    static async signup (req, res) {
        req.body.password = await bcrypt.hash(req.body.password, 12)
        try {
            const author = await Author.create({...req.body})
            res.status(201).json(response('success', 'signup success', author))
        } catch (err) {
            res.status(500).json(response('fail', err))
        }
    }

    static async login (req, res) {
        const { username, password } = req.body
        try {
            const user = await Author.scope('withPassword').findOne({
                where: {
                    username: username
                },
            })

            if (user) {
                const compare = await bcrypt.compare(password, user.password)
                if (compare) {
                    const token = jwt.sign({ authorId: user.id }, secret, {
                        expiresIn: '7d'
                    })
                    res.status(200).json(response('success', 'login success', {token}))
                } else res.status(401).json(response('fail', 'wrong password'))
            } else res.status(404).json(response('fail', 'user not found'))
        } catch (err) {
            res.status(500).json(response('fail', err))
        }
    }

    static async currentUser (req, res) {
        const token = req.token
        const userId = jwt.decode(token, secret).authorId
        try {
            const user = await Author.findOne({
                where: {
                    id: userId
                }
            })
            if (user) res.status(200).json(response('success', 'current user', {user, token: token}))
            else res.status(401).json(response('fail', 'token not valid'))
        } catch (err) {
            res.status(500).json(response('fail', err))
        }
    }
}

module.exports = AuthController
