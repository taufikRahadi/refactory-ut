const roman = text => {
    const myMap = new Map()
    myMap.set('I', 1);
    myMap.set('V', 5);
    myMap.set('X', 10);
    myMap.set('L', 50);
    myMap.set('C', 100);
    myMap.set('D', 500);
    myMap.set('M', 1000);

    let num = 0
    const splitted = text.split('')

    splitted.forEach((n, i) => {
        num += myMap.get(n) < myMap.get(splitted[i+1]) ? -myMap.get(n) : myMap.get(n)
    })

    return num
}

module.exports = roman
roman('I')   // 1
roman('II')  // 2
roman('III') // 3
roman('V')   // 5
roman('VI')  // 6
roman('X')   // 10
roman('L')   // 50
roman('C')   // 100
roman('D')   // 500
roman('M')   // 1000
roman('MMXVIII') // 2018
