const crypto = require('crypto')

class Hash
{
    static md5(password) 
    {
        return crypto.createHash('md5').update(password).digest('hex')
    }

    static sha1(password)
    {
        return crypto.createHash('sha1').update(password).digest('hex')
    }

    static sha256(password)
    {
        return crypto.createHash('sha256').update(password).digest('hex')
    }
    
    static sha512(password)
    {
        return crypto.createHash('sha512').update(password).digest('hex')
    }
}

const password = 'password'

console.log(Hash.md5(password))
console.log(Hash.sha1(password))
console.log(Hash.sha256(password))
console.log(Hash.sha512(password))