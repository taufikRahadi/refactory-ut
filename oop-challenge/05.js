
const https = require('https')

class Http
{
    static get(url)
    {
        return new Promise((resolve, reject) => {
            https.get(url, res => {
                let data = ''
    
                res.on('data', d => {
                    data += d
                })
                res.on('end', () => {
                    resolve(data)
                })
            })
        })
    }

    static post(payload)
    {
        const data = JSON.stringify(payload)

        
    }
}

Http.get('https://reqres.in/api/users/2').then(res => {
    console.log(JSON.parse(res))
})

Http.post(JSON.stringify({
    name: 'John Doe',
    job: 'Content Writer'
}))