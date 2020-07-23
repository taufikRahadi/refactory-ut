const fs = require('fs')

const csvToJson = csv => {
    const [header, ...array] = csv.split('\n')

    const newObject = array.map(val => {
        const items = val.split(', ')
        const obj = {}

        header.split(', ').map(value => value.toLowerCase()).forEach((element, index) => {
            if(element === 'price') {
                obj[element] = new Intl.NumberFormat("id-ID", { style: 'currency', currency: 'IDR' }).format(parseInt(items[index]))
            } else {
                obj[element] = items[index]
            }
        })

        return obj
    })

    return newObject
}

fs.readFile('03.csv', 'utf8', (err, data) => {
    if(err) console.log(err)
    else console.log(csvToJson(data))
})