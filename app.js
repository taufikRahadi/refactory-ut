const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const authorRoutes = require('./src/routes/author')
const postRoutes = require('./src/routes/post')
const commentRoutes = require('./src/routes/comment')
const authRoutes = require('./src/routes/auth')
const path = require('path')
const authorization = require('./src/middleware/authorization')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/author', authorization, authorRoutes)
app.use('/post', authorization, postRoutes)
app.use('/comment', authorization, commentRoutes)
app.use('/auth', authRoutes)

app.get('*', (req, res) => {
    res.status(404).json({ status: 'fail', message: 'notfound' })
})

app.listen(3000, () => console.log('Listened on port 3000'))
