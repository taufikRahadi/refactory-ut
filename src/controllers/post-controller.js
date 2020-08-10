const { Post, Author, Comment } = require('../models')
const response = require('../utils/response-template')
const cloudinary = require('../middleware/cloudinary')
const fs = require('fs')

class PostController {
    static async index (req, res) {
        try {
            const posts = await Post.findAll({
                include: [
                    { model: Author, as: 'author' },
                    { model: Comment, as: 'comments' }
                ]
            })
    
            res.status(200).json(response('success', 'Post Fetched', posts))
        } catch (err) {
            res.status(500).json(response('fail', err))
        }
    }

    static async store (req, res) {
        const { title, content, tags, status, authorId } = req.body
        const image = req.file.path
        try {
            const upload = await cloudinary(image)
            const post = await Post.create({
                title: title,
                content: content,
                tags: tags,
                status: status,
                photo: upload.secure_url,
                authorId: authorId
            })
            res.status(201).json(response('success', 'Post Created', post))
            fs.unlinkSync(image)
        } catch (err) {
            res.status(500).json(response('fail', err))
        }
    }

    static async update (req, res) {
        const { title, content, tags, status, authorId } = req.body
        try {
            const post = await Post.update({
                title: title,
                content: content,
                tags: tags,
                status: status,
                authorId: authorId
            }, {
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json(response('success', 'Post Updated', post))
        } catch (err) {
            res.status(500).json(response('fail', err))
        }
    }

    static async show (req, res) {
        const post = await Post.findOne({
            where: {
                id: req.params.id
            },
            include: [
                { model: Author }
            ]
        })
        if (post) res.status(200).json(response('success', 'Post By Id', post))
        else res.status(404).json(response('fail', 'post not found'))
    }

    static async delete (req, res) {
        const findPost = await Post.findByPk(req.params.id)
        if (findPost) {
            try {
                await Post.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                res.status(204)
            } catch (err) {
                res.status(500).json(response('fail', err))
            }
        } else res.status(404).json(response('fail', 'post not found'))
    }
}

module.exports = PostController