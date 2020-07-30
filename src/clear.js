const Task = require('../models/Task')
const list = require('./list.js')

const clearTasks = () => {
    return Task.deleteMany({}).then(() => list())
}

module.exports = clearTasks