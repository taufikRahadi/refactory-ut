const Task = require('../models/Task.js')
const list = require('./list.js')

const addNewTask = text => {
    return Task.create({ text: text }).then(() => {
        list()
    })
}
module.exports = addNewTask