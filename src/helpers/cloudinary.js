require('dotenv').config()
const cloudinary = require('cloudinary').v2
const response = require('../utils/response-template')
const fs = require('fs')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

module.exports = (file) => {
    return new Promise((resolve, reject) => {
        const filename = new Date().toUTCString()
        return cloudinary.uploader.upload(file, { public_id: `posts/${filename}`, tags: 'posts' }, (err, image) => {
            if(err) reject(new Error(err))
            resolve(image)
        })
    })
}