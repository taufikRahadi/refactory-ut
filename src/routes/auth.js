const AuthController = require('../controllers/auth-controller')
const router = require('express').Router()
const authorization = require('../middleware/authorization')

router.post('/signup', AuthController.signup)
router.post('/login', AuthController.login)
router.get('/current-user', authorization, AuthController.currentUser)

module.exports = router
