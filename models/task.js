const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    name: String,
    description: String,
    photo: String,
    status: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Task', taskSchema)