const { Comment, Post, Author } = require('../models')
const response = require('../utils/response-template')

class CommentController {
    static async index (req, res) {
        try {
            const comments = await Comment.findAll({
                include: [
                    { model: Author },
                    { model: Post }
                ]
            })
            res.status(200).json(response('success', 'Comments fetched', comments))
        } catch (err) {
            res.status(500).json(response('fail', err))
        }
    }

    static async store (req, res) {
        const { content, status, authorId, email, url, postId } = req.body
        try {
            const comment = await Comment.create({
                content: content,
                status: status,
                authorId: authorId,
                email: email,
                url: url,
                postId: postId
            })
            res.status(201).json(response('success', 'Comment Created', comment))
        } catch (err) {
            res.status(500).json(response('fail', err))
        }
    }

    static async update (req, res) {
        const { content, status, authorId, email, url, postId } = req.body
        const findComment = Comment.findByPk(req.params.id)
        if (findComment) {
            try {
                const comment = await Comment.update({
                    content: content,
                    status: status,
                    authorId: authorId,
                    email: email,
                    url: url,
                    postId: postId
                }, {
                    where: {
                        id: req.params.id
                    }
                })
    
                res.status(200).json(response('success', 'Comment Updated', comment))
            } catch (err) {
                res.status(500).json(resposne('fail', err))
            }
        } else res.status(404).json(response('fail', 'comment not found'))
    }

    static async  show (req, res) {
        const comment = await Comment.findOne({
            where: {
                id: req.params.id
            }, include: [
                { model: Author },
                { model: Post }
            ]
        })
        if (comment) res.status(200).json(response('success', 'Comment By Id', comment))
        else res.status(404).json(response('fail', 'Comment Not Found'))
    }

    static async delete (req, res) {
        const findComment = await Comment.findByPk(req.params.id)
        if (findComment) {
            try {
                await Comment.destroy({ 
                    where: {
                        id: req.params.id
                    }
                })
                res.status(200).json(response('success', 'Comment Deleted'))
            } catch (err) {
                res.status(500).json(response('fail', err))
            }
        } else res.status(404).json(response('fail', 'comment not found'))
    }
}

module.exports = CommentController