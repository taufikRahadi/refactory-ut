const { User } = require('../models')
const response = require('../utils/response-template')
const { emailQueue, pdfQueue } = require('../queue/signup')
const sendMailRegister = require('../services/mail-service')
const generatePDF = require('../services/generate-pdf')

class RegisterController {
    static async register (req, res) {
        try {
            const author = await User.create({ ...req.body })
            pdfQueue.add(author, { delay: 1000 })
            pdfQueue.process(async job => {
                return await generatePDF(job.data)
            })

            pdfQueue.on('completed', (err, result) => {
                if(err) res.json(err.message)
                console.log(result)
                emailQueue.add({...author.dataValues, pdf: result.filename}, { delay: 1000 })
                emailQueue.process(async job => {
                    console.log(job.data)
                    try {
                        return await sendMailRegister(job.data)
                    } catch (error) {
                        res.status(500).json(error.message)
                    }
                })
            })
            res.status(201).json(response('success', 'register succes', author))
        } catch (err) {
            res.status(500).json(response('fail', err.message))
        }
    }
}

module.exports = RegisterController
