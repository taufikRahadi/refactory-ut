const express = require('express')
const app = express()
const config = require('dotenv').config()
const port = process.env.PORT
const taskController = require('./controllers/task-controller.js')
const connectDb = require('./config/db-connection.js')
const bodyParser = require('body-parser')

connectDb()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', taskController)
app.use(express.static('public'))

app.get('/', (req, res) => res.redirect('/list'))

app.listen(port, () => console.log('listened on port ' + port))