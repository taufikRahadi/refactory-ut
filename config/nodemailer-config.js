require('dotenv').config()

module.exports = {
    service: 'gmail',
    auth: {
        user: process.env.AUTH_EMAIL_USER,
        pass: process.env.AUTH_EMAIL_PASSWORD
    }
}
