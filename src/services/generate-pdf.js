const readHTMLFile = require('../helpers/readHTMLFiles')
const pdf = require('pdf-creator-node')

function generatePDF (data) {
    return new Promise((resolve, reject) => {
        return readHTMLFile(__dirname + '/../views/pdf/register-template.html', async (err, html) => {
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
            try {
                const create = await pdf.create(document, options)
                resolve(create)
            } catch (error) {
                reject(error)
            }

        })
    })
}

module.exports = generatePDF