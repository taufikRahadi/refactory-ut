const leapYear = require('../src/04.js')

test('detect leap year', () => {
    expect(leapYear(2000)).toBeTruthy()
    expect(leapYear(2021)).toBeFalsy()
})