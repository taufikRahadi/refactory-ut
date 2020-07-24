const symmetrical = require('../src/09.js')

test('check if input is symmetric or not', () => {
    expect(symmetrical('malam')).toBeTruthy()
    expect(symmetrical('taat')).toBeTruthy()
    expect(symmetrical('tidur')).toBeFalsy()
    expect(symmetrical(1234)).toBeFalsy()
    expect(symmetrical(108801)).toBeTruthy()
    expect(symmetrical(8001008)).toBeTruthy()
})