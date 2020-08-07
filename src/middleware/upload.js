const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/images')
    },
    filename: (req, file, callback) => {
        const extension = file.mimetype.split('/')[1]
        callback(null, `${file.fieldname}-${Date.now().toLocaleString()}.${extension}`)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2000 * 1024
    },
    fileFilter: (req, file, callback) => {
        if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') callback(null, true)
        else {
            callback(null, false)
            return callback(new Error('File Bukan Gambar'))
        }
    }
})

module.exports = upload