const fs = require('fs')

const readDir = new Promise((resolve, reject) => {
    fs.readdir('/', (err, result) => {
        return (err) ? reject(err.message) : resolve(result)
    })
})

readDir.then(res => {
    console.log(res)
})