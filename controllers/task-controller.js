const express = require('express')
const router = express.Router()
const Task = require('../models/Task.js')

// index page
router.get('/list', async (req, res) => {
    const tasks = await Task.find()
    res.render('pages/index.pug', { tasks })
})

// edit page
router.get('/:id/edit', async (req, res) => {
    const id = req.params.id
    const task = await Task.findById({ _id: id })
    res.render('pages/edit.pug', { task })
})

// delete task
router.get('/:id/delete', async (req, res) => {
    const id = req.params.id
    try {
        await Task.findByIdAndDelete({ _id: id })
        res.redirect('/list')
    } catch(error) {
        console.error(error)
    }
})

// store or update task
router.post('/', async (req, res) => {

    const id = req.body._id
    let task
    // if id is exists in request body
    if(id) {
        const { title, description } = req.body
        const status = req.body.status > 0 ? true : false
        task = await Task.findByIdAndUpdate({ _id: id }, { title: title, description: description, status: status })
    } else {
        const { title, description } = req.body
        task = await Task.create({ title: title, description: description })
    }
    if(task) 
        res.redirect('/list')
})

module.exports = router