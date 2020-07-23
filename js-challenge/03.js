function convertToArrayOfObjects() {
    const csv = `NAME, CATEGORY, PRICE,
    Xiaomi Redmi 5A, Smartphone, 1199000,
    Macbook Air, Laptop, 13775000,
    Samsung Galaxy J7, Smartphone, 3549000,
    DELL XPS 13, Laptop, 26799000,
    Xiaomi Mi 6, Smartphone, 5399000,
    LG V30 Plus, Smartphone, 10499000`

    const arrayCsv = csv.split(',').map(s => s.replace(/''/gi, '').trim())

    const outputJson = []

    const generateCurrencyFormat = (number) => {
        let numberString = number.replace(/[^,\d]/g, '').toString(),
        split = numberString.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi)

        if(ribuan) {
            let separator = sisa ? '.' : ''
            rupiah += separator + ribuan.join('.')
        }

        rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah
        return 'Rp. ' + rupiah
    }

    for(let i = 3; i < arrayCsv.length; i += 6) {
        const [name, category, price] = arrayCsv.slice(i, i + 3)
        
        outputJson.push({
            name,
            category,
            price: generateCurrencyFormat(price)
        })
    }

    return outputJson
}

console.log(convertToArrayOfObjects())