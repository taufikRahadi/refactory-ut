require('dotenv').config()
const nodemailer = require('nodemailer')
const config = require('../../config/nodemailer-config')
const handlebars = require('handlebars')

const readHTMLFile = require('../helpers/readHTMLFiles')

const templatePath = __dirname + '/../views/email/'

async function sendMailRegister(payload) {  
    const transporter = await nodemailer.createTransport(config)

    readHTMLFile(templatePath + 'register-template.html', (err, html) => {
      if(err) throw Error(err.message)
      const template = handlebars.compile(html)
      const replacements = {
        fullname: payload.fullname,
        address: payload.address,
        phone: payload.phone
      }

      const htmlTemplate = template(replacements)
      const mail = {
        to: payload.email,
        from: process.env.AUTH_EMAIL_USER,
        subject: 'Registration Success',
        html: htmlTemplate,
        attachments: [
          {
            filename: payload.fullname + '_data.pdf',
            path: payload.pdf
          }
        ]
      }
      transporter.sendMail(mail)
    })
  }

  module.exports = sendMailRegister