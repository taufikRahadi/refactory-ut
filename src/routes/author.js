const router = require('express').Router()
const AuthorController = require('../controllers/author-controller')

router.get('/', AuthorController.index)
router.post('/', AuthorController.store)
router.get('/:id', AuthorController.show)
router.put('/:id', AuthorController.update)
router.delete('/:id', AuthorController.delete)

module.exports = router