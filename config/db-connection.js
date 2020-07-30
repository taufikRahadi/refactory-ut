const mongoose = require('mongoose')
const config = require('dotenv').config()

const db = mongoose.createConnection(process.env.DATABASE_URI + process.env.DATABASE_NAME, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
})
module.exports = db

// const testConnection = () => {
//     const db = mongoose.connection
//     db.on('error', err => console.log('[Error]: ' + err))
//     db.once('open', () => console.log('connection established'))
        // mongoose.disconnect()
// }