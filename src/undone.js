const Task = require('../models/Task.js')
const list = require('./list.js')

const undoneTask = id => {
    return Task.findOneAndUpdate({_id: id}, {status: false}).then(() => list())
}

module.exports = undoneTask