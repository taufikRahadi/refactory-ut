const Bull = require('bull')

const emailQueue = new Bull('email-queue')
const pdfQueue = new Bull('pdf-queue')
// const signupQueue = new Bull('signup-queue')

// const sendMailRegister = require('../services/mail-service')
// const generatePDF = require('../services/generate-pdf')

// emailQueue.process(async (payload) => {
//     return await sendMailRegister(payload)
// })

// pdfQueue.process((data) => {
//     const pdf = generatePDF(data)
//     return done(pdf)
// })


module.exports = { emailQueue, pdfQueue }