const Task = require('../models/task')

class TaskController {
    static async taskList (req, res) {
        const tasks = await Task.find()
        res.render('index.pug', { tasks })
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
                res.redirect('/task/list')
            }
        } else {
            try {
                task = await Task.create({ name: body.name, description: body.description, photo: file.filename })
            } catch(err) {
                throw new Error(err)
            } finally {
                res.redirect('/task/list')
            }
        }
    }

    static async editTask (req, res) {
        const task = await Task.findById({ _id: req.params.id })
        res.render('edit.pug', { task })
    }

    static async deleteTask (req, res) {
        try {
            await Task.findByIdAndDelete({ _id: req.params.id })
        } catch (err) {
            throw new Error (err)
        } finally {
            res.redirect('/task/list')
        }
    }

}

module.exports = TaskController