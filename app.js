const express = require('express')
const app = express()
const authorRoutes = require('./src/routes/author')
const postRoutes = require('./src/routes/post')
const commentRoutes = require('./src/routes/comment')
const authRoutes = require('./src/routes/auth')
const path = require('path')
const authorization = require('./src/middleware/authorization')
const { setQueues } = require('bull-board')
const { UI } = require('bull-board')
const { emailQueue, pdfQueue } = require('./src/queue/signup')
const RegisterController = require('./src/controllers/register-controller')

setQueues([emailQueue, pdfQueue])

app.use('/admin/queues', UI)

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.post('/signup', RegisterController.register)
app.use('/author', authorization, authorRoutes)
app.use('/post', authorization, postRoutes)
app.use('/comment', authorization, commentRoutes)
app.use('/auth', authRoutes)

app.get('*', (req, res) => {
    res.status(404).json({ status: 'fail', message: 'notfound' })
})

app.listen(3000, () => console.log('Listened on port 3000'))
