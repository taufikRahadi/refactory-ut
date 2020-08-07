const router = require('express').Router()
const AuthorController = require('../controllers/author-controller')
const authorization = require('../middleware/authorization')

router.get('/', authorization, AuthorController.index)
router.post('/', authorization, AuthorController.store)
router.get('/:id', authorization, AuthorController.show)
router.put('/:id', authorization, AuthorController.update)
router.delete('/:id', authorization, AuthorController.delete)

module.exports = router