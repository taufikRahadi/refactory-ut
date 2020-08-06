const router = require('express').Router()
const CommentController = require('../controllers/comment-controller')

router.get('/', CommentController.index)
router.post('/', CommentController.store)
router.get('/:id', CommentController.show)
router.put('/:id', CommentController.update)
router.delete('/:id', CommentController.delete)

module.exports = router