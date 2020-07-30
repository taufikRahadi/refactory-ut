const db = require('../config/db-connection.js')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const autoIncrement = require('mongoose-auto-increment')

autoIncrement.initialize(db)

const taskSchema = new Schema({
    text: String,
    status: { type: Boolean, default: false }
})


taskSchema.plugin(autoIncrement.plugin, {
    model: 'Task',
    field: '_id',
    startAt: 1
})
const Task = db.model('Task', taskSchema)
module.exports = Task