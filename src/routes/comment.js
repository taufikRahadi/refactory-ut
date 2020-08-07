const router = require('express').Router()
const CommentController = require('../controllers/comment-controller')
const authorization = require('../middleware/authorization')

router.get('/', authorization, CommentController.index)
router.post('/', authorization, CommentController.store)
router.get('/:id', authorization, CommentController.show)
router.put('/:id', authorization, CommentController.update)
router.delete('/:id', authorization, CommentController.delete)

module.exports = router