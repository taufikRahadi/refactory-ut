const Task = require('../models/Task.js')
const list = require('./list.js')

const deleteTask = async id => {
    return Task.findOneAndDelete({_id: id}).then(() => list())
}

module.exports = deleteTask