const { Author, Post, Comment } = require('../models')
const Controller = require('./controllers')
const response = require('../utils/response-template')
const bcrypt = require('bcrypt')

class AuthorController {    
    static async index(req, res) {
        try {
            const authors = await Author.findAll({
                include: [
                    { model: Post },
                    { model: Comment }
                ]
            })
            res.json(response('success', 'Authors fetched', authors))
        } catch (err) {
            res.status(500).json(response('fail', fail))
        }

    }

    static async store(req, res) {
        const { username, email, password } = req.body
        res.setHeader('Content-Type', 'application/json')
        try {
            const hashPassword = await bcrypt.hash(password, 12)
            const author = await Author.create({
                username: username,
                email: email,
                password: hashPassword,
                photo: 'anjay'
            })
            res.status(201).json(response('success', 'Author Created', author))
        } catch (err) {
            res.status(500).json(response('fail', err))
        }
    }

    static async update(req, res) {
        const id = req.params.id
        const { username, email, password } = req.body
        try {
            const author = await Author.update({
                username: username,
                email: email
            }, {
                where: {
                    id: id
                }
            })
            res.status(200).json(response('success', 'Author Updated', author))
        } catch(err) {
            res.status(500).json(response('fail', err))
        }
    }

    static async show(req, res) {
        const author = await Author.findAll({
            where: {
                id: req.params.id
            },
            include: [
                { model: Post },
                { model: Comment }
            ]
        })
        try {
            res.status(200).json(response('success', 'Author By ID', author))
        } catch (err) {
            res.status(500).json(response('fail', err))
        }
    }
    
    static async delete(req, res) {
        const id = req.params.id
        try {
            await Author.destroy({
                where: {
                    id: id
                }
            })
            res.status(200).json(response('success', 'Author Deleted'))
        } catch (err) {
            res.status(500).json(response('fail', err))
        }
    }
}

module.exports = AuthorController