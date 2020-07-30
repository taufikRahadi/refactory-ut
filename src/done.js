const Task = require('../models/Task.js')
const list = require('./list.js')

const doneTask = id => {
    return Task.findOneAndUpdate({_id: id}, {status: true}).then(() => list())
}

module.exports = doneTask