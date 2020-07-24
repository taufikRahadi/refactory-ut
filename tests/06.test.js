const repeatString = require('../src/06.js')

test('repeat string 3 time', () => {
    expect(repeatString('Makan! ', 3)).toBe('Makan! Makan! Makan! ')
})