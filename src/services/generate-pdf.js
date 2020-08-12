const readHTMLFile = require('../helpers/readHTMLFiles')
const pdf = require('pdf-creator-node')

function generatePDF (data) {

    return readHTMLFile(__dirname + '/../views/pdf/register-template.html', (err, html) => {
        if(err) throw new Error(err.message)
        const options = {
            format: 'A4',
            orientation: 'portrait',
            border: '10mm'
        }

        const document = {
            html: html,
            data: data,
            path: data.username+'.pdf'
        }

        return pdf.create(document, options)
            .then(res => res)
            .catch(err => new Error(err.message))
    })
}

module.exports = generatePDF