const isLeapYear = require('../src/04')

test('2000 is leap year & 2001 is not leap year', () => {
    expect(isLeapYear(2000)).toBeTruthy()
    expect(isLeapYear(2000)).not.toBeFalsy()
    expect(isLeapYear(2001)).toBeFalsy()
    expect(isLeapYear(2001)).not.toBeTruthy()
})