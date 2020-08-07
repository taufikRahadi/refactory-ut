const { Author, Post, Comment } = require('../models')
const response = require('../utils/response-template')

class AuthorController {    
    static async index(req, res) {
        try {
            const authors = await Author.scope('withoutPassword').findAll({
                include: [
                    { model: Post, as: 'posts' },
                    { model: Comment, as: 'comments' }
                ]
            })
            res.json(response('success', 'Authors fetched', authors))
        } catch (err) {
            res.status(500).json(response('fail', err))
        }
    }

    static async store(req, res) {
        const { username, email, password, photo } = req.body
        res.setHeader('Content-Type', 'application/json')
        try {
            const author = await Author.create({
                username: username,
                email: email,
                password: password,
                photo: photo
            })
            res.status(201).json(response('success', 'Author Created', author))
        } catch (err) {
            res.status(500).json(response('fail', err))
        }
    }

    static async update(req, res) {
        const id = req.params.id
        const { username, email, password, photo } = req.body
        try {
            const author = await Author.update({
                username: username,
                email: email,
                password: password,
                photo: photo
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
        try {
            const author = await Author.scope('withoutPassword').findOne({
                where: {
                    id: req.params.id
                },
                include: [
                    { model: Post, as: 'posts' },
                    { model: Comment, as: 'comments' }
                ]
            })
            res.status(200).json(response('success', 'Author By ID', author))
        } catch (err) {
            res.status(500).json(response('fail', err))
        }
    }
    
    static async delete(req, res) {
        const id = req.params.id
        const findAuthor = await Author.find({ where: { id: req.params.id } })
        if(findAuthor) {
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
}

module.exports = AuthorController