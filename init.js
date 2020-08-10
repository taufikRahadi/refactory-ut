const { exec } = require('child_process')

function init () {
    exec('yarn install', (error, stderr, stdout) => {
        if (error) {
            console.log(error)
            return
        }

        if (stderr) {
            console.log(stderr)
            return
        }

        console.log(stdout)
    })

    exec('cp .env.example .env', (error, stderr, stdout) => {
        if (error) {
            console.log(error)
            return
        }

        if (stderr) {
            console.log(stderr)
            return
        }

        console.log(stdout)
    })

    exec('yarn sequelize-cli db:migrate', (error, stderr, stdout) => {
        if (error) {
            console.log(error)
            return
        }

        if (stderr) {
            console.log(stderr)
            return
        }

        console.log(stdout)
    })
}
init()
