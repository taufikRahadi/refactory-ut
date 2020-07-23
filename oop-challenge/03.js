const fs = require('fs')

class Log
{
    constructor(filename)
    {
        const logData = [
            {
                level: 'info',
                message: 'This is an information about something.'
            },
            {
                level: 'error',
                message: "We can't divide any numbers by zero."
            },
            {
                level: 'notice',
                message: 'Someone loves your status'
            },
            {
                level: 'warning',
                message: 'Insufficient funds'
            },
            {
                level: 'debug',
                message: 'This is debug message'
            },
            {
                level: 'alert',
                message: 'Achtung! achtung!'
            },
            {
                level: 'critical',
                message: "Medic!! We've got critical damages."
            },
            {
                level: 'emergency',
                message: "System hung. Contact system administrator immediately!"
            }
        ]
        this.data = logData
        this.fileName = filename
    }

    writeLog(level = "INFO", message)
    {
        const log = this.data[Math.floor(Math.random() * this.data.length)]
        const msg = `\n[${new Date().toISOString()}] ${level.toUpperCase()}: ${message}` 
        fs.appendFile(this.fileName, msg, (err, data) => {
            if(err) console.error(err)
            console.log(data)
        })
    }

    critical(message)
    {
        this.writeLog("CRITICAL", message)
    }

    emergency(message)
    {
        this.writeLog("EMERGENCY", message)
    }

    alert(message)
    {
        this.writeLog("alert", message)
    }
}

const log = new Log('app.log')

// log.writeLog("EMERGENCY", "System hung. Contact system administrator immediately!")

log.critical("Medic, we've got critical damage")
log.alert("emang bangsat")