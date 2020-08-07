const router = require('express').Router()
const PostController = require('../controllers/post-controller')

router.get('/', PostController.index)
router.post('/', PostController.store)
router.put('/:id', PostController.update)
router.delete('/:id', PostController.delete)
router.get('/:id', PostController.show)

module.exports = router