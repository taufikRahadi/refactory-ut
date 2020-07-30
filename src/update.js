const Task = require('../models/Task.js')
const list = require('./list.js')

const undoneTask = (id, text) => {
    return Task.findByIdAndUpdate({_id: id}, {text: text, status: false}).then(() => list())
}

module.exports = undoneTask