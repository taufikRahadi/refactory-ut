const roman = require('../src/15.js')

const romanNum = ["I", "II", "III", "V", "VI", "X", "L", "C", "D", "M", "MMXVIII"]
const intNum = [1, 2, 3, 5, 6, 10, 50, 100, 500, 1000, 2018]

test('convert roman numeric to integer', () => {
    romanNum.forEach((num, index) => {
        expect(roman(num)).toEqual(intNum[index])
    })
})