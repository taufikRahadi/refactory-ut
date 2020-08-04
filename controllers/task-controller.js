require('dotenv').config()
const Task = require('../models/task')
const appUrl = process.env.APP_URL

class TaskController {
    static async taskList (req, res) {
        const tasks = await Task.find()
        res.render('index.pug', { tasks, appUrl: appUrl })
    }

    static async createTask (req, res) {
        const { body, file } = req
        let task
        if(body._id) {
            task = await Task.findOne({ _id: body._id })
            task.name = body.name
            task.description = body.description
            task.status = body.status > 0
            task.photo = file ? file.filename : task.photo
            try {
                task.save()
            } catch(err) {
                throw new Error(err)
            } finally {
                res.redirect('/task/')
            }
        } else {
            try {
                task = await Task.create({ name: body.name, description: body.description, photo: file.filename })
            } catch(err) {
                throw new Error(err)
            } finally {
                res.redirect('/task/')
            }
        }
    }

    static async editTask (req, res) {
        const task = await Task.findById({ _id: req.params.id })
        res.render('edit.pug', { task, appUrl: appUrl })
    }

    static async deleteTask (req, res) {
        try {
            await Task.findByIdAndDelete({ _id: req.params.id })
        } catch (err) {
            throw new Error (err)
        } finally {
            res.redirect('/task/')
        }
    }

}

module.exports = TaskController