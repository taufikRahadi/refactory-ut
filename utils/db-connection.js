const mongoose = require('mongoose')

const connection = {}
async function connectDb () {
    if(connection.connection) {
        console.log('Using existing connection')
        return
    }

    const db = await mongoose.connect('mongodb://localhost:27017/todo', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })

    console.log('DB connected')
    connection.isConnected = db.connections[0].readyState
}

module.exports = connectDb