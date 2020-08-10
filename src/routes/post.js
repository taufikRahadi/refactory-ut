const router = require('express').Router()
const PostController = require('../controllers/post-controller')
const upload = require('../middleware/upload')

router.get('/', PostController.index)
router.post('/', upload.single('photo'), PostController.store)
router.put('/:id', PostController.update)
router.delete('/:id', PostController.delete)
router.get('/:id', PostController.show)

module.exports = router