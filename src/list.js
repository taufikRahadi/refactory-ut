const db = require('../config/db-connection.js')
const Task = require('../models/Task.js')

const tasksList = async () => {
    return Task.find()
        .then(tasks => {
            tasks.forEach(task => console.log(`${task._id}. ${task.text} ${task.status ? "(DONE)" : ""}`))
            db.close()
        })
}
module.exports = tasksList