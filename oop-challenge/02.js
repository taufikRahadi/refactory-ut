const crypto = require('crypto')

class Cipher
{
    constructor()
    {
        this.password = ''
        this.text = ''
        this.encryptedText = ''
    }

    setPassword(password)
    {
        this.password = password
        return this
    }

    getPassword()
    {
        return this.password
    }

    encrypt(text, password)
    {
        if(password) {
            this.setPassword(password)
            const key = crypto.createCipher('aes-128-cbc', this.getPassword())
            let str = key.update(text, 'utf8', 'hex')
            this.encryptedText = (str += key.final('hex'))
            return this.encryptedText
        } else {
            return "Anyone without password cant read this message"
        }
    }

    decrypt(text, password)
    {
        if(password === this.getPassword()) {
            const key = crypto.createDecipher('aes-128-cbc', this.getPassword())
            let str = key.update(text, 'hex', 'utf8')
            return this.encryptedText = (str += key.final('utf8'))
        } else {
            return "unauthorized"
        }
    }
}

// console.log(Cipher.encrypt('ini text', 'password'))

const cipher = new Cipher()
const message = cipher.encrypt('Ini tulisan rahasia', 'p4$$w012d')
console.log(message)
console.log(cipher.decrypt(message, 'p4$$w012d'))