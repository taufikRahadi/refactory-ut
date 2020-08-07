const router = require('express').Router()
const PostController = require('../controllers/post-controller')
const authorization = require('../middleware/authorization')

router.get('/', authorization, PostController.index)
router.post('/', authorization, PostController.store)
router.put('/:id', authorization, PostController.update)
router.delete('/:id', authorization, PostController.delete)
router.get('/:id', authorization, PostController.show)

module.exports = router