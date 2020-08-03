const mongoose = require('mongoose')
const config = require('dotenv').config()

const connection = {}
const connectDb = async () => {
    if(connection.connection) {
        console.log('Using existing connection')
        return 
    } else {
        const db = await mongoose.connect(process.env.DATABASE_URI + process.env.DATABASE_NAME, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })

        console.log('Database connection established')
        connection.isConnected = db.connections[0].readyState
    }
}

module.exports = connectDb